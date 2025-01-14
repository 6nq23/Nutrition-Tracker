document.getElementById('calorie-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Fetch calorie input
    const caloriesInput = document.getElementById('calories');
    const calorieValue = parseFloat(caloriesInput.value);

    // Validation
    if (isNaN(calorieValue) || calorieValue <= 0) {
        alert('Please enter a valid calorie value.');
        return;
    }

    // Update total calories and progress
    const totalCaloriesElem = document.getElementById('total-calories');
    const calorieGoalElem = document.getElementById('calorie-goal');
    const progressBar = document.getElementById('progress-bar');

    const currentTotal = parseFloat(totalCaloriesElem.textContent);
    const calorieGoal = parseFloat(calorieGoalElem.textContent);

    const newTotal = currentTotal + calorieValue;
    totalCaloriesElem.textContent = newTotal;

    // Update progress bar
    const progressPercentage = Math.min((newTotal / calorieGoal) * 100, 100); // Max 100%
    progressBar.style.width = progressPercentage + '%';

    // Clear input field
    caloriesInput.value = '';

    // Notify user if goal is reached
    if (newTotal >= calorieGoal) {
        alert('Congratulations! You have reached your calorie goal!');
    }
});
