document.getElementById('diet-plan-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get user inputs
    const calorieGoal = parseInt(document.getElementById('calorie-goal').value);
    const mealPreference = document.getElementById('meal-preference').value;

    // Validate inputs
    if (isNaN(calorieGoal) || calorieGoal <= 0) {
        alert('Please enter a valid calorie goal.');
        return;
    }
    if (!mealPreference) {
        alert('Please select a meal preference.');
        return;
    }

    // Generate a diet plan based on inputs
    let dietPlan = [];
    if (mealPreference === 'vegetarian') {
        dietPlan = [
            'Breakfast: Oatmeal with fruits (350 kcal)',
            'Lunch: Grilled veggie salad (500 kcal)',
            'Snack: Hummus with carrots (150 kcal)',
            'Dinner: Lentil soup with quinoa (600 kcal)'
        ];
    } else if (mealPreference === 'non-vegetarian') {
        dietPlan = [
            'Breakfast: Scrambled eggs with toast (400 kcal)',
            'Lunch: Grilled chicken with rice (600 kcal)',
            'Snack: Greek yogurt with nuts (200 kcal)',
            'Dinner: Salmon with roasted veggies (700 kcal)'
        ];
    } else if (mealPreference === 'vegan') {
        dietPlan = [
            'Breakfast: Smoothie bowl with granola (300 kcal)',
            'Lunch: Chickpea and avocado salad (500 kcal)',
            'Snack: Trail mix (200 kcal)',
            'Dinner: Stir-fried tofu with vegetables (600 kcal)'
        ];
    }

    // Display the generated diet plan
    const resultContainer = document.getElementById('diet-plan-result');
    resultContainer.innerHTML = `
        <p>Your personalized diet plan for a calorie goal of <span>${calorieGoal} kcal</span>:</p>
        <ul>
            ${dietPlan.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
});
