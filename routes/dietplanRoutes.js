const express = require('express');
const { generateDietPlan, getDietPlans } = require('../controllers/dietplanController');
const isAuthenticated = require('../middleware/isAuthenticated');

const router = express.Router();

// Generate a new diet plan
router.post('/api/diet-plan', isAuthenticated, generateDietPlan);

// Get diet plans for the user
router.get('/api/diet-plan', isAuthenticated, getDietPlans);

module.exports = router;
