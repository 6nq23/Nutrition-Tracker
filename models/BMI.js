const mongoose = require('mongoose');

const bmiSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  age: { type: Number, required: true },
  height: { type: Number, required: true }, // Height in cm
  weight: { type: Number, required: true }, // Weight in kg
  bmi: { type: Number, required: true },
  category: { type: String, required: true },
  recommendation: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BMI', bmiSchema);
