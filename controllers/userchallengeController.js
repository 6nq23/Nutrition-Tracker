const UserChallenge = require('../models/UserChallenge');

// Join a fitness challenge
exports.joinChallenge = async (req, res) => {
  try {
    const { challengeId } = req.body;
    const userId = req.user.id; // Assuming req.user is populated by authentication middleware

    const userChallenge = new UserChallenge({ userId, challengeId });
    await userChallenge.save();
    res.status(201).json({ message: 'Joined challenge successfully', userChallenge });
  } catch (error) {
    console.error('Error joining challenge:', error);
    res.status(500).json({ error: 'Failed to join challenge' });
  }
};

// Get user-specific challenges
exports.getUserChallenges = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming req.user is populated
    const userChallenges = await UserChallenge.find({ userId }).populate('challengeId');
    res.status(200).json(userChallenges);
  } catch (error) {
    console.error('Error fetching user challenges:', error);
    res.status(500).json({ error: 'Failed to fetch user challenges' });
  }
};
