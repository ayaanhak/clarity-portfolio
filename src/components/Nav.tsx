import { Link } from "@tanstack/react-router";

// EDIT: Initials / monogram
const INITIALS = "AM";

const links = [
  { to: "/", label: "Home" },
  { to: "/works", label: "Works" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/40">
      <nav
        aria-label="Primary"
        className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between"
      >
        <Link
          to="/"
          aria-label="Home"
          className="font-display text-sm tracking-tight font-medium"
        >
          {INITIALS}
        </Link>
        <ul className="flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
