document.getElementById('bmi-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get user inputs
    const age = parseInt(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert to meters
    const weight = parseFloat(document.getElementById('weight').value);

    // Validate inputs
    if (isNaN(age) || age <= 0) {
        alert('Please enter a valid age.');
        return;
    }
    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        alert('Please enter valid height and weight values.');
        return;
    }

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(1);

    // Determine BMI Category
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi >= 18.5 && bmi <= 24.9) category = 'Normal';
    else if (bmi >= 25 && bmi <= 29.9) category = 'Overweight';
    else category = 'Obese';

    // Provide recommendation based on age
    let recommendation = '';
    if (age < 18) {
        recommendation = 'You are under 18. Consult a pediatrician for personalized advice.';
    } else if (age >= 18 && age <= 40) {
        recommendation = 'Maintain a balanced diet and regular exercise for good health.';
    } else if (age > 40 && age <= 60) {
        recommendation = 'Focus on a heart-healthy diet and moderate exercise.';
    } else {
        recommendation = 'Consider consulting a doctor for tailored health advice.';
    }

    // Display the result
    const result = `
        Your BMI is <span>${bmi}</span> (${category}).<br>
        Recommendation: <span>${recommendation}</span>
    `;
    document.getElementById('bmi-result').innerHTML = result;
});
