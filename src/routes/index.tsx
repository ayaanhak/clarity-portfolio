import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Morgan — Designing for clarity. Building for people." },
      { name: "description", content: "Selected works by Alex Morgan, a UI/UX designer focused on clarity and craft." },
      { property: "og:title", content: "Alex Morgan — Designing for clarity. Building for people." },
      { property: "og:description", content: "Selected works by Alex Morgan, a UI/UX designer focused on clarity and craft." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-[88vh] flex flex-col justify-center px-6 md:px-10 max-w-7xl mx-auto">
        <Reveal>
          <p className="eyebrow mb-8">{/* EDIT: eyebrow */}Portfolio — 2025</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="display-xl text-[clamp(2.75rem,9vw,8.5rem)]">
            {/* EDIT: full name */}Alex Morgan.
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl font-light">
            {/* EDIT: one-line descriptor */}
            Designing for clarity. Building for people.
          </p>
        </Reveal>

        {/* Scroll indicator */}
        <div className="mt-24 flex items-center gap-3 text-xs text-muted-foreground" aria-hidden>
          <span className="eyebrow">Scroll</span>
          <span
            className="inline-block w-px h-10 bg-foreground/40"
            style={{ animation: "scroll-pulse 2.4s ease-in-out infinite" }}
          />
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto py-32 md:py-40">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <Reveal>
            <h2 className="display-lg text-3xl md:text-5xl">Selected works, 2023–2025.</h2>
          </Reveal>
          <Reveal delay={80}>
            <Link
              to="/works"
              className="hidden md:inline-block text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-foreground/30 hover:border-foreground pb-0.5"
            >
              View all
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-10">
          {projects.map((p, i) => {
            const span = p.size === "large" ? "md:col-span-4" : "md:col-span-2";
            return (
              <Reveal key={p.slug} delay={i * 90} className={span}>
                <Link
                  to="/works/$slug"
                  params={{ slug: p.slug }}
                  className="group block"
                  aria-label={`${p.title} — ${p.category}`}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-secondary rounded-sm">
                    <img
                      src={p.cover}
                      alt={`${p.title} cover`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base md:text-lg font-medium tracking-tight">{p.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{p.description}</p>
                    </div>
                    <span className="eyebrow whitespace-nowrap mt-1">{p.category}</span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
