import { Router } from "express";
import rateLimit from "express-rate-limit";
import Message from "../models/Message.js";
import { sendHireNotification } from "../utils/mailer.js";

const router = Router();

// Basic abuse protection: 5 submissions per 15 minutes per IP.
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: "Too many messages sent. Please try again later." },
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/", contactLimiter, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ error: "Name, email, and message are all required." });
    }
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ error: "Please provide a valid email address." });
    }

    const saved = await Message.create({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    try {
      await sendHireNotification({ name, email, message });
      saved.emailed = true;
      await saved.save();
    } catch (mailErr) {
      // The message is safely stored even if the email notification fails —
      // log it so it can be triaged, but don't fail the request for the user.
      console.error("Email notification failed:", mailErr.message);
    }

    res.status(201).json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err.message);
    res.status(500).json({ error: "Something went wrong. Please try again shortly." });
  }
});

export default router;
