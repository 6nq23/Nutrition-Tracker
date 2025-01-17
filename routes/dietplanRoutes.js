// routes/dietPlans.js
const express = require('express');
const router = express.Router();
const dietPlanController = require('../controllers/dietplanController');
const authMiddleware = require('../middleware/isAuthenticated');

// Route to generate a diet plan
router.post('/generate', authMiddleware, dietPlanController.generateDietPlan);

module.exports = router;
