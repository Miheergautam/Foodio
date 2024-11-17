const express = require("express");
const authController = require("../controllers/authController");
const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

// Public routes (No authentication needed)
router.post("/register", authController.register);
router.post("/login", authController.login);

// Protected routes (Require authentication)
router.use(verifyToken);

router.post("/admin-dashboard", verifyToken, (req, res) => {
  res.status(200).json({ message: "Welcome to the Admin Dashboard" });
});

module.exports = router;
