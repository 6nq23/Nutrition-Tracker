const reminderForm = document.getElementById('reminder-form');
const remindersList = document.getElementById('reminders');

// Array to store reminders
const reminders = [];

// Add a new reminder
reminderForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const mealTime = document.getElementById('meal-time').value;
    const mealName = document.getElementById('meal-name').value;

    if (!mealTime || !mealName) {
        alert('Please fill in both fields.');
        return;
    }

    // Add the reminder to the list
    const reminder = { time: mealTime, name: mealName };
    reminders.push(reminder);

    // Display the reminder
    updateRemindersUI();

    // Clear the input fields
    reminderForm.reset();
});

// Update the reminders list in the UI
function updateRemindersUI() {
    remindersList.innerHTML = ''; // Clear the list

    reminders.forEach((reminder, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${reminder.name} at ${reminder.time}</span>
            <button onclick="deleteReminder(${index})">Delete</button>
        `;
        remindersList.appendChild(listItem);
    });
}

// Delete a reminder
function deleteReminder(index) {
    reminders.splice(index, 1);
    updateRemindersUI();
}

// Check reminders every minute
setInterval(function () {
    const currentTime = new Date().toTimeString().slice(0, 5); // Current time in HH:MM format

    reminders.forEach(reminder => {
        if (reminder.time === currentTime) {
            alert(`Reminder: It's time for your ${reminder.name}!`);
        }
    });
}, 60000); // Check every 60 seconds
