const express = require('express');
const router = express.Router();
const { submitFeedback, getAllFeedback } = require('../controllers/feedbackController');
const isAuthenticated = require('../middleware/isAuthenticated');

// Submit feedback
router.post('/api/feedback', isAuthenticated, submitFeedback);

// Get all feedbacks
router.get('/api/feedback', isAuthenticated, getAllFeedback);

module.exports = router;
