import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { nav } from "../data/content";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 inset-x-0 z-50"
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-10 py-8">
        <a href="#home" className="flex items-center gap-2 focus-ring">
          <span className="w-2 h-2 rounded-full bg-ink" />
          <span className="font-mono text-xs font-medium tracking-[0.2em] uppercase text-ink">
            Yogesh
          </span>
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 bg-ink text-cream text-xs font-mono uppercase tracking-widest px-4 py-2.5 rounded-full focus-ring"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          Menu
          <span className="flex flex-col gap-[3px]">
            <span className="w-3 h-[1.5px] bg-cream" />
            <span className="w-3 h-[1.5px] bg-cream" />
          </span>
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto px-6 sm:px-10 pb-6"
        >
          <ul className="flex flex-wrap gap-x-8 gap-y-3 bg-cream/95 backdrop-blur border border-ink/10 rounded-2xl px-6 py-5">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className={`font-mono text-sm uppercase tracking-wide transition-colors focus-ring ${
                    active === n.id ? "text-rust" : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
