import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills"
          note="Grouped the way a MERN project actually breaks down — layer by layer."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((group, i) => (
            <motion.div
              key={group.layer}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-ink/15 bg-cream p-6"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-rust mb-4">
                {group.layer}
              </p>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-ink/85 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
