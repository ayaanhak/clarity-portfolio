import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Alex Morgan" },
      { name: "description", content: "About Alex Morgan — designer, recent graduate, currently looking for product design roles." },
      { property: "og:title", content: "About — Alex Morgan" },
      { property: "og:description", content: "About Alex Morgan — designer, recent graduate, currently looking for product design roles." },
    ],
  }),
  component: About,
});

// EDIT: skills list
const skills = [
  "Figma", "Prototyping", "Design systems", "User research",
  "Wireframing", "Motion", "HTML & CSS", "Accessibility",
  "Interaction design", "Workshop facilitation",
];

// EDIT: currently reading
const reading = [
  { title: "The Design of Everyday Things", author: "Don Norman" },
  { title: "Hara — Designing Design", author: "Kenya Hara" },
  { title: "Working", author: "Robert Caro" },
];

function About() {
  return (
    <>
      <section className="px-6 md:px-10 max-w-7xl mx-auto pt-16 md:pt-24 pb-24">
        <Reveal>
          <p className="eyebrow mb-6">About</p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="display-xl text-[clamp(2.25rem,6vw,5rem)] max-w-3xl">
            A designer who reads, listens, and then draws.
          </h1>
        </Reveal>
      </section>

      <section className="px-6 md:px-10 max-w-7xl mx-auto pb-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <div className="aspect-[4/5] bg-secondary overflow-hidden">
            {/* EDIT: [INSERT PORTRAIT] */}
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1000&q=80"
              alt="Portrait of Alex Morgan"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        <div className="md:col-span-7 space-y-14">
          <Reveal>
            <p className="eyebrow mb-4">Who I am</p>
            <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/90 max-w-2xl">
              {/* EDIT: [WHO I AM PARAGRAPH] */}
              I'm a recent graduate from the Rhode Island School of Design with a focus on
              product and interaction design. I care about the parts of an interface that
              get used every day — the small, quiet decisions that compound into trust.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <p className="eyebrow mb-4">My design philosophy</p>
            <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/90 max-w-2xl">
              {/* EDIT: [PHILOSOPHY] */}
              Restraint is a service to the user. The best work feels inevitable —
              like it was always supposed to be that way. I'm interested in making
              software that respects attention.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="eyebrow mb-4">What I'm looking for</p>
            <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/90 max-w-2xl">
              {/* EDIT: [LOOKING FOR] */}
              A product team that takes craft seriously — somewhere I can learn from
              senior designers and engineers, and contribute thoughtful work in return.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <a
              href="/resume.pdf"
              /* EDIT: [LINK TO RÉSUMÉ PDF] */
              className="inline-flex items-center text-sm border-b border-foreground/40 hover:border-foreground transition-colors pb-0.5"
            >
              Download résumé (PDF)
            </a>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto py-20 border-t border-border/60">
        <Reveal>
          <p className="eyebrow mb-8">Tools & practice</p>
        </Reveal>
        <Reveal delay={100}>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-base md:text-lg font-light max-w-4xl">
            {skills.map((s) => (
              <li key={s} className="text-foreground/80">{s}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Currently inspired by */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto py-20 border-t border-border/60">
        <Reveal>
          <p className="eyebrow mb-8">Currently reading</p>
        </Reveal>
        <ul className="divide-y divide-border/60 max-w-3xl">
          {reading.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <li className="flex items-baseline justify-between py-5">
                <span className="text-base md:text-lg font-light">{b.title}</span>
                <span className="text-sm text-muted-foreground">{b.author}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
