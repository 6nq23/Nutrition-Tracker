const express = require('express');
const { getDashboardData } = require('../controllers/dashboardController');
const isAuthenticated = require('../middleware/isAuthenticated');

const router = express.Router();

// Dashboard Route
router.get('/dashboard', isAuthenticated, getDashboardData, (req, res) => {
    // const username = req.user.username;
    res.render('dashboards');  // Send userName to the template
});

module.exports = router;
