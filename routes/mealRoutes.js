const express = require('express');
const { getMealsByCategory, getMealDetails } = require('../controllers/mealController');

const router = express.Router();

// Get meals by category
router.get('/api/meals', getMealsByCategory);

// Get meal details by ID
router.get('/api/meals/:id', getMealDetails);

module.exports = router;
