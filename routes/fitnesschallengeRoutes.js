const express = require('express');
const {
  createChallenge,
  getChallenges
} = require('../controllers/fitnesschallengeController');
const isAuthenticated = require('../middleware/isAuthenticated');

const router = express.Router();

// Routes for fitness challenges
router.post('/api/fitness-challenges', isAuthenticated, createChallenge); // Create a new challenge
router.get('/api/fitness-challenges', isAuthenticated, getChallenges);    // Get all challenges

module.exports = router;
