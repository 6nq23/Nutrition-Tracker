const themeToggleBtn = document.getElementById("themeToggle");

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeToggleBtn.textContent = "Enable Light Mode";
  } else {
    themeToggleBtn.textContent = "Enable Dark Mode";
  }
}

// Add event listener to the toggle button
themeToggleBtn.addEventListener("click", toggleDarkMode);
