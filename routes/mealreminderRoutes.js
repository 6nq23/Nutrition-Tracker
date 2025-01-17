const express = require('express');
const {
  createReminder,
  getReminders,
  updateReminder,
  deleteReminder
} = require('../controllers/mealreminderController');
const isAuthenticated = require('../middleware/isAuthenticated');

const router = express.Router();


router.get('/meal-reminders',isAuthenticated, (req, res) => {
    const userName = req.user ? req.user.username : null; // Assuming you have user details from session or DB
    res.render('meal-reminders', { userName });  // Send userName to the template
});
// Routes for meal reminders
router.post('/api/meal-reminders', isAuthenticated, createReminder,);        // Create a new reminder
router.get('/api/meal-reminders', isAuthenticated, getReminders);          // Get all reminders
router.put('/api/meal-reminders/:id', isAuthenticated, updateReminder);    // Update a reminder
router.delete('/api/meal-reminders/:id', isAuthenticated, deleteReminder); // Delete a reminder

module.exports = router;
