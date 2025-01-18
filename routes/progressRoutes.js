const express = require('express');
const {
  addProgress,
  getProgress
} = require('../controllers/progressController');
const isAuthenticated = require('../middleware/isAuthenticated');

const router = express.Router();

// Add a progress entry
router.post('/api/progress', isAuthenticated, addProgress);

// Get progress data
router.get('/api/progress', isAuthenticated, getProgress);

module.exports = router;
