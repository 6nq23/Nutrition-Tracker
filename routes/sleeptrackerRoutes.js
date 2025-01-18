const express = require('express');
const {
  addSleepEntry,
  getSleepEntries,
  updateSleepEntry,
  deleteSleepEntry
} = require('../controllers/sleeptrackerController');
const isAuthenticated = require('../middleware/isAuthenticated');

const router = express.Router();

// Add a new sleep entry
router.post('/api/sleep-tracker', isAuthenticated, addSleepEntry);

// Get all sleep entries for the logged-in user
router.get('/api/sleep-tracker', isAuthenticated, getSleepEntries);

// Update a specific sleep entry by ID
router.put('/api/sleep-tracker/:id', isAuthenticated, updateSleepEntry);

// Delete a specific sleep entry by ID
router.delete('/api/sleep-tracker/:id', isAuthenticated, deleteSleepEntry);

module.exports = router;
