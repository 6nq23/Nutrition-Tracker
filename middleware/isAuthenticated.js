const User = require('../models/Users'); // Import your User model

async function isAuthenticated(req, res, next) {
    try {
        // Check if session has the user ID (_id)
        if (req.session && req.session.userId) {
            // Find the user by ObjectId from the database
            const user = await User.findById(req.session.userId);

            // If user is found, attach user data to the request object
            if (user) {
                req.user = user; // Attach user to the request
                return next(); // User is authenticated, proceed to next middleware
            }
        }
        
        // If no user found or not authenticated, redirect to login page
        res.redirect('/login');
    } catch (error) {
        console.error('Authentication middleware error:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = isAuthenticated;
