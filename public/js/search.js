// Database of Features and Their Corresponding Pages
const features = [
    { title: "Login", page: "login.html" },
    { title: "Sign Up", page: "signup.html" },
    { title: "BMI Calculator", page: "bmi-calculator.html" },
    { title: "Calorie Tracker", page: "calorie-tracker.html" },
    { title: "Meal Selection System", page: "meal-selection.html" },
    { title: "Diet Plan Generator", page: "diet-plan.html" },
    { title: "Meal Reminders", page: "meal-reminders.html" },
    { title: "Progress Tracker", page: "progress-tracker.html" },
    { title: "Notifications & Alerts", page: "notifications.html" },
    { title: "Dialog Boxes", page: "dialog-boxes.html" },
    { title: "Step Tracker", page: "step-tracker.html" },
    { title: "Sleep Tracker", page: "sleep-tracker.html" },
    { title: "Water Intake Tracker", page: "water-intake.html" },
    { title: "Fitness Challenge System", page: "fitness-challenge.html" },
    { title: "Meal Feedback & Rating System", page: "meal-feedback.html" },
    { title: "Notifications & Reminders with Email", page: "notification-email.html" },
    { title: "Dark Mode/Theme Toggle", page: "dark_mode.html" },
  ];
  
  // Get DOM Elements
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");
  
  // Handle Search Form Submission
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload
    const query = searchInput.value.trim().toLowerCase(); // Get input value
    searchResults.innerHTML = ""; // Clear previous results
  
    // Filter Features Based on Query
    const filteredFeatures = features.filter((feature) =>
      feature.title.toLowerCase().includes(query)
    );
  
    // Show Results
    if (filteredFeatures.length === 0) {
      searchResults.innerHTML = "<p class='no-results'>No features found. Try a different search.</p>";
    } else {
      filteredFeatures.forEach((feature) => {
        const featureItem = document.createElement("div");
        featureItem.className = "result-item";
        featureItem.innerHTML = `
          <a href="${feature.page}" target="_self">${feature.title}</a>
        `;
        searchResults.appendChild(featureItem);
      });
    }
  });
  