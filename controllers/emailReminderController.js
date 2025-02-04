const EmailReminder = require('../models/EmailReminder');
const User = require('../models/Users'); // Import the User model
const sendReminderEmail = require('../config/emailConfig');

// Set a new reminder
exports.setReminder = async (req, res) => {
  try {
    const { userId, reminderTime } = req.body; // Get userId from request body

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Fetch user email from the database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Save reminder in DB
    const reminder = new EmailReminder({
      userId,
      email: user.email, // Get email from database
      reminderTime
    });

    await reminder.save();

    res.status(201).json({ message: 'Reminder set successfully!', reminder });
  } catch (error) {
    console.error('Error setting reminder:', error);
    res.status(500).json({ error: 'Failed to set reminder' });
  }
};
