import { useEffect, useRef, type ReactNode, type ElementType } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
}

export function Reveal({ children, delay = 0, as: Tag = "div", className = "" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("is-visible"), delay);
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const Component = Tag as any;
  return (
    <Component ref={ref as any} className={`reveal ${className}`}>
      {children}
    </Component>
  );
}

/** Stagger helper: renders children with incremental delays */
export function RevealStagger({ children, step = 80, className = "" }: { children: ReactNode[]; step?: number; className?: string }) {
  return (
    <div className={className}>
      {children.map((c, i) => (
        <Reveal key={i} delay={i * step}>{c}</Reveal>
      ))}
    </div>
  );
}
