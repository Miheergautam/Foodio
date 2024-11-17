const express = require('express');
const authRoutes = require('./authRoutes');
const restaurantRoutes = require('./restaurantRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/restaurants', restaurantRoutes);

module.exports = router;