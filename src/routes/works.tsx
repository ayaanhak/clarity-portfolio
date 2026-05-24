import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { projects, type Category } from "@/data/projects";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "Works — Alex Morgan" },
      { name: "description", content: "Selected case studies in product, visual and research design." },
      { property: "og:title", content: "Works — Alex Morgan" },
      { property: "og:description", content: "Selected case studies in product, visual and research design." },
    ],
  }),
  component: Works,
});

const filters = ["All", "Product", "Visual", "Research"] as const;
type Filter = (typeof filters)[number];

function Works() {
  const [active, setActive] = useState<Filter>("All");

  const list = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === (active as Category))),
    [active]
  );

  return (
    <section className="px-6 md:px-10 max-w-7xl mx-auto py-24 md:py-32">
      <Reveal>
        <p className="eyebrow mb-6">Case studies</p>
      </Reveal>
      <Reveal delay={100}>
        <h1 className="display-xl text-[clamp(2.25rem,6vw,5rem)] max-w-3xl">
          Things I've designed, written, and shipped.
        </h1>
      </Reveal>

      {/* Filters */}
      <Reveal delay={200}>
        <div className="mt-16 flex flex-wrap gap-2 md:gap-3" role="tablist" aria-label="Filter projects">
          {filters.map((f) => {
            const isActive = f === active;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(f)}
                className={`text-sm px-4 py-2 rounded-full transition-colors ${
                  isActive
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
        {list.map((p, i) => (
          <Reveal key={p.slug} delay={i * 90}>
            <Link
              to="/works/$slug"
              params={{ slug: p.slug }}
              className="group block"
              aria-label={`View case study: ${p.title}`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary rounded-sm relative">
                <img
                  src={p.cover}
                  alt={`${p.title} cover`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg md:text-xl font-medium tracking-tight">{p.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{p.description}</p>
                  <span
                    className="inline-block mt-4 text-xs text-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                  >
                    View case study →
                  </span>
                </div>
                <div className="text-right">
                  <span className="eyebrow block">{p.category}</span>
                  <span className="text-xs text-muted-foreground mt-1 block">{p.year}</span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
