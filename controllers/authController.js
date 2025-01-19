const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Signup Controller
exports.signup = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).send('Passwords do not match');
    }

    try {
        const user = await User.create({ username, email, password });
        res.status(201).render('login');  // Redirect to login after signup
    } catch (error) {
        res.status(500).send('Error creating user: ' + error.message);
    }
};


// Login Controller
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(404).send('User not found');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send('Invalid credentials');

        // Save the user ID in the session
        req.session.userId = user._id;
        res.status(200).redirect('/dashboard');  // Redirect to dashboard after login
        console.log("Login successful");
    } catch (error) {
        res.status(500).send('Error logging in: ' + error.message);
    }
};

// Logout Controller
exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Error logging out: ' + err.message);
        }
        res.redirect('/login');  // Redirect to login page after logout
        console.log("Logout successful");

    });
};
