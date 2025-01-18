const Meal = require('../models/Meal');

// Get meals based on category
exports.getMealsByCategory = async (req, res) => {
  try {
    const { category } = req.query; // Veg, Non-Veg, Vegan
    const meals = await Meal.find({ category });

    if (meals.length === 0) {
      return res.status(404).json({ error: `No meals found for category: ${category}` });
    }

    res.status(200).json(meals);
  } catch (error) {
    console.error('Error fetching meals:', error);
    res.status(500).json({ error: 'Failed to fetch meals' });
  }
};

// Get meal details by meal ID
exports.getMealDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const meal = await Meal.findById(id);

    if (!meal) {
      return res.status(404).json({ error: 'Meal not found' });
    }

    res.status(200).json({
      name: meal.name,
      ingredients: meal.ingredients,
      nutrition: meal.nutrition
    });
  } catch (error) {
    console.error('Error fetching meal details:', error);
    res.status(500).json({ error: 'Failed to fetch meal details' });
  }
};
