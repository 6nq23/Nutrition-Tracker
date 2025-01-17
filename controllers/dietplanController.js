// controllers/dietPlanController.js

const DietPlan = require('../models/DietPlan');

// Function to generate the diet plan
exports.generateDietPlan = async (req, res) => {
    const { calorieGoal, mealPreference } = req.body;
    const userId = req.user.id; // Assuming req.user is populated by authMiddleware

    if (!userId) {
        return res.status(400).json({ message: 'User is not authenticated.' });
    }

    console.log('Received data:', { calorieGoal, mealPreference, userId });

    // Basic validation (you can expand this further if needed)
    if (!calorieGoal || !mealPreference) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // Generate the diet plan (this can be a mock function or based on a formula)
    const dietPlan = generateDietPlan(calorieGoal, mealPreference);

    if (!dietPlan) {
        return res.status(400).json({ message: 'Could not generate a valid diet plan.' });
    }

    // Create the new diet plan in the database
    try {
        const newDietPlan = new DietPlan({
            userId,
            name: `${mealPreference} Diet Plan`,
            details: JSON.stringify(dietPlan),
            createdAt: new Date(),
        });
        
        await newDietPlan.save();

        // Return the generated diet plan
        res.status(200).json({ plan: dietPlan });
    } catch (err) {
        console.error('Error saving diet plan:', err);
        res.status(500).json({ message: 'Server error. Could not save the diet plan.' });
    }
};

// Helper function to generate a diet plan based on calorie goal and meal preference
function generateDietPlan(calorieGoal, mealPreference) {
    let breakfast, lunch, dinner, snack;
    
    // Adjust meal content based on calorie goal and meal preference
    if (mealPreference === 'vegetarian') {
        breakfast = `Vegetable Salad with Dressing (${Math.round(calorieGoal * 0.25)} kcal)`;
        lunch = `Lentil Soup with Quinoa (${Math.round(calorieGoal * 0.35)} kcal)`;
        dinner = `Tofu Stir Fry with Brown Rice (${Math.round(calorieGoal * 0.30)} kcal)`;
        snack = `Fruit Salad with Almonds (${Math.round(calorieGoal * 0.10)} kcal)`;
    } else if (mealPreference === 'non-vegetarian') {
        breakfast = `Scrambled Eggs with Toast (${Math.round(calorieGoal * 0.25)} kcal)`;
        lunch = `Chicken Breast with Rice and Vegetables (${Math.round(calorieGoal * 0.35)} kcal)`;
        dinner = `Grilled Fish with Sweet Potatoes (${Math.round(calorieGoal * 0.30)} kcal)`;
        snack = `Greek Yogurt with Honey and Nuts (${Math.round(calorieGoal * 0.10)} kcal)`;
    } else if (mealPreference === 'vegan') {
        breakfast = `Smoothie Bowl with Oats and Berries (${Math.round(calorieGoal * 0.25)} kcal)`;
        lunch = `Chickpea Salad with Avocado (${Math.round(calorieGoal * 0.35)} kcal)`;
        dinner = `Vegan Stir Fry with Tofu and Vegetables (${Math.round(calorieGoal * 0.30)} kcal)`;
        snack = `Chia Pudding with Coconut Milk (${Math.round(calorieGoal * 0.10)} kcal)`;
    }

    // Return the diet plan array
    return [
        `Breakfast: ${breakfast}`,
        `Lunch: ${lunch}`,
        `Dinner: ${dinner}`,
        `Snack: ${snack}`
    ];
}
