const Progress = require('../models/Progress');

// Add a new progress entry
exports.addProgress = async (req, res) => {
  try {
    const { date, value } = req.body;
    const userId = req.user.id;

    if (!date || !value || value <= 0) {
      return res.status(400).json({ error: 'Invalid date or progress value.' });
    }

    const progressEntry = new Progress({ userId, date, value });
    await progressEntry.save();

    res.status(201).json({ message: 'Progress added successfully.', progressEntry });
  } catch (error) {
    console.error('Error adding progress:', error);
    res.status(500).json({ error: 'Failed to add progress.' });
  }
};

// Get progress data for a user
exports.getProgress = async (req, res) => {
  try {
    const userId = req.user.id;
    const progressData = await Progress.find({ userId }).sort({ date: 1 });

    res.status(200).json(progressData);
  } catch (error) {
    console.error('Error fetching progress data:', error);
    res.status(500).json({ error: 'Failed to fetch progress data.' });
  }
};
