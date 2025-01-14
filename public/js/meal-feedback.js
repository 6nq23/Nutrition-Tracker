// Selecting the form and feedback list
const feedbackForm = document.getElementById("feedbackForm");
const feedbackList = document.getElementById("feedbackList");

// Handle form submission
feedbackForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Retrieve form values
    const mealName = document.getElementById("mealName").value;
    const rating = parseInt(document.getElementById("rating").value);
    const feedback = document.getElementById("feedback").value;

    // Validate the rating input
    if (rating < 1 || rating > 5) {
        alert("Please enter a rating between 1 and 5.");
        return;
    }

    // Create a feedback card
    const feedbackCard = document.createElement("div");
    feedbackCard.className = "feedback-card";
    feedbackCard.innerHTML = `
        <h3>${mealName}</h3>
        <p class="rating">Rating: ${rating} / 5</p>
        <p>${feedback}</p>
    `;

    // Append the feedback card to the list
    feedbackList.appendChild(feedbackCard);

    // Reset the form
    feedbackForm.reset();
});
