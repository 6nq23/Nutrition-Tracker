// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    toggleButton.className = "dark-mode-toggle";
    document.body.appendChild(toggleButton);
  
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  });
  