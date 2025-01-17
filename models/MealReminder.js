const mongoose = require('mongoose');

const mealReminderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  mealName: { type: String, required: true },
  reminderTime: { type: String, required: true }, // Stored as HH:MM format
  reminderDate: { type: Date, required: true },  // Date of the reminder
  status: { type: String, enum: ['Pending', 'Completed', 'Missed'], default: 'Pending' }
});

module.exports = mongoose.model('MealReminder', mealReminderSchema);
