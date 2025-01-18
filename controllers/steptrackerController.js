const StepTracker = require('../models/StepTracker');

// Add a new step entry
exports.addStepEntry = async (req, res) => {
  try {
    const { steps, date } = req.body;
    const userId = req.user.id; // Get the user's ID from middleware

    // Check if an entry for this date already exists
    const existingEntry = await StepTracker.findOne({ userId, date });
    if (existingEntry) {
      return res.status(400).json({ error: 'Entry for this date already exists' });
    }

    const stepEntry = new StepTracker({ userId, steps, date });
    await stepEntry.save();
    res.status(201).json({ message: 'Step entry added successfully', stepEntry });
  } catch (error) {
    console.error('Error adding step entry:', error);
    res.status(500).json({ error: 'Failed to add step entry' });
  }
};

// Get all step entries for the logged-in user
exports.getStepEntries = async (req, res) => {
  try {
    const userId = req.user.id;
    const stepEntries = await StepTracker.find({ userId }).sort({ date: -1 });
    res.status(200).json(stepEntries);
  } catch (error) {
    console.error('Error fetching step entries:', error);
    res.status(500).json({ error: 'Failed to fetch step entries' });
  }
};

// Update a step entry
exports.updateStepEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { steps } = req.body;

    const updatedEntry = await StepTracker.findByIdAndUpdate(
      id,
      { steps },
      { new: true }
    );

    if (!updatedEntry) return res.status(404).json({ error: 'Step entry not found' });
    res.status(200).json({ message: 'Step entry updated successfully', updatedEntry });
  } catch (error) {
    console.error('Error updating step entry:', error);
    res.status(500).json({ error: 'Failed to update step entry' });
  }
};

// Delete a step entry
exports.deleteStepEntry = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEntry = await StepTracker.findByIdAndDelete(id);
    if (!deletedEntry) return res.status(404).json({ error: 'Step entry not found' });

    res.status(200).json({ message: 'Step entry deleted successfully' });
  } catch (error) {
    console.error('Error deleting step entry:', error);
    res.status(500).json({ error: 'Failed to delete step entry' });
  }
};
