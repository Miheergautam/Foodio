const Restaurant = require("../models/Restaurant");

// Fetch restaurants by country and city
const getRestaurantList = async (req, res) => {
  const { country, city } = req.query;

  if (!country || !city) {
    return res.status(400).json({ message: "Country and City are required" });
  }

  try {
    const restaurants = await Restaurant.find({ country, city });
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: "Error fetching restaurants" });
  }
};

// Fetch a single restaurant's details
const getRestaurantDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const restaurant = await Restaurant.findById(id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: "Error fetching restaurant details" });
  }
};

// Add a new restaurant (admin only)
const addRestaurant = async (req, res) => {
  try {
    const newRestaurant = await Restaurant.create(req.body);
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(400).json({ message: "Error adding restaurant" });
  }
};

// Update restaurant details (admin only)
const updateRestaurant = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res.status(200).json(updatedRestaurant);
  } catch (error) {
    res.status(400).json({ message: "Error updating restaurant" });
  }
};

// Remove a restaurant (admin only)
const deleteRestaurant = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(id);
    if (!deletedRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res.status(200).json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting restaurant" });
  }
};

module.exports = {
  getRestaurantList,
  getRestaurantDetails,
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
};