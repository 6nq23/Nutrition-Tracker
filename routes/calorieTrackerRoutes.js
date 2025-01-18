const express = require('express');
const {
  addCalorieEntry,
  getDailyCalories
} = require('../controllers/calorieTrackerController');
const isAuthenticated = require('../middleware/isAuthenticated');

const router = express.Router();

// Add a new calorie entry
router.post('/api/calorie-tracker', isAuthenticated, addCalorieEntry);

// Get total calories for the day
router.get('/api/calorie-tracker', isAuthenticated, getDailyCalories);

module.exports = router;