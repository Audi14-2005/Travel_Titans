const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb+srv://230701194:Audi_14@cluster0.oaqei2w.mongodb.net/tourguide?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));

// Define the User schema
const UserSchema = new mongoose.Schema({
    s_no: Number,
    cityname: String,
    cityrating: Number,
    c_vc: Number,
    top_10_hotels: [{
        h_no: Number,
        hotel_name: String,
        hotel_rating: Number,
        h_vc: Number
    }],
    top_10_restaurants: [{
        r_no: Number,
        restaurant_name: String,
        restaurant_rating: Number,
        r_vc: Number
    }],
    top_10_tourist_places: [{
        t_no: Number,
        tourist_place: String,
        tourist_rating: Number,
        t_vc: Number
    }]
});

// Create a model for the User schema
const UserModel = mongoose.model('Tour', UserSchema);

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded request bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Serve the login page first
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Handle POST requests to /login (login form submission)
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        res.send('Login successful!');
    } else {
        res.send('Login failed. Invalid username or password.');
    }
});

// API route to get users (or tours)
app.get('/api/users', async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.json(users);
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).send("Internal Server Error");
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
