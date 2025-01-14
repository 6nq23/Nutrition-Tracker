// JavaScript for Water Intake Tracker
document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");
  
    const addWater250 = document.getElementById("add-water-250");
    const addWater500 = document.getElementById("add-water-500");
    const resetWater = document.getElementById("reset-water");
  
    let currentIntake = 0; // Current water intake in ml
    const dailyGoal = 2000; // Daily water intake goal in ml
  
    // Function to update progress
    const updateProgress = () => {
      const percentage = (currentIntake / dailyGoal) * 100;
      progressBar.style.width = `${Math.min(percentage, 100)}%`; // Limit to 100%
      progressText.textContent = `${currentIntake} / ${dailyGoal} ml`;
    };
  
    // Add 250 ml water
    addWater250.addEventListener("click", () => {
      currentIntake += 250;
      updateProgress();
    });
  
    // Add 500 ml water
    addWater500.addEventListener("click", () => {
      currentIntake += 500;
      updateProgress();
    });
  
    // Reset water intake
    resetWater.addEventListener("click", () => {
      currentIntake = 0;
      updateProgress();
    });
  
    // Initialize progress
    updateProgress();
  });
  