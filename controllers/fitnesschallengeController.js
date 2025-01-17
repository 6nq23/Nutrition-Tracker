const FitnessChallenge = require('../models/FitnessChallenge');

// Create a new fitness challenge
exports.createChallenge = async (req, res) => {
  try {
    const { name, description, startDate, endDate, goal , challengeId } = req.body;
    const challenge = new FitnessChallenge({ name, description, startDate, endDate, goal });
    await challenge.save();
    res.status(201).json({ message: 'Challenge created successfully', challenge });
  } catch (error) {
    console.error('Error creating challenge:', error);
    res.status(500).json({ error: 'Failed to create challenge' });
  }
};

// Get all fitness challenges
exports.getChallenges = async (req, res) => {
  try {
    const challenges = await FitnessChallenge.find();
    res.status(200).json(challenges);
  } catch (error) {
    console.error('Error fetching challenges:', error);
    res.status(500).json({ error: 'Failed to fetch challenges' });
  }
};
