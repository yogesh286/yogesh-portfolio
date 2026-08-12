import { motion } from "framer-motion";
import { profile } from "../data/content";
import { Download } from "lucide-react";

const facts = [
  { label: "Based in", value: profile.location },
  { label: "Focus", value: "MERN Stack Development" },
  { label: "Currently", value: "Diploma in Full Stack Dev, Dec 2026" },
  { label: "Looking for", value: "Entry-level Full Stack roles" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-display uppercase text-4xl sm:text-5xl leading-[0.95] text-ink"
        >
          Crafting complete products, front to back
        </motion.h2>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-accent italic text-2xl text-ink leading-snug"
          >
            Hey, I'm Yogesh — a full-stack developer who ships complete systems, not just screens.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted leading-relaxed mt-5"
          >
            With a keen eye for clean interfaces and a solid grip on what happens behind them, I
            build products end to end — React on the front, Express and MongoDB underneath, and
            the auth, payments, and APIs that make a project actually work. Whether it's a
            booking system, a storefront, or an AI-assisted tool, I care about the whole path a
            request takes. Let's build something real together.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {facts.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                className="border-t border-ink/15 pt-3"
              >
                <p className="font-mono text-[11px] text-muted uppercase tracking-wide">{f.label}</p>
                <p className="text-ink mt-1 text-sm">{f.value}</p>
              </motion.div>
            ))}
          </div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            href={profile.resume}
            download
            className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-ink underline decoration-rust decoration-2 underline-offset-4 hover:text-rust transition-colors focus-ring"
          >
            <Download size={16} /> Download résumé
          </motion.a>
        </div>
      </div>
    </section>
  );
}
