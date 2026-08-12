import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/content";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Coffee, Stethoscope, ShoppingBag } from "lucide-react";

const art = [
  { Icon: Coffee, from: "#8B5E3C", to: "#3E2A1E" },
  { Icon: Stethoscope, from: "#4A7A70", to: "#20342F" },
  { Icon: ShoppingBag, from: "#B65C36", to: "#3B241A" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          note="Explore three shipped MERN builds — open the live site or the code."
        />

        <div className="flex flex-col gap-16">
          {projects.map((p, i) => {
            const { Icon, from, to } = art[i % art.length];
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              >
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-3xl overflow-hidden border border-ink/15 focus-ring"
                  style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
                >
                  <div className="relative h-64 sm:h-80 flex items-center justify-center">
                    <Icon
                      size={140}
                      strokeWidth={1}
                      className="text-cream/25 group-hover:scale-105 group-hover:text-cream/35 transition-all duration-500"
                    />
                    <span className="absolute top-5 right-5 flex items-center gap-1.5 bg-cream text-ink text-xs font-mono uppercase tracking-wide px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      Visit live site <ExternalLink size={12} />
                    </span>
                  </div>
                </a>

                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mt-5">
                  <div>
                    <h3 className="font-display uppercase text-2xl sm:text-3xl text-ink">{p.title}</h3>
                    <p className="font-accent italic text-lg text-ink/70 mt-1">{p.tagline}</p>
                  </div>
                  <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-wide">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-ink hover:text-rust transition-colors focus-ring"
                    >
                      <ExternalLink size={13} /> Live
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted hover:text-ink transition-colors focus-ring"
                    >
                      <FaGithub size={13} /> Code
                    </a>
                  </div>
                </div>

                <p className="text-sm text-muted leading-relaxed mt-3 max-w-2xl">{p.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-mono px-3 py-1 rounded-full border border-ink/15 text-ink/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
