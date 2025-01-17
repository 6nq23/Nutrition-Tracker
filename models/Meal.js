const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  categories: { type: String, required: true },
  ingredients: { type: [String], required: true },
  calories: { type: Number, required: true },
  proteins: { type: Number, required: true },
  fats: { type: Number, required: true },
  carbs: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Meal', mealSchema);
