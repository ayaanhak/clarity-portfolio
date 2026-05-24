import { useEffect, useState } from "react";

export function Loader() {
  const [gone, setGone] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 1100);
    const t2 = setTimeout(() => setGone(true), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[80] flex items-center justify-center bg-background"
      style={{
        transition: "opacity 600ms cubic-bezier(0.22,1,0.36,1)",
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        {/* EDIT: initials drawn as strokes */}
        <path
          d="M14 60 L28 22 L42 60 M20 48 L36 48"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{
            strokeDasharray: 200,
            animation: "draw-in 1100ms cubic-bezier(0.22,1,0.36,1) forwards",
          }}
        />
        <path
          d="M48 60 L48 22 L60 44 L72 22 L72 60"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{
            strokeDasharray: 200,
            animation: "draw-in 1100ms cubic-bezier(0.22,1,0.36,1) 120ms forwards",
            opacity: 0,
          }}
        />
      </svg>
    </div>
  );
}
