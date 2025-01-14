// Sleep Tracker Logic
document.addEventListener("DOMContentLoaded", () => {
    const sleepProgressBar = document.getElementById("sleep-progress-bar");
    const sleepProgressText = document.getElementById("sleep-progress-text");
    const sleepInput = document.getElementById("sleep-hours");
    const addSleepButton = document.getElementById("add-sleep-hours");
    const resetSleepButton = document.getElementById("reset-sleep");
  
    let totalSleepHours = 0; // Current sleep hours logged
    const dailySleepGoal = 8; // Recommended daily sleep goal in hours
  
    // Function to update progress
    const updateSleepProgress = () => {
      const progress = Math.min((totalSleepHours / dailySleepGoal) * 100, 100); // Cap progress at 100%
      sleepProgressBar.style.width = `${progress}%`;
      sleepProgressText.textContent = `${totalSleepHours} / ${dailySleepGoal} hours`;
  
      // If sleep goal is reached
      if (totalSleepHours >= dailySleepGoal) {
        sleepProgressText.textContent = `Great job! You reached your goal of ${dailySleepGoal} hours!`;
      }
    };
  
    // Add sleep hours
    addSleepButton.addEventListener("click", () => {
      const sleepHours = parseFloat(sleepInput.value);
  
      if (!isNaN(sleepHours) && sleepHours >= 0 && sleepHours <= 12) {
        totalSleepHours += sleepHours;
        updateSleepProgress();
      } else {
        alert("Please enter a valid number between 0 and 12.");
      }
      sleepInput.value = ""; // Clear input field
    });
  
    // Reset sleep tracker
    resetSleepButton.addEventListener("click", () => {
      totalSleepHours = 0;
      updateSleepProgress();
    });
  
    // Initialize tracker
    updateSleepProgress();
  });
  