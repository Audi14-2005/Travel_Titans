const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

mongoose.connect("mongodb+srv://230701194:Audi_14@cluster0.oaqei2w.mongodb.net/tourguide?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));


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

const UserModel = mongoose.model('Tour', UserSchema);


app.use(express.static('public'));


app.get('/api/users', async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.json(users);
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).send("Internal Server Error");
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
