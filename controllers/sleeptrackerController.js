const SleepTracker = require('../models/SleepTracker');

// Add a new sleep entry
exports.addSleepEntry = async (req, res) => {
  try {
    const { hours, date } = req.body;
    const userId = req.user.id; // Get the user's ID from middleware

    // Check if an entry for this date already exists
    const existingEntry = await SleepTracker.findOne({ userId, date });
    if (existingEntry) {
      return res.status(400).json({ error: 'Entry for this date already exists' });
    }

    const sleepEntry = new SleepTracker({ userId, hours, date });
    await sleepEntry.save();
    res.status(201).json({ message: 'Sleep entry added successfully', sleepEntry });
  } catch (error) {
    console.error('Error adding sleep entry:', error);
    res.status(500).json({ error: 'Failed to add sleep entry' });
  }
};

// Get all sleep entries for the logged-in user
exports.getSleepEntries = async (req, res) => {
  try {
    const userId = req.user.id;
    const sleepEntries = await SleepTracker.find({ userId }).sort({ date: -1 });
    res.status(200).json(sleepEntries);
  } catch (error) {
    console.error('Error fetching sleep entries:', error);
    res.status(500).json({ error: 'Failed to fetch sleep entries' });
  }
};

// Update a sleep entry
exports.updateSleepEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { hours } = req.body;

    const updatedEntry = await SleepTracker.findByIdAndUpdate(
      id,
      { hours },
      { new: true }
    );

    if (!updatedEntry) return res.status(404).json({ error: 'Sleep entry not found' });
    res.status(200).json({ message: 'Sleep entry updated successfully', updatedEntry });
  } catch (error) {
    console.error('Error updating sleep entry:', error);
    res.status(500).json({ error: 'Failed to update sleep entry' });
  }
};

// Delete a sleep entry
exports.deleteSleepEntry = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEntry = await SleepTracker.findByIdAndDelete(id);
    if (!deletedEntry) return res.status(404).json({ error: 'Sleep entry not found' });

    res.status(200).json({ message: 'Sleep entry deleted successfully' });
  } catch (error) {
    console.error('Error deleting sleep entry:', error);
    res.status(500).json({ error: 'Failed to delete sleep entry' });
  }
};
