const express = require('express');
const {
  joinChallenge,
  getUserChallenges
} = require('../controllers/userchallengeController');
const isAuthenticated = require('../middleware/isAuthenticated');

const router = express.Router();

// Routes for user challenges
router.post('/api/user-challenges', isAuthenticated, joinChallenge);       // Join a challenge
router.get('/api/user-challenges', isAuthenticated, getUserChallenges);   // Get user-specific challenges

module.exports = router;
