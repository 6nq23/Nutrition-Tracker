const express = require('express');
const router = express.Router();
const { setReminder, getReminders } = require('../controllers/emailReminderController');

// Set new reminder (userId is required in request body)
router.post('/api/email-reminder', setReminder);

// Get all reminders
router.get('/api/email-reminders', getReminders);

module.exports = router;
