const EmailReminder = require('../models/EmailReminder');
const User = require('../models/Users');
const sendReminderEmail = require('../config/emailConfig');

// Set a new reminder
exports.setReminder = async (req, res) => {
  try {
    const { userId, reminderText, reminderTime } = req.body;

    // Fetch user email from database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Save reminder in DB
    const reminder = new EmailReminder({
      userId,
      email: user.email,
      reminderText,
      reminderTime
    });

    await reminder.save();

    res.status(201).json({ message: 'Reminder set successfully!', reminder });
  } catch (error) {
    console.error('Error setting reminder:', error);
    res.status(500).json({ error: 'Failed to set reminder' });
  }
};

// Fetch user reminders
exports.getReminders = async (req, res) => {
  try {
    const { userId } = req.query;
    const reminders = await EmailReminder.find({ userId });
    res.status(200).json(reminders);
  } catch (error) {
    console.error('Error fetching reminders:', error);
    res.status(500).json({ error: 'Failed to fetch reminders' });
  }
};