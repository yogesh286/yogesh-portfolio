import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/content";
import { Mail, ArrowUpRight, CheckCircle2, XCircle } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Could not send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto">
        <SectionHeading eyebrow="Let's build something" title="Hire me" />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted mb-10 max-w-xl"
        >
          Send a message and I'll get an email the moment it lands. Or reach me directly at{" "}
          <a href={`mailto:${profile.email}`} className="text-ink underline decoration-rust decoration-2 underline-offset-4">
            {profile.email}
          </a>
          .
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="grid gap-5 border border-ink/15 bg-cream rounded-3xl p-6 sm:p-10"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="font-mono text-[11px] text-muted uppercase tracking-wide">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full bg-transparent border-b border-ink/25 px-1 py-3 text-ink placeholder:text-muted/60 focus-ring focus:border-ink outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-[11px] text-muted uppercase tracking-wide">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full bg-transparent border-b border-ink/25 px-1 py-3 text-ink placeholder:text-muted/60 focus-ring focus:border-ink outline-none transition-colors"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="font-mono text-[11px] text-muted uppercase tracking-wide">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="mt-2 w-full bg-transparent border-b border-ink/25 px-1 py-3 text-ink placeholder:text-muted/60 focus-ring focus:border-ink outline-none transition-colors resize-none"
              placeholder="Tell me about the role or project..."
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={status === "loading"}
            className="mt-2 inline-flex items-center justify-center gap-3 bg-ink text-cream font-mono text-xs uppercase tracking-widest pl-6 pr-2 py-2 rounded-full hover:bg-rust transition-colors disabled:opacity-60 focus-ring w-fit"
          >
            {status === "loading" ? "Sending..." : "Send message"}
            <span className="w-8 h-8 rounded-full bg-cream text-ink flex items-center justify-center">
              <ArrowUpRight size={16} />
            </span>
          </motion.button>

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-ink font-mono"
            >
              <CheckCircle2 size={16} /> Sent — I'll get an email now and reply soon.
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-rust font-mono"
            >
              <XCircle size={16} /> {errorMsg}
            </motion.div>
          )}
        </motion.form>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          href={`mailto:${profile.email}`}
          className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-ink transition-colors focus-ring"
        >
          <Mail size={16} /> {profile.email}
        </motion.a>
      </div>
    </section>
  );
}
