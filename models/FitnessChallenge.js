const mongoose = require('mongoose');

const fitnessChallengeSchema = new mongoose.Schema({
  /*challengeId: { type: mongoose.Schema.Types.ObjectId, required: true },*/
  name: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  goal: { type: String, required: true }
});

module.exports = mongoose.model('FitnessChallenge', fitnessChallengeSchema);
