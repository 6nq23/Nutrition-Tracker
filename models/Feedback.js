const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User
  feedbackText: { type: String, required: true }, // Feedback message
  rating: { type: Number, required: true, min: 1, max: 5 }, // Rating from 1 to 5
  createdAt: { type: Date, default: Date.now } // Timestamp
});

module.exports = mongoose.model('Feedback', feedbackSchema);
