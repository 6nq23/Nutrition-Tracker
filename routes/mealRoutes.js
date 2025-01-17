const express = require('express');
const {
  createMeal,
  getMeals,
  getMealById,
  updateMeal,
  deleteMeal
} = require('../controllers/mealController');
const isAuthenticated = require('../middleware/isAuthenticated');
 // Authentication middleware

const router = express.Router();

router.post('/', isAuthenticated, createMeal); // Only authenticated users can create a meal
router.get('/', getMeals);
router.get('/:id', getMealById);
router.put('/:id', isAuthenticated, updateMeal); // Only authenticated users can update a meal
router.delete('/:id', isAuthenticated, deleteMeal); // Only authenticated users can delete a meal

module.exports = router;
