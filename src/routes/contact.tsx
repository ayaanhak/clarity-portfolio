import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Alex Morgan" },
      { name: "description", content: "Get in touch with Alex Morgan about design work, roles, or collaboration." },
      { property: "og:title", content: "Contact — Alex Morgan" },
      { property: "og:description", content: "Get in touch with Alex Morgan about design work, roles, or collaboration." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // EDIT: wire up to your email service
    setSent(true);
  };

  return (
    <section className="px-6 md:px-10 max-w-3xl mx-auto py-24 md:py-40">
      <Reveal>
        <p className="eyebrow mb-6 text-center">Contact</p>
      </Reveal>
      <Reveal delay={100}>
        <h1 className="display-xl text-[clamp(2.5rem,7vw,5.5rem)] text-center">
          Let's work together.
        </h1>
      </Reveal>
      <Reveal delay={200}>
        <p className="text-muted-foreground text-center mt-6 max-w-md mx-auto font-light">
          I'm currently looking for product design roles and considered freelance projects.
        </p>
      </Reveal>

      <Reveal delay={300}>
        <form onSubmit={onSubmit} className="mt-20 space-y-10" aria-label="Contact form">
          <Field id="name" label="Name" />
          <Field id="email" label="Email" type="email" />
          <Field id="message" label="Message" textarea />
          <div className="flex items-center justify-between pt-4">
            <button
              type="submit"
              className="text-sm border-b border-foreground/60 hover:border-foreground pb-1 transition-colors"
            >
              {sent ? "Sent — thank you." : "Send message →"}
            </button>
          </div>
        </form>
      </Reveal>

      <Reveal delay={400}>
        <div className="mt-24 pt-10 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <a
            href="mailto:hello@alexmorgan.design"
            /* EDIT: [EMAIL ADDRESS] */
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            hello@alexmorgan.design
          </a>
          <a
            href="https://linkedin.com/in/your-handle"
            /* EDIT: [LINKEDIN URL] */
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
      </Reveal>
    </section>
  );
}

interface FieldProps {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
}

function Field({ id, label, type = "text", textarea }: FieldProps) {
  return (
    <div className="border-b border-border pb-3 focus-within:border-foreground transition-colors">
      <label htmlFor={id} className="eyebrow block mb-3">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          required
          rows={4}
          className="w-full bg-transparent outline-none text-base md:text-lg font-light resize-none placeholder:text-muted-foreground/50"
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required
          className="w-full bg-transparent outline-none text-base md:text-lg font-light placeholder:text-muted-foreground/50"
        />
      )}
    </div>
  );
}
