const express = require('express');
const {
  addStepEntry,
  getStepEntries,
  updateStepEntry,
  deleteStepEntry
} = require('../controllers/steptrackerController');
const isAuthenticated = require('../middleware/isAuthenticated');

const router = express.Router();

// Add a new step entry
router.post('/api/step-tracker', isAuthenticated, addStepEntry);

// Get all step entries for the logged-in user
router.get('/api/step-tracker', isAuthenticated, getStepEntries);

// Update a specific step entry by ID
router.put('/api/step-tracker/:id', isAuthenticated, updateStepEntry);

// Delete a specific step entry by ID
router.delete('/api/step-tracker/:id', isAuthenticated, deleteStepEntry);

module.exports = router;
