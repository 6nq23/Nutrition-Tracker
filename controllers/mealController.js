const Meal = require('../models/Meal');

// Create a new meal
exports.createMeal = async (req, res) => {
  try {
    const { name, categories, ingredients, calories, proteins, fats, carbs } = req.body;
    const meal = new Meal({ name, categories, ingredients, calories, proteins, fats, carbs });
    await meal.save();
    res.status(201).json({ message: 'Meal created successfully', meal });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create meal' });
  }
};

// Get all meals
exports.getMeals = async (req, res) => {
  try {
    const meals = await Meal.find();
    res.status(200).json(meals);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch meals' });
  }
};

// Get a single meal by ID
exports.getMealById = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);
    if (!meal) return res.status(404).json({ error: 'Meal not found' });
    res.status(200).json(meal);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch meal' });
  }
};

// Update a meal
exports.updateMeal = async (req, res) => {
  try {
    const meal = await Meal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!meal) return res.status(404).json({ error: 'Meal not found' });
    res.status(200).json({ message: 'Meal updated successfully', meal });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update meal' });
  }
};

// Delete a meal
exports.deleteMeal = async (req, res) => {
  try {
    const meal = await Meal.findByIdAndDelete(req.params.id);
    if (!meal) return res.status(404).json({ error: 'Meal not found' });
    res.status(200).json({ message: 'Meal deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete meal' });
  }
};
