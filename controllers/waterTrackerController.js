const WaterIntake = require('../models/WaterTracker');

exports.getWaterIntake = async (req, res) => {
  try {
    const intake = await WaterIntake.findOne().sort({ date: -1 });
    res.json(intake || { totalWater: 0, lastWater: 0, dailyGoal: 3000 });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching water intake' });
  }
};

exports.addWaterIntake = async (req, res) => {
  try {
    const { waterConsumed } = req.body;
    let intake = await WaterIntake.findOne().sort({ date: -1 });
    
    if (!intake) {
      intake = new WaterIntake();
    }
    
    intake.totalWater += waterConsumed;
    intake.lastWater = waterConsumed;
    await intake.save();

    res.json({ message: 'Water intake added', intake });
  } catch (error) {
    res.status(500).json({ error: 'Error adding water intake' });
  }
};

exports.resetWaterIntake = async (req, res) => {
  try {
    await WaterIntake.deleteMany({});
    res.json({ message: 'Water intake reset successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error resetting water intake' });
  }
};
