// JavaScript for Step Tracker
document.addEventListener("DOMContentLoaded", () => {
    const stepProgressBar = document.getElementById("step-progress-bar");
    const stepProgressText = document.getElementById("step-progress-text");
  
    const addSteps1000 = document.getElementById("add-steps-1000");
    const addSteps500 = document.getElementById("add-steps-500");
    const resetSteps = document.getElementById("reset-steps");
  
    let currentSteps = 0; // Current steps
    const dailyStepGoal = 10000; // Daily step goal
  
    // Function to update progress
    const updateStepProgress = () => {
      const percentage = (currentSteps / dailyStepGoal) * 100;
      stepProgressBar.style.width = `${Math.min(percentage, 100)}%`; // Limit to 100%
      stepProgressText.textContent = `${currentSteps} / ${dailyStepGoal} steps`;
    };
  
    // Add 1000 steps
    addSteps1000.addEventListener("click", () => {
      currentSteps += 1000;
      updateStepProgress();
    });
  
    // Add 500 steps
    addSteps500.addEventListener("click", () => {
      currentSteps += 500;
      updateStepProgress();
    });
  
    // Reset steps
    resetSteps.addEventListener("click", () => {
      currentSteps = 0;
      updateStepProgress();
    });
  
    // Initialize progress
    updateStepProgress();
  });
  