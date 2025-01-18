const mongoose = require('mongoose');
const CalorieTracker = require('../models/CalorieTracker');

// Add a calorie entry
exports.addCalorieEntry = async (req, res) => {
  try {
    const { caloriesConsumed } = req.body;
    const userId = req.user.id;

    if (!caloriesConsumed || caloriesConsumed <= 0) {
      return res.status(400).json({ error: 'Invalid calorie value.' });
    }

    const calorieEntry = new CalorieTracker({ userId, caloriesConsumed });
    await calorieEntry.save();

    res.status(201).json({ message: 'Calorie entry added successfully.', calorieEntry });
  } catch (error) {
    console.error('Error adding calorie entry:', error);
    res.status(500).json({ error: 'Failed to add calorie entry.' });
  }
};

// Get total calories for the day
exports.getDailyCalories = async (req, res) => {
  try {
    const userId = req.user.id;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const totalCalories = await CalorieTracker.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userId),
          date: { $gte: today }
        }
      },
      {
        $group: {
          _id: null,
          totalCalories: { $sum: '$caloriesConsumed' }
        }
      }
    ]);

    res.status(200).json({ totalCalories: totalCalories[0]?.totalCalories || 0 });
  } catch (error) {
    console.error('Error fetching daily calories:', error);
    res.status(500).json({ error: 'Failed to fetch daily calories.' });
  }
};
