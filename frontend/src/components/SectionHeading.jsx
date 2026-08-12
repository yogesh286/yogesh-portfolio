import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, note }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-14 grid md:grid-cols-2 gap-4 items-end"
    >
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-rust mb-2">{eyebrow}</p>
        <h2 className="font-display uppercase text-4xl sm:text-5xl text-ink leading-none">{title}</h2>
      </div>
      {note && <p className="text-sm text-muted max-w-sm md:justify-self-end">{note}</p>}
    </motion.div>
  );
}
