const express = require("express");
const restaurantController = require("../controllers/restaurantController");
const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

// Public Routes
router.get("/list", restaurantController.getRestaurantList); //done
router.get("/:id", restaurantController.getRestaurantDetails); //done

// Admin Routes
router.post("/add", verifyToken, verifyAdmin, restaurantController.addRestaurant); //done
router.patch("/update/:id", verifyToken, verifyAdmin, restaurantController.updateRestaurant); //done
router.delete("/delete/:id", verifyToken, verifyAdmin, restaurantController.deleteRestaurant); // done

module.exports = router;