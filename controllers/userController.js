const User = require('../models/Users');
const bcrypt = require('bcryptjs');

// Render signup page
exports.getSignup = (req, res) => {
    res.render('signup');
};

// Handle signup form submission
exports.postSignup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).send('Email already exists');
        }
        const user = new User({ username, email, password });
        await user.save();
        res.redirect('/users/login');
    } catch (error) {
        res.status(500).send('Server error');
    }
};

// Render login page
exports.getLogin = (req, res) => {
    res.render('login');
};

// Handle login form submission
exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send('Invalid credentials');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }

        req.session.user = user; // Save user session
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Server error');
    }
};

// Logout
exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
};
