const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  country: { type: String, required: true },
  city: { type: String, required: true },
  dishes: [
    {
      name: { type: String },
      price: { type: Number },
      description: { type: String },
    },
  ],
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
