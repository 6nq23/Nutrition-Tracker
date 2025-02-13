const mongoose = require('mongoose');

const emailReminderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  email: { type: String, required: true }, // User's email
  reminderText: { type: String, required: true }, // Reminder message
  reminderTime: { type: String, required: true }, // HH:MM format (24-hour)
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('EmailReminder', emailReminderSchema);
