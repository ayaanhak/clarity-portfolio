import { Link } from "@tanstack/react-router";

// EDIT: social links
const social = [
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" },
  { label: "Dribbble", href: "https://dribbble.com/your-handle" },
  { label: "Email", href: "mailto:hello@example.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} {/* EDIT: your name */} Alex Morgan. All rights reserved.</p>
        <ul className="flex items-center gap-6">
          <li><Link to="/works" className="hover:text-foreground transition-colors">Works</Link></li>
          <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
          <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
        </ul>
        <ul className="flex items-center gap-6">
          {social.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="hover:text-foreground transition-colors"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
