import warnings
import pandas as pd
from surprise import Dataset, Reader, SVD
from surprise.model_selection import train_test_split
from surprise import accuracy
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import json
from google.colab import files
import random

# Suppress specific FutureWarnings
warnings.simplefilter(action='ignore', category=FutureWarning)

# Upload and load the dataset
uploaded = files.upload()

# Load the JSON data from the uploaded file
file_content = next(iter(uploaded.values())).decode("utf-8")
data = json.loads(file_content)

# Flatten the JSON data into a DataFrame
records = []
for entry in data:
    s_no = entry.get('s_no')
    cityname = entry.get('cityname')
    # Access 'users' as a dictionary and get the values (assuming 'users' is a dictionary)
    users = entry.get('users', {}).values()  # Safely get the 'users' values, default to an empty dictionary if not present
    for user in users:
        records.append({
            's_no': s_no,
            'cityname': cityname,
            'username': user.get('username'),
            'userrating': user.get('userrating')
        })

# Convert the flattened records into a DataFrame
df = pd.DataFrame(records)

# Check if the DataFrame is empty
if df.empty:
    raise ValueError("The DataFrame is empty. Please check the input data.")

# Pivot the data for clustering (username x cityname matrix)
user_city_matrix = df.pivot(index='username', columns='cityname', values='userrating').fillna(0)

# Standardize the data for K-Means
scaler = StandardScaler()
user_city_matrix_scaled = scaler.fit_transform(user_city_matrix)

# Determine the number of unique users
num_users = df['username'].nunique()

# Set the number of clusters to be less than or equal to the number of users
num_clusters = min(3, num_users)  # Here, 3 is the upper limit for clusters

# Apply K-Means clustering
kmeans = KMeans(n_clusters=num_clusters, random_state=42, n_init=10)
user_clusters = kmeans.fit_predict(user_city_matrix_scaled)

# Add cluster info to the original DataFrame
df['cluster'] = df['username'].map(lambda x: user_clusters[user_city_matrix.index.get_loc(x)])

# Compute city popularity based on average user ratings
city_avg_ratings = df.groupby(['s_no', 'cityname'])['userrating'].mean().to_dict()

# Calculate the mean user rating across all cities and users
global_avg_rating = df['userrating'].mean()

# Load data into Surprise's format
reader = Reader(rating_scale=(1, 5))
data = Dataset.load_from_df(df[['username', 'cityname', 'userrating']], reader)
trainset, testset = train_test_split(data, test_size=0.25, random_state=42)

# Train the SVD model
algo = SVD()
algo.fit(trainset)
predictions = algo.test(testset)
print(f'RMSE: {accuracy.rmse(predictions)}')

# Set weights for hybrid model
svd_weight = 0.7
popularity_weight = 0.3

# Specify the username and s_no for prediction
username = 'user42'  # Example username
s_no = 1            # Example serial number for city

# Filter the data for the specified s_no
user_ratings = df[df['username'] == username]
user_cluster = df[df['username'] == username]['cluster'].values[0]
cluster_users = df[df['cluster'] == user_cluster]['username'].unique()

# Generate predictions for all cities in the dataset
combined_list = []

city_names = df['cityname'].unique()

for cityname in city_names:
    if cityname in user_ratings['cityname'].values:
        visited_rating = user_ratings[user_ratings['cityname'] == cityname]['userrating'].values[0]
        hybrid_score = visited_rating  # Use the actual user rating as the score
    else:
        predicted_rating = algo.predict(username, cityname).est
        popularity_score = city_avg_ratings.get((s_no, cityname), global_avg_rating)  # Fallback to global average if not available
        hybrid_score = (svd_weight * predicted_rating) + (popularity_weight * popularity_score)
        
        # Adjust the hybrid score based on similar users in the same cluster
        cluster_ratings = df[(df['cityname'] == cityname) & (df['username'].isin(cluster_users))]['userrating']
        if not cluster_ratings.empty:
            cluster_avg = cluster_ratings.mean()
            hybrid_score = (hybrid_score + cluster_avg) / 2  
        else:
            hybrid_score = (hybrid_score + global_avg_rating) / 2  # Use global average if no common users

    combined_list.append((cityname, hybrid_score))

# Sort the combined list by hybrid score
combined_list.sort(key=lambda x: x[1], reverse=True)

# Display combined list of cities
print(f'\nCombined list of cities for user {username}:')
for cityname, score in combined_list:
    print(f'City {cityname} with score {score:.2f}')

# Simulate user selecting one of the recommended cities
selected_city = random.choice([c for c in combined_list[:5]])[0]
print(f'\nUser {username} selected City {selected_city}.')

# Simulate positive feedback (e.g., user rating of 5)
feedback_rating = 5.0

# Reinforcement: Update the dataset with the new feedback
new_feedback = {
    's_no': s_no,
    'cityname': selected_city,
    'username': username,
    'userrating': feedback_rating,
    'cluster': user_cluster
}
df = pd.concat([df, pd.DataFrame([new_feedback])], ignore_index=True)

# Update only the affected city's average user rating instead of recomputing all
if (s_no, selected_city) in city_avg_ratings:
    current_avg = city_avg_ratings[(s_no, selected_city)]
    current_count = df[(df['cityname'] == selected_city) & (df['s_no'] == s_no)].shape[0] - 1
    new_avg = ((current_avg * current_count) + feedback_rating) / (current_count + 1)
    city_avg_ratings[(s_no, selected_city)] = new_avg
else:
    city_avg_ratings[(s_no, selected_city)] = feedback_rating

# Reload the data and retrain the model on the updated dataset
data = Dataset.load_from_df(df[['username', 'cityname', 'userrating']], reader)
trainset = data.build_full_trainset()
algo.fit(trainset)
#city final code machine learning