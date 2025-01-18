const BMI = require('../models/BMI');

// Calculate and save BMI
exports.calculateBMI = async (req, res) => {
  try {
    const { age, height, weight } = req.body;
    const userId = req.user.id;

    if (!age || !height || !weight || age <= 0 || height <= 0 || weight <= 0) {
      return res.status(400).json({ error: 'Invalid age, height, or weight.' });
    }

    // Calculate BMI
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    // Determine BMI category
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

    // Save BMI record to database
    const bmiRecord = new BMI({
      userId,
      age,
      height,
      weight,
      bmi,
      category,
      recommendation
    });

    await bmiRecord.save();

    res.status(201).json({
      message: 'BMI calculated successfully.',
      data: { bmi, category, recommendation }
    });
  } catch (error) {
    console.error('Error calculating BMI:', error);
    res.status(500).json({ error: 'Failed to calculate BMI.' });
  }
};

// Get BMI records for the logged-in user
exports.getBMIRecords = async (req, res) => {
  try {
    const userId = req.user.id;
    const records = await BMI.find({ userId }).sort({ date: -1 });

    res.status(200).json(records);
  } catch (error) {
    console.error('Error fetching BMI records:', error);
    res.status(500).json({ error: 'Failed to fetch BMI records.' });
  }
};
