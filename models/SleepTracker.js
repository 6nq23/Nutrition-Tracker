const mongoose = require('mongoose');

const sleepTrackerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  hours: { type: Number, required: true }, // Number of hours slept
  date: { type: Date, required: true } // Date of the sleep entry
});

module.exports = mongoose.model('SleepTracker', sleepTrackerSchema);
