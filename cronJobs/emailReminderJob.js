const cron = require('node-cron');
const EmailReminder = require('../models/EmailReminder');
const sendReminderEmail = require('../config/emailConfig');

// Send automatic hourly reminders to all users
cron.schedule('0 * * * *', async () => { // Runs every hour (HH:00)
  console.log('Sending hourly water reminder emails...');

  try {
    const reminders = await EmailReminder.find(); // Get all users with reminders

    reminders.forEach((reminder) => {
      sendReminderEmail(
        reminder.email,
        'Time to Drink Water!',
        `Stay hydrated! Remember to drink water.`
      );
    });

    console.log(`Sent hourly reminders to ${reminders.length} users.`);
  } catch (error) {
    console.error('Error sending hourly reminders:', error);
  }
});

// Send user-set reminders at specific times
cron.schedule('* * * * *', async () => { // Runs every minute (to check user-set times)
  console.log('Checking user-set reminders...');

  try {
    const currentTime = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

    const reminders = await EmailReminder.find({ reminderTime: currentTime });

    reminders.forEach((reminder) => {
      sendReminderEmail(
        reminder.email,
        'Water Intake Reminder',
        `It's time to drink water! Stay hydrated and healthy.`
      );
    });

    console.log(`Sent ${reminders.length} user-set reminders.`);
  } catch (error) {
    console.error('Error sending user-set reminders:', error);
  }
});
