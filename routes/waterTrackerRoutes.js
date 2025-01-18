const express = require('express');
const {
  addWaterEntry,
  getDailyWaterIntake
} = require('../controllers/waterTrackerController');
const isAuthenticated = require('../middleware/isAuthenticated');

const router = express.Router();

// Add a water intake entry
router.post('/api/water-intake', isAuthenticated, addWaterEntry);

// Get total water intake for the day
router.get('/api/water-intake', isAuthenticated, getDailyWaterIntake);

module.exports = router;
