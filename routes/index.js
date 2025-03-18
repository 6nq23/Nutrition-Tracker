const express = require('express');
const router = express.Router();
const {
    createReminder,
    getReminders,
    updateReminder,
    deleteReminder
  } = require('../controllers/mealreminderController');
const { getDashboardData } = require('../controllers/dashboardController');
const isAuthenticated = require('../middleware/isAuthenticated');
const { updateTheme } = require('../controllers/themesettingController')
const User = require('../models/Users'); // Import the User model


router.get('/', (req, res) => {
    const username = req.user ? req.user.username : null; // Assuming you have user details from session or DB
    res.render('index', { username });  // Send userName to the template
});

router.get('/admin', isAuthenticated, (req, res) => {
    const username = req.user ? req.user.username : null; // Assuming you have user details from session or DB
    res.render('admin', { username });  // Send userName to the template
});

router.get('/dashboard', isAuthenticated, getDashboardData, (req, res) => {
    // const username = req.user.username;
    res.render('dashboards', { username: req.user.username });  // Send userName to the template
});

router.get('/feedback', isAuthenticated, (req, res) => {
    // const username = req.user.username;
    res.render('feedback', { username: req.user.username });  // Send userName to the template
});

router.get('/bmi-calculator', isAuthenticated, (req, res) => {
    // const username = req.user.username;
    res.render('bmi-calculator', { username: req.user.username });  // Send userName to the template
});

router.get('/email-reminder', isAuthenticated, async(req, res) => {
    const userId = req.session.userId;
    const user = await User.findById(userId);
    res.render('email-reminder',  { userId: user._id });  // Send userName to the template
});

router.get('/dark_mode', isAuthenticated, (req, res) => {
    const userName = req.user ? req.user.username : null; // Assuming you have user details from session or DB
    res.render('dark_mode', { userName });  // Send userName to the template
});

router.get('/calorie-tracker', isAuthenticated, (req, res) => {
    const userName = req.user ? req.user.username : null; // Assuming you have user details from session or DB
    res.render('calorie-tracker', { userName });  // Send userName to the template
});

router.get('/fitness-challenge', isAuthenticated, (req, res) => {
    const userName = req.user ? req.user.username : null; // Assuming you have user details from session or DB
    res.render('fitness-challenge', { userName });  // Send userName to the template
});

router.get('/diet-plan', isAuthenticated,  (req, res) => {
    const userName = req.user ? req.user.username : null; // Assuming you have user details from session or DB
    res.render('diet-plan', { userName });  // Send userName to the template
});

router.get('/dialog-boxes', (req, res) => {
    const userName = req.user ? req.user.username : null; // Assuming you have user details from session or DB
    res.render('dialog-boxes', { userName });  // Send userName to the template
});

router.get('/login', (req, res) => {
    const userName = req.user ? req.user.username : null; // Assuming you have user details from session or DB
    res.render('login', { userName });  // Send userName to the template
});

router.post('/api/theme', isAuthenticated, updateTheme);

router.get('/meal-feedback',isAuthenticated, (req, res) => {
    const userName = req.user ? req.user.username : null; // Assuming you have user details from session or DB
    res.render('meal-feedback', { userName });  // Send userName to the template
});

router.get('/meal-reminders',isAuthenticated, (req, res) => {
    const userName = req.user ? req.user.username : null; // Assuming you have user details from session or DB
    res.render('meal-reminders', { userName });  // Send userName to the template
});

router.get('/meal-selection',isAuthenticated, (req, res) => {
    const userName = req.user ? req.user.username : null; // Assuming you have user details from session or DB
    res.render('meal-selection', { userName });  // Send userName to the template
});

router.get('/notification-email',isAuthenticated, (req, res) => {
    const userName = req.user ? req.user.username : null; // Assuming you have user details from session or DB
    res.render('notification-email', { userName });  // Send userName to the template
});

router.get('/notifications', isAuthenticated, (req, res) => {
    const userName = req.user ? req.user.username : null; // Assuming you have user details from session or DB
    res.render('notifications', { userName });  // Send userName to the template
});

router.get('/progress-tracker', isAuthenticated, (req, res) => {
    const id = req.params.id;
  res.render('progress-tracker', { id });
});

router.get('/search', (req, res) => {
    const userName = req.user ? req.user.username : null; // Assuming you have user details from session or DB
    res.render('search', { userName });  // Send userName to the template
});

router.get('/signup', (req, res) => {
    const userName = req.user ? req.user.username : null; // Assuming you have user details from session or DB
    res.render('signup', { userName });  // Send userName to the template
});

router.get('/sleep-tracker', isAuthenticated, (req, res) => {
    const userName = req.user ? req.user.username : null; // Assuming you have user details from session or DB
    res.render('sleep-tracker', { userName });  // Send userName to the template
});

router.get('/step-tracker', isAuthenticated, (req, res) => {
    const userName = req.user ? req.user.username : null; // Assuming you have user details from session or DB
    res.render('step-tracker', { userName });  // Send userName to the template
});

router.get('/water-intake', isAuthenticated, (req, res) => {
    const userName = req.user ? req.user.username : null; // Assuming you have user details from session or DB
    res.render('water-intake', { userName });  // Send userName to the template
});

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Error logging out');
        }
        res.clearCookie('connect.sid');
        console.log("logout done")
        res.redirect('/');
    });
});

// Routes for meal reminders
router.post('/api/meal-reminders', isAuthenticated, createReminder);        // Create a new reminder
router.get('/api/meal-reminders', isAuthenticated, getReminders);          // Get all reminders
router.put('/api/meal-reminders/:id', isAuthenticated, updateReminder);    // Update a reminder
router.delete('/api/meal-reminders/:id', isAuthenticated, deleteReminder); // Delete a reminder


module.exports = router;
