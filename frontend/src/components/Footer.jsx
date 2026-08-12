import { profile } from "../data/content";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-ink/15 py-10 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} {profile.name}. Built with the stack it shows off.
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-muted hover:text-ink transition-colors focus-ring" aria-label="GitHub">
            <FaGithub size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-ink transition-colors focus-ring" aria-label="LinkedIn">
            <FaLinkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} className="text-muted hover:text-ink transition-colors focus-ring" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
