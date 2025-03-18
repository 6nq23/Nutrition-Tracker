const express = require('express');
const router = express.Router();
const { setReminder, getReminders } = require('../controllers/emailReminderController');

// Set a new reminder
router.post('/api/email-reminder', setReminder);

// Get all reminders for a user
router.get('/api/email-reminders', getReminders);

module.exports = router;
