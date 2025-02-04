const nodemailer = require('nodemailer');

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use any email service (Gmail, Outlook, etc.)
  auth: {
    user: 'your-email@gmail.com', // Replace with your email
    pass: 'your-email-password' // Replace with your email password or App Password
  }
});

// Function to send email
const sendReminderEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: '"Hydration Reminder" <your-email@gmail.com>',
      to,
      subject,
      text
    });
    console.log(`Reminder email sent to ${to}`);
  } catch (error) {
    console.error(`Error sending email to ${to}:`, error);
  }
};

module.exports = sendReminderEmail;
