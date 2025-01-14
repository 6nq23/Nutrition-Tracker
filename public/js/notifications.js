const notificationsContainer = document.getElementById('notifications-container');
const triggerNotificationBtn = document.getElementById('trigger-notification');

// Trigger a new notification
triggerNotificationBtn.addEventListener('click', function () {
    createNotification('This is a triggered notification!');
});

// Function to create and display a notification
function createNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="removeNotification(this)">Dismiss</button>
    `;

    notificationsContainer.appendChild(notification);

    // Auto-remove notification after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Function to remove a notification manually
function removeNotification(button) {
    const notification = button.parentElement;
    notification.remove();
}

// Example: Real-time notification every 10 seconds
setInterval(() => {
    const time = new Date().toLocaleTimeString();
    createNotification(`Reminder: Stay on track! Current time is ${time}`);
}, 10000);
