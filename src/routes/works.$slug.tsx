import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/works/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    return {
      meta: [
        { title: p ? `${p.title} — Alex Morgan` : "Case study" },
        { name: "description", content: p?.description ?? "Case study" },
        { property: "og:title", content: p ? `${p.title} — Alex Morgan` : "Case study" },
        { property: "og:description", content: p?.description ?? "Case study" },
        ...(p ? [{ property: "og:image", content: p.cover }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="px-6 py-40 text-center">
      <p className="eyebrow mb-4">Not found</p>
      <h1 className="display-lg text-3xl mb-6">This case study doesn't exist.</h1>
      <Link to="/works" className="text-sm border-b border-foreground/40 hover:border-foreground pb-0.5">
        Back to works
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="px-6 py-40 text-center">
      <p className="text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: CaseStudy,
});

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article>
      {/* Hero */}
      <header className="px-6 md:px-10 max-w-7xl mx-auto pt-12 md:pt-20 pb-16">
        <Reveal>
          <p className="eyebrow mb-6">
            {project.category} — {project.year}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="display-xl text-[clamp(2.5rem,7vw,6rem)] max-w-4xl">
            {/* EDIT: [PROJECT TITLE] */}
            {project.title}.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl font-light">
            {project.description}
          </p>
        </Reveal>
      </header>

      <Reveal>
        <div className="w-full aspect-[16/9] bg-secondary overflow-hidden">
          {/* EDIT: [INSERT HERO SCREENSHOT] */}
          <img
            src={project.cover}
            alt={`${project.title} hero`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </Reveal>

      {/* Problem */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-3">
          <p className="eyebrow">Problem</p>
        </Reveal>
        <Reveal delay={100} className="md:col-span-9">
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
            {/* EDIT: [PROBLEM STATEMENT HERE] */}
            Users were abandoning the flow at the second step. We needed to understand why
            — and rebuild the moment of decision with less friction and more honesty.
          </p>
        </Reveal>
      </section>

      <div className="border-t border-border/60" />

      {/* Process */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto py-24 md:py-32">
        <Reveal>
          <p className="eyebrow mb-12">Process</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <Reveal>
            <div className="aspect-[4/3] bg-secondary overflow-hidden">
              {/* EDIT: [INSERT PROCESS SCREENSHOT] */}
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80"
                alt="Process artifact"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="text-2xl md:text-3xl font-light mb-6 tracking-tight">
              {/* EDIT: [PROCESS HEADING] */}
              Listening before drawing.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {/* EDIT: [PROCESS PARAGRAPH] */}
              Six diary studies, eleven interviews, and a week of close reading.
              The interface emerged from the language people already used.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="border-t border-border/60" />

      {/* Outcome */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-3">
          <p className="eyebrow">Outcome</p>
        </Reveal>
        <Reveal delay={100} className="md:col-span-9 space-y-12">
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
            {/* EDIT: [OUTCOME SUMMARY] */}
            Drop-off at the decision step fell by 38%. The team adopted the new pattern
            across two adjacent surfaces within the quarter.
          </p>
          <dl className="grid grid-cols-3 gap-6 max-w-2xl pt-4">
            {[
              { k: "−38%", v: "Drop-off" },
              { k: "+12%", v: "Completion" },
              { k: "4.6/5", v: "Satisfaction" },
            ].map((m) => (
              <div key={m.v}>
                <dt className="display-lg text-3xl md:text-4xl">{m.k}</dt>
                <dd className="eyebrow mt-2">{m.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* Next */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto py-24 border-t border-border/60">
        <Reveal>
          <Link
            to="/works/$slug"
            params={{ slug: next.slug }}
            className="group block"
            aria-label={`Next project: ${next.title}`}
          >
            <p className="eyebrow mb-3">Next project</p>
            <h2 className="display-lg text-4xl md:text-6xl group-hover:translate-x-2 transition-transform duration-500">
              {next.title} →
            </h2>
          </Link>
        </Reveal>
      </section>
    </article>
  );
}
