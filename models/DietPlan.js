const mongoose = require('mongoose');

const dietPlanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  goal: { type: String, required: true }, // Weight Loss, Weight Gain, Maintenance
  dietType: { type: String, required: true }, // Veg, Non-Veg, Vegan
  meals: [
    {
      mealName: { type: String, required: true },
      items: [String], // List of meal items
      calories: { type: Number, required: true } // Total calories for the meal
    }
  ],
  totalCalories: { type: Number, required: true }, // Total daily calories
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DietPlan', dietPlanSchema);
