const CalorieTracker = require('../models/CalorieTracker');
const StepTracker = require('../models/StepTracker');
const BMI = require('../models/BMI');
const User = require('../models/Users');

// Dashboard Controller
exports.getDashboardData = async (req, res) => {
  const userId = req.session.userId;

  try {
    // Fetch the latest calorie entry
    const latestCalories = await CalorieTracker.findOne({ userId })
      .sort({ date: -1 })
      .limit(1);

    // Fetch the latest step entry
    const latestSteps = await StepTracker.findOne({ userId })
      .sort({ date: -1 })
      .limit(1);

    // Fetch the latest BMI entry
    const latestBMI = await BMI.findOne({ userId })
      .sort({ date: -1 })
      .limit(1);

      const user = await User.findById(userId); // Find the user by ID
      const theme = user?.theme || 'light'; // Default to 'light' if theme is not set

    // Pass data to the dashboard
    res.render('dashboards', {
      user: user ? user.username: 'NA', // Assuming the username is stored in the session
      calories: latestCalories ? latestCalories.caloriesConsumed : 'N/A',
      steps: latestSteps ? latestSteps.steps : 'N/A',
      bmi: latestBMI ? latestBMI.bmi : 'N/A',
      theme,
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).send('Error loading dashboard.');
  }
};
