import { useEffect, useRef, useState } from "react";
import { Ph, Stages } from "./Page";
import type { Study } from "../data";

const WRAP = { brand: "md:grid-cols-3", product: "md:grid-cols-2", system: "grid-cols-1", service: "md:grid-cols-2" } as const;

export default function CaseStudyModal({ study, onClose }: { study: Study; onClose: () => void }) {
  const [tab, setTab] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const page = study.pages[tab];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setTab((t) => Math.min(t + 1, study.pages.length - 1));
      if (e.key === "ArrowLeft") setTab((t) => Math.max(t - 1, 0));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose, study.pages.length]);

  return (
    <div className="modal-backdrop no-print" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={panelRef} tabIndex={-1} role="dialog" aria-modal="true" aria-label={`${study.title} case study`} className="modal-panel">
        <header className="flex flex-wrap items-start justify-between gap-4 border-b border-line px-6 py-4 md:px-10">
          <div>
            <div className="flex items-center gap-3">
              <p className="meta text-teal">{study.no} / {study.tags}</p>
              {study.liveLink?.badge && (
                <span className="border border-teal/40 bg-teal/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-teal">
                  {study.liveLink.badge}
                </span>
              )}
            </div>
            <h2 className="text-2xl font-semibold md:text-4xl">{study.title}</h2>
          </div>
          <div className="flex items-center gap-3">
            {study.liveLink && (
              <a
                href={study.liveLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-teal bg-teal px-3.5 py-1.5 text-xs font-mono font-medium text-paper transition-all hover:bg-ink hover:border-ink shadow-xs"
              >
                {study.liveLink.label}
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close case study"
              className="shrink-0 rounded-xl border border-line bg-white/70 px-3.5 py-1.5 font-mono text-xs hover:bg-ink hover:text-paper hover:border-ink transition-colors shadow-xs"
            >
              Close ✕
            </button>
          </div>
        </header>

        <nav className="flex gap-2 px-6 pt-4 md:px-10">
          {study.pages.map((_, i) => (
            <button
              key={i}
              onClick={() => setTab(i)}
              className={`meta rounded-xl border px-4 py-1.5 text-xs font-mono transition-all ${
                i === tab
                  ? "border-teal bg-teal text-paper font-medium shadow-xs"
                  : "border-line bg-white/50 text-ink/80 hover:border-teal hover:text-ink"
              }`}
            >
              {i === 0 ? "Overview & Context" : "Design, Architecture & Outcome"}
            </button>
          ))}
        </nav>

        <div className="flex-1 overflow-y-auto px-6 py-5 md:px-10">
          {tab === 0 && (
            <dl className="mb-5 grid gap-2 border-b border-line pb-5 text-sm md:grid-cols-3">
              {study.meta.map(([k, v]) => (
                <div key={k}><dt className="meta">{k}</dt><dd className="font-medium text-ink/90">{v}</dd></div>
              ))}
            </dl>
          )}

          <div className={`grid gap-6 ${WRAP[study.variant]}`}>
            {page.blocks.map((b) => (
              <article key={b.no} className="flex flex-col gap-2">
                <span className="meta text-teal">{b.no}</span>
                <h3 className="text-lg font-semibold">{b.title}</h3>
                {b.text && <p className="max-w-[48ch] text-sm leading-relaxed text-ink/80">{b.text}</p>}
                {b.bullets && (
                  <ul className="space-y-1.5 text-sm text-ink/80">
                    {b.bullets.map((x) => <li key={x} className="border-l-2 border-teal/70 pl-2.5">{x}</li>)}
                  </ul>
                )}
                {b.media && (
                  <div className="mt-2">
                    <Ph src={b.media.src} alt={b.media.alt || b.title} caption={b.media.caption} />
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* Render media gallery for current page */}
          {page.media && page.media.length > 0 && (
            <div className="mt-8 flex flex-col gap-6 border-t border-line pt-6">
              <h4 className="meta text-teal">Project Artifacts & Visuals</h4>
              <div className="grid gap-6 sm:grid-cols-2">
                {page.media.map((m, idx) => (
                  <div key={idx} className={page.media!.length % 2 === 1 && idx === page.media!.length - 1 ? "sm:col-span-2" : ""}>
                    <Ph src={m.src} alt={m.alt} caption={m.caption} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {page.slot && <div className="mt-5"><Ph label={page.slot} /></div>}
        </div>

        <footer className="border-t border-line px-6 py-4 md:px-10">
          <Stages active={page.stages} />
        </footer>
      </div>
    </div>
  );
}
