// Selecting the form and the challenge list
const challengeForm = document.getElementById("challengeForm");
const challengeList = document.getElementById("challengeList");

// Handle form submission
challengeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Retrieve input values
    const challengeName = document.getElementById("challengeName").value;
    const challengeGoal = document.getElementById("challengeGoal").value;
    const challengeDuration = document.getElementById("challengeDuration").value;

    // Create a new challenge card
    const challengeCard = document.createElement("div");
    challengeCard.className = "challenge-card";
    challengeCard.innerHTML = `
        <h3>${challengeName}</h3>
        <p>Goal: ${challengeGoal}</p>
        <p>Duration: ${challengeDuration} days</p>
        <div>
            <button class="complete-btn">Mark as Complete</button>
            <button class="remove-btn">Remove</button>
        </div>
    `;

    // Add event listeners for buttons
    challengeCard.querySelector(".complete-btn").addEventListener("click", function () {
        alert(`Congratulations! You've completed the "${challengeName}" challenge.`);
        challengeCard.remove();
    });

    challengeCard.querySelector(".remove-btn").addEventListener("click", function () {
        challengeCard.remove();
    });

    // Append the challenge card to the list
    challengeList.appendChild(challengeCard);

    // Clear form inputs
    challengeForm.reset();
});
