import { motion } from "framer-motion";
import { builtWith } from "../data/content";

export default function BuiltWith() {
  return (
    <section className="px-6 sm:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
          <p className="font-mono text-xs uppercase tracking-widest text-ink font-semibold">Built with</p>
          <p className="text-sm text-muted max-w-sm">
            Every project below is real, deployed, and built end to end with this stack.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {builtWith.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-2 border border-ink/15 rounded-full px-4 py-3 text-sm text-ink/80"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rust flex-shrink-0" />
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
