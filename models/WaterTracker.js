const mongoose = require('mongoose');

const waterTrackerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  waterConsumed: { type: Number, required: true }, // Water consumed in ml
  date: { type: Date, default: Date.now } // Date of entry
});

module.exports = mongoose.model('WaterTracker', waterTrackerSchema);
