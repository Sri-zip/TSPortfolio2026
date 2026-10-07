import type { ReactNode } from "react";

export const STAGES = ["Understand", "Explore", "Define", "Iterate", "Prototype", "Test", "Refine"];

export function Page({ children, dark = false, className = "" }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <section className={`page ${dark ? "dark-page" : ""} ${className}`}>
      <div className="page-in">{children}</div>
    </section>
  );
}

/** Renders an image if src is provided, or a dashed teal placeholder box if missing. */
export function Ph({ label, src, alt, caption }: { label?: string; src?: string; alt?: string; caption?: string }) {
  if (src) {
    return (
      <figure className="flex flex-col gap-2 w-full overflow-hidden rounded-xl border border-line/80 bg-white/60 shadow-sm backdrop-blur-sm transition-all hover:border-teal/50">
        <img
          src={src}
          alt={alt || label || "Project visual"}
          className="w-full h-auto max-h-[520px] object-contain object-center bg-paper/30 p-2"
          loading="lazy"
        />
        {(caption || label) && (
          <figcaption className="px-4 py-2 text-xs font-mono text-muted border-t border-line/60 bg-paper/80 backdrop-blur-md">
            {caption || label}
          </figcaption>
        )}
      </figure>
    );
  }
  return <div className="ph rounded-xl" role="img" aria-label={label || "Visual placeholder"}>[{label || "EVIDENCE SLOT"}]</div>;
}

/** The visible process line: highlights the stages a page covers. */
export function Stages({ active }: { active: number[] }) {
  return (
    <ol className="mt-auto flex flex-wrap gap-x-4 gap-y-1 border-t border-line pt-3 meta" aria-label="Design process stage">
      {STAGES.map((s, i) => (
        <li key={s} className={active.includes(i) ? "font-medium text-teal" : "opacity-50"}>
          <span className={active.includes(i) ? "text-sakura" : ""}>{active.includes(i) ? "●" : "○"}</span> {s}
        </li>
      ))}
    </ol>
  );
}
