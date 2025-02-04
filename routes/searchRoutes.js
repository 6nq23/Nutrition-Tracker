const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal');
const FitnessChallenge = require('../models/FitnessChallenge');
const EmailReminder = require('../models/EmailReminder');
const DietPlan = require('../models/DietPlan');
const Progress = require('../models/Progress');

// Search API
router.get('/api/search', async (req, res) => {
  try {
    const query = req.query.query;
    if (!query) {
      return res.status(400).json({ error: 'Search query is required' });
    }

    const regex = new RegExp(query, 'i'); // Case-insensitive search

    const meals = await Meal.find({ name: regex }).select('name');
    const challenges = await FitnessChallenge.find({ name: regex }).select('name');
    const reminders = await EmailReminder.find({ reminderTime: regex }).select('reminderTime');
    const dietPlans = await DietPlan.find({ name: regex }).select('name');
    const progress = await Progress.find({ type: regex }).select('type value');

    const results = [
      ...meals.map(m => ({ type: 'Meal', name: m.name, link: '/meal-selection' })),
      ...challenges.map(c => ({ type: 'Challenge', name: c.name, link: '/fitness-challenge' })),
      ...reminders.map(r => ({ type: 'Reminder', name: r.reminderTime, link: '/meal-reminders' })),
      ...dietPlans.map(d => ({ type: 'Diet Plan', name: d.name, link: '/diet-plan' })),
      ...progress.map(p => ({ type: 'Progress', name: `${p.type}: ${p.value}`, link: '/progress-tracker' }))
    ];

    res.json(results);
  } catch (error) {
    console.error('Error in search:', error);
    res.status(500).json({ error: 'Search failed' });
  }
});

module.exports = router;
