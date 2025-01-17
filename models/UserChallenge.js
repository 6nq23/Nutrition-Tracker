const mongoose = require('mongoose');

const userChallengeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  challengeId: { type: mongoose.Schema.Types.ObjectId, ref: 'FitnessChallenge', required: true },
  progress: { type: Number, required: true, default: 0 },
  status: { type: String, enum: ['In Progress', 'Completed'], required: true, default: 'In Progress' }
});

module.exports = mongoose.model('UserChallenge', userChallengeSchema);
