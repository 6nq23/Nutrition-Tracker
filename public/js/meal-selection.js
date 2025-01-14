// Meal data categorized into Vegan, Vegetarian, and Non-Vegetarian
const meals = {
    vegan: [
        {
            id: 1,
            name: "Quinoa Bowl with Avocado",
            ingredients: "Quinoa, Avocado, Black Beans, Corn, Lime Juice",
            nutrition: "Calories: 300, Protein: 10g, Carbs: 30g, Fat: 12g"
        },
        {
            id: 2,
            name: "Tofu Stir-Fry",
            ingredients: "Tofu, Broccoli, Bell Peppers, Soy Sauce, Garlic",
            nutrition: "Calories: 250, Protein: 15g, Carbs: 20g, Fat: 8g"
        },
        {
            id: 3,
            name: "Vegan Buddha Bowl",
            ingredients: "Quinoa, Sweet Potatoes, Kale, Chickpeas, Tahini Sauce",
            nutrition: "Calories: 350, Protein: 12g, Carbs: 40g, Fat: 10g"
        }
    ],
    vegetarian: [
        {
            id: 4,
            name: "Vegetable Stir-Fry",
            ingredients: "Broccoli, Bell Peppers, Carrots, Soy Sauce, Garlic",
            nutrition: "Calories: 180, Protein: 5g, Carbs: 15g, Fat: 5g"
        },
        {
            id: 5,
            name: "Greek Yogurt Parfait",
            ingredients: "Greek Yogurt, Granola, Berries, Honey",
            nutrition: "Calories: 200, Protein: 15g, Carbs: 20g, Fat: 5g"
        },
        {
            id: 6,
            name: "Vegetarian Lasagna",
            ingredients: "Pasta, Tomato Sauce, Mozzarella, Spinach, Zucchini",
            nutrition: "Calories: 400, Protein: 20g, Carbs: 45g, Fat: 12g"
        }
    ],
    nonveg: [
        {
            id: 7,
            name: "Grilled Chicken Salad",
            ingredients: "Chicken, Lettuce, Cucumber, Olive Oil, Lemon",
            nutrition: "Calories: 250, Protein: 25g, Carbs: 10g, Fat: 8g"
        },
        {
            id: 8,
            name: "Grilled Salmon with Veggies",
            ingredients: "Salmon, Asparagus, Zucchini, Olive Oil",
            nutrition: "Calories: 400, Protein: 35g, Carbs: 5g, Fat: 25g"
        },
        {
            id: 9,
            name: "Beef Steak with Veggies",
            ingredients: "Beef, Broccoli, Green Beans, Garlic Butter",
            nutrition: "Calories: 500, Protein: 45g, Carbs: 10g, Fat: 30g"
        }
    ]
};

// Populate meal dropdown based on category selection
document.getElementById("categorySelect").addEventListener("change", function () {
    const category = this.value;
    const mealSelect = document.getElementById("mealSelect");
    const mealDropdownContainer = document.getElementById("mealDropdownContainer");

    // Clear existing options in meal dropdown
    mealSelect.innerHTML = '<option value="" disabled selected>Select a meal</option>';

    // Populate meals based on category
    meals[category].forEach(meal => {
        const option = document.createElement("option");
        option.value = meal.id;
        option.textContent = meal.name;
        mealSelect.appendChild(option);
    });

    // Show the meal dropdown
    mealDropdownContainer.style.display = "block";
    document.getElementById("mealInfo").style.display = "none"; // Hide meal info
});

// Display meal information on meal selection
document.getElementById("mealSelect").addEventListener("change", function () {
    const mealId = parseInt(this.value);
    const category = document.getElementById("categorySelect").value;
    const meal = meals[category].find(meal => meal.id === mealId);

    if (meal) {
        document.getElementById("mealName").textContent = meal.name;
        document.getElementById("mealIngredients").textContent = meal.ingredients;
        document.getElementById("mealNutrition").textContent = meal.nutrition;

        // Show meal information
        document.getElementById("mealInfo").style.display = "block";
    }
});
