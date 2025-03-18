const cron = require('node-cron');
const EmailReminder = require('../models/EmailReminder');
const sendReminderEmail = require('../config/emailConfig');

// Check user-set reminders every minute
cron.schedule('* * * * *', async () => {
  console.log('Checking user-set reminders...');

  try {
    const now = new Date();
    const currentTime = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

    const reminders = await EmailReminder.find({ reminderTime: currentTime });

    reminders.forEach((reminder) => {
      sendReminderEmail(
        reminder.email,
        'Reminder Notification',
        reminder.reminderText
      );
    });

    console.log(`Sent ${reminders.length} reminders.`);
  } catch (error) {
    console.error('Error sending reminders:', error);
  }
});
