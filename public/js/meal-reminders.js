document.addEventListener('DOMContentLoaded', () => {
  // Fetch and display reminders
  async function fetchReminders() {
    try {
      const response = await fetch('/api/meal-reminders');
      const reminders = await response.json();
      const reminderList = document.getElementById('reminders');
      reminderList.innerHTML = ''; // Clear existing reminders

      if (reminders.length === 0) {
        reminderList.innerHTML = '<li>No reminders set yet.</li>';
        return;
      }

      reminders.forEach(reminder => {
        const li = document.createElement('li');
        li.textContent = `${reminder.mealName} at ${reminder.reminderTime} on ${new Date(reminder.reminderDate).toLocaleDateString()}`;
        reminderList.appendChild(li);
      });
    } catch (error) {
      console.error('Error fetching reminders:', error);
    }
  }

  // Handle form submission
  document.getElementById('reminder-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const mealName = document.getElementById('meal-name').value;
    const reminderTime = document.getElementById('meal-time').value;
    const reminderDate = document.getElementById('meal-date').value;

    try {
      const response = await fetch('/api/meal-reminders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mealName, reminderTime, reminderDate })
      });

      if (response.ok) {
        alert('Reminder created successfully!');
        fetchReminders(); // Refresh the reminders list
        document.getElementById('reminder-form').reset(); // Clear the form
      } else {
        alert('Failed to create reminder');
      }
    } catch (error) {
      console.error('Error creating reminder:', error);
    }
  });

  // Fetch reminders on page load
  fetchReminders(); });
