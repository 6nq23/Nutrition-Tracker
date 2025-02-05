const mongoose = require('mongoose');

const waterIntakeSchema = new mongoose.Schema({
  totalWater: { type: Number, default: 0 },
  lastWater: { type: Number, default: 0 },
  dailyGoal: { type: Number, default: 3000 },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('WaterIntake', waterIntakeSchema);