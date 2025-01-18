const WaterTracker = require('../models/WaterTracker');

// Add a water intake entry
exports.addWaterEntry = async (req, res) => {
  try {
    const { waterConsumed } = req.body;
    const userId = req.user.id;

    const waterEntry = new WaterTracker({ userId, waterConsumed });
    await waterEntry.save();

    res.status(201).json({ message: 'Water intake entry added successfully', waterEntry });
  } catch (error) {
    console.error('Error adding water intake entry:', error);
    res.status(500).json({ error: 'Failed to add water intake entry' });
  }
};

// Get total water intake for the day
exports.getDailyWaterIntake = async (req, res) => {
  try {
    const userId = req.user.id;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const totalWater = await WaterTracker.aggregate([
      {
        $match: {
          userId: mongoose.Types.ObjectId(userId),
          date: { $gte: today }
        }
      },
      {
        $group: {
          _id: null,
          totalWater: { $sum: '$waterConsumed' }
        }
      }
    ]);

    res.status(200).json({ totalWater: totalWater[0]?.totalWater || 0 });
  } catch (error) {
    console.error('Error fetching water intake:', error);
    res.status(500).json({ error: 'Failed to fetch water intake' });
  }
};
