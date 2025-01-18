const mongoose = require('mongoose');

const stepTrackerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  steps: { type: Number, required: true }, // Number of steps
  date: { type: Date, required: true } // Date of the entry
});

module.exports = mongoose.model('StepTracker', stepTrackerSchema);
