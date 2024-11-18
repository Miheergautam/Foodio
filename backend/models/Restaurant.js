const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },  
  country: { type: String, required: true },
  city: { type: String, required: true },
  rating: { type: Number, min: 0, max: 5 },
  contact: {
    phone: { type: String },
    email: { type: String },
    address: { type: String },
  },  
  menuItems: [ 
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      description: { type: String },
      image: { type: String },  
      category: { type: String }, 
      rating: { type: Number, min: 0, max: 5 },
    },
  ],
  reviews: [
    {
      customerName: { type: String },
      rating: { type: Number, min: 0, max: 5 },
      comment: { type: String },
      date: { type: Date, default: Date.now },
    },
  ], 
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;