const mongoose = require('mongoose');

const calorieTrackerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  caloriesConsumed: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CalorieTracker', calorieTrackerSchema);
