const nodemailer = require('nodemailer');
require('dotenv').config();


// Email transport configuration (use your SMTP settings)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD, // Make sure this is secured in real-world use
  },
});

// Helper function to send emails with error handling
exports.sendEmail = async (recipient, subject, body) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL,
      to: recipient,
      subject,
      html: body,
    };

    // Send email using the transporter
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent to:", recipient, "Response:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
