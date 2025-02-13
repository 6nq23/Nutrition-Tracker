const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.mailgun.org",
  port: 587, // Use port 465 if you need a secure connection
  auth: {
    user: "postmaster@sandbox2714180e51d34d73a971fcf1e1460aca.mailgun.org",
    pass: "3fc26dc760c7749fab451a5852ade9bb-1654a412-bbd6add9"
  }
});

// Function to send reminder email
const sendReminderEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: '"Reminder Service" <your-email@gmail.com>',
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
