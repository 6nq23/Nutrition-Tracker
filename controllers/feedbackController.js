const Feedback = require('../models/Feedback');

// Submit Feedback
exports.submitFeedback = async (req, res) => {
  try {
    const { feedbackText, rating } = req.body;
    const userId = req.session.userId; // Ensure the user is logged in

    if (!userId) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    // Create a new feedback entry
    const feedback = new Feedback({ userId, feedbackText, rating });
    await feedback.save();

    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
};

// Fetch All Feedback
exports.getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate('userId', 'username'); // Get username from User model
    res.status(200).json(feedbacks);
  } catch (error) {
    console.error('Error fetching feedback:', error);
    res.status(500).json({ error: 'Failed to fetch feedback' });
  }
};
