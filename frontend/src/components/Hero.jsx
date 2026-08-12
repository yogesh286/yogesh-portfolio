import { motion } from "framer-motion";
import { profile, stats, features } from "../data/content";
import profileImg from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-16 px-6 sm:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_360px_180px] gap-10 items-start">
        {/* Text column */}
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-accent italic text-2xl text-ink/80 mb-2"
          >
            Hey, I'm Yogesh,
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="font-display uppercase leading-[0.95] text-ink text-5xl sm:text-6xl md:text-7xl"
          >
            A MERN Stack
            <br />
            <span className="font-accent italic normal-case font-normal">&amp; Full-Stack</span>
            <br />
            Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-6 max-w-md text-ink/70 leading-relaxed"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mt-8 flex items-center gap-5"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-ink text-cream font-mono text-xs uppercase tracking-widest pl-6 pr-2 py-2 rounded-full hover:bg-rust transition-colors focus-ring"
            >
              Contact me
              <span className="w-8 h-8 rounded-full bg-cream text-ink flex items-center justify-center">
                <ArrowUpRight size={16} />
              </span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink/60 hover:text-ink transition-colors focus-ring">
              <FaGithub size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink/60 hover:text-ink transition-colors focus-ring">
              <FaLinkedin size={20} />
            </a>
          </motion.div>
        </div>

        {/* Portrait column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
          className="order-1 lg:order-2 mx-auto lg:mx-0"
        >
          <div className="relative w-64 sm:w-80 lg:w-full aspect-[4/5] rounded-t-[9999px] rounded-b-3xl overflow-hidden bg-sage2 border border-ink/10 shadow-layer">
            <img
              src={profileImg}
              alt={`Portrait of ${profile.name}`}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Stats column */}
        <div className="order-3 flex lg:flex-col flex-wrap gap-6 lg:gap-8 lg:pt-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
              className="text-right lg:text-right min-w-[100px]"
            >
              <p className="font-display text-2xl sm:text-3xl text-ink">{s.value}</p>
              <p className="font-mono text-[11px] uppercase tracking-wide text-muted mt-0.5">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Feature capsule row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-ink/15 pt-10"
      >
        {features.map((f) => (
          <div key={f.title}>
            <p className="font-mono text-xs uppercase tracking-wide text-ink font-semibold">{f.title}</p>
            <p className="text-sm text-muted mt-2 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
