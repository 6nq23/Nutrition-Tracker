

const DietPlan = require('../models/DietPlan');

// Generate a diet plan
exports.generateDietPlan = async (req, res) => {
  try {
    const { goal, dietType } = req.body;
    const userId = req.user.id;

    // Example meal suggestions
    const mealSuggestions = {
      Veg: [
        { mealName: 'Breakfast', items: ['Oats', 'Banana', 'Almonds'], calories: 300 },
        { mealName: 'Lunch', items: ['Brown Rice', 'Lentils', 'Vegetables'], calories: 500 },
        { mealName: 'Dinner', items: ['Quinoa', 'Salad', 'Tofu'], calories: 400 }
      ],
      'Non-Veg': [
        { mealName: 'Breakfast', items: ['Egg Whites', 'Toast', 'Avocado'], calories: 350 },
        { mealName: 'Lunch', items: ['Grilled Chicken', 'Sweet Potato', 'Vegetables'], calories: 550 },
        { mealName: 'Dinner', items: ['Fish', 'Quinoa', 'Broccoli'], calories: 450 }
      ],
      Vegan: [
        { mealName: 'Breakfast', items: ['Smoothie', 'Chia Seeds', 'Berries'], calories: 300 },
        { mealName: 'Lunch', items: ['Rice', 'Beans', 'Vegetables'], calories: 500 },
        { mealName: 'Dinner', items: ['Soup', 'Salad', 'Tempeh'], calories: 400 }
      ]
    };

    const meals = mealSuggestions[dietType];
    const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);

    const dietPlan = new DietPlan({ userId, goal, dietType, meals, totalCalories });
    await dietPlan.save();

    res.status(201).json({
      message: 'Diet plan generated successfully!',
      dietPlan
    });
  } catch (error) {
    console.error('Error generating diet plan:', error);
    res.status(500).json({ error: 'Failed to generate diet plan.' });
  }
};

// Get diet plans for the logged-in user
exports.getDietPlans = async (req, res) => {
  try {
    const userId = req.user.id;
    const plans = await DietPlan.find({ userId }).sort({ createdAt: -1 });

    res.status(200).json(plans);
  } catch (error) {
    console.error('Error fetching diet plans:', error);
    res.status(500).json({ error: 'Failed to fetch diet plans.' });
  }
};