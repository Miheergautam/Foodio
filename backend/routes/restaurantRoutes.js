const express = require("express");
const restaurantController = require("../controllers/restaurantController");
const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

// Public Routes
router.get("/list", restaurantController.getRestaurantList); 
router.get("/:id", restaurantController.getRestaurantDetails); 

// Admin Routes
router.post("/add", verifyToken, verifyAdmin, restaurantController.addRestaurant); 
router.patch("/update/:id", verifyToken, verifyAdmin, restaurantController.updateRestaurant); 
router.delete("/delete/:id", verifyToken, verifyAdmin, restaurantController.deleteRestaurant); 

module.exports = router;