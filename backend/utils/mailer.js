import nodemailer from "nodemailer";

let transporter;

// Lazily builds a reusable transporter from env vars. Using a Gmail
// "app password" is the default here since it's free and standard for
// small projects — swap the transport config for Resend/SES/etc. if preferred.
function getTransporter() {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  return transporter;
}

export async function sendHireNotification({ name, email, message }) {
  const to = process.env.NOTIFY_EMAIL || process.env.EMAIL_USER;

  const html = `
    <div style="font-family: 'IBM Plex Sans', Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #0F1016;">
      <h2 style="margin-bottom: 4px;">New portfolio message</h2>
      <p style="color: #555; margin-top: 0;">Someone reached out through your site's contact form.</p>
      <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
        <tr>
          <td style="padding: 8px 0; color: #888; width: 90px;">Name</td>
          <td style="padding: 8px 0;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #888;">Email</td>
          <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
        </tr>
      </table>
      <p style="white-space: pre-wrap; background: #f4f4f4; padding: 16px; border-radius: 8px;">${escapeHtml(
        message
      )}</p>
    </div>
  `;

  await getTransporter().sendMail({
    from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
    to,
    replyTo: email,
    subject: `New hire inquiry from ${name}`,
    html,
  });
}

function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
