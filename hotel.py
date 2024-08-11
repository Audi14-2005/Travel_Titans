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
warnings.simplefilter(action='ignore', category=FutureWarning)
uploaded = files.upload()
file_content = next(iter(uploaded.values())).decode("utf-8")
data = json.loads(file_content)
hotel_records = []
for entry in data:
    hotels = entry.get('hotels', {}).values()
    for hotel in hotels:
        hotel_records.append({
            'username': hotel.get('username'),
            'hotel_id': hotel.get('hotel_id'),
            'userrating': hotel.get('userrating')
        })
hotel_df = pd.DataFrame(hotel_records)
if hotel_df.empty:
    raise ValueError("The DataFrame is empty. Please check the input data.")
    user_hotel_matrix = hotel_df.pivot(index='username', columns='hotel_id', values='userrating').fillna(0)
scaler = StandardScaler()
user_hotel_matrix_scaled = scaler.fit_transform(user_hotel_matrix)
num_users = hotel_df['username'].nunique()
num_clusters = min(3, num_users) 
kmeans = KMeans(n_clusters=num_clusters, random_state=42, n_init=10)
user_clusters = kmeans.fit_predict(user_hotel_matrix_scaled)
hotel_df['cluster'] = hotel_df['username'].map(lambda x: user_clusters[user_hotel_matrix.index.get_loc(x)])
hotel_avg_ratings = hotel_df.groupby('hotel_id')['userrating'].mean().to_dict()
global_avg_rating = hotel_df['userrating'].mean()
reader = Reader(rating_scale=(1, 5))
data = Dataset.load_from_df(hotel_df[['username', 'hotel_id', 'userrating']], reader)
trainset, testset = train_test_split(data, test_size=0.25, random_state=42)
algo = SVD()
algo.fit(trainset)
predictions = algo.test(testset)
print(f'RMSE: {accuracy.rmse(predictions)}')
svd_weight = 0.7
popularity_weight = 0.3
username = 'user29'
combined_list = []
hotel_ids = hotel_df['hotel_id'].unique()
for hotel_id in hotel_ids:
    if hotel_id in hotel_df[hotel_df['username'] == username]['hotel_id'].values:
        visited_rating = hotel_df[(hotel_df['username'] == username) & (hotel_df['hotel_id'] == hotel_id)]['userrating'].values[0]
        hybrid_score = visited_rating 
    else:
        predicted_rating = algo.predict(username, hotel_id).est
        popularity_score = hotel_avg_ratings.get(hotel_id, global_avg_rating)
        hybrid_score = (svd_weight * predicted_rating) + (popularity_weight * popularity_score)
        cluster_users = hotel_df[hotel_df['username'] == username]['cluster'].values[0]
        cluster_ratings = hotel_df[(hotel_df['hotel_id'] == hotel_id) & (hotel_df['cluster'] == cluster_users)]['userrating']
        if not cluster_ratings.empty:
            cluster_avg = cluster_ratings.mean()
            hybrid_score = (hybrid_score + cluster_avg) / 2  
        else:
            hybrid_score = (hybrid_score + global_avg_rating) / 2 
    combined_list.append((hotel_id, hybrid_score))
combined_list.sort(key=lambda x: x[1], reverse=True)
print(f'\nCombined list of hotels for user {username}:')
for hotel_id, score in combined_list:
    print(f'Hotel ID {hotel_id} with score {score:.2f}')
selected_hotel = random.choice([h for h in combined_list[:5]])[0]
print(f'\nUser {username} selected Hotel ID {selected_hotel}.')
feedback_rating = 5.0
new_feedback = {
    'username': username,
    'hotel_id': selected_hotel,
    'userrating': feedback_rating,
    'cluster': user_clusters
}
hotel_df = pd.concat([hotel_df, pd.DataFrame([new_feedback])], ignore_index=True)
if selected_hotel in hotel_avg_ratings:
    current_avg = hotel_avg_ratings[selected_hotel]
    current_count = hotel_df[hotel_df['hotel_id'] == selected_hotel].shape[0] - 1
    new_avg = ((current_avg * current_count) + feedback_rating) / (current_count + 1)
    hotel_avg_ratings[selected_hotel] = new_avg
else:
    hotel_avg_ratings[selected_hotel] = feedback_rating
data = Dataset.load_from_df(hotel_df[['username', 'hotel_id', 'userrating']], reader)
trainset = data.build_full_trainset()
algo.fit(trainset)
# hotel final code machine learning