const MealReminder = require('../models/MealReminder');

// Create a new meal reminder
exports.createReminder = async (req, res) => {
  try {
    const { mealName, reminderTime, reminderDate } = req.body;
    const userId = req.user.id; // Use the user ID from the session
    const reminder = new MealReminder({ userId, mealName, reminderTime, reminderDate });
    await reminder.save();
    res.status(201).json({ message: 'Reminder created successfully', reminder });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create reminder' });
  }
};

// Get all meal reminders for the logged-in user
exports.getReminders = async (req, res) => {
  try {
    const userId = req.user.id; // Use the user ID from the session
    const reminders = await MealReminder.find({ userId }).sort({ reminderDate: 1, reminderTime: 1 });
    res.status(200).json(reminders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reminders' });
  }
};

// Update a meal reminder
exports.updateReminder = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedReminder = await MealReminder.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedReminder) return res.status(404).json({ error: 'Reminder not found' });
    res.status(200).json({ message: 'Reminder updated successfully', updatedReminder });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update reminder' });
  }
};

// Delete a meal reminder
exports.deleteReminder = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReminder = await MealReminder.findByIdAndDelete(id);
    if (!deletedReminder) return res.status(404).json({ error: 'Reminder not found' });
    res.status(200).json({ message: 'Reminder deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete reminder' });
  }
};
