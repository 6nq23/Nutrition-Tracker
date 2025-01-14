// Selecting the form and the reminder list
const reminderForm = document.getElementById("reminderForm");
const reminderList = document.getElementById("reminderList");

// Handle form submission
reminderForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Retrieve input values
    const activity = document.getElementById("activity").value;
    const time = document.getElementById("time").value;
    const email = document.getElementById("email").value;

    // Create a reminder card
    const reminderCard = document.createElement("div");
    reminderCard.className = "reminder-card";
    reminderCard.innerHTML = `
        <h3>${activity}</h3>
        <p>Reminder Time: ${time}</p>
        <p>Email: ${email}</p>
    `;

    // Append the reminder card to the list
    reminderList.appendChild(reminderCard);

    // Call the backend to send the email
    sendEmail(activity, time, email);

    // Reset the form fields
    reminderForm.reset();
});

// Function to send email via PHP backend
function sendEmail(activity, time, email) {
    fetch("send-email.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ activity, time, email }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                alert("Reminder email sent successfully!");
            } else {
                alert("Failed to send email. Please try again.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}
