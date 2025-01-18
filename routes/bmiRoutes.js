const express = require('express');
const { calculateBMI, getBMIRecords } = require('../controllers/bmiController');
const isAuthenticated = require('../middleware/isAuthenticated');

const router = express.Router();

// Calculate BMI
router.post('/api/bmi', isAuthenticated, calculateBMI);

// Get BMI records
router.get('/api/bmi', isAuthenticated, getBMIRecords);

module.exports = router;
