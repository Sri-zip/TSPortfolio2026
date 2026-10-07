import { Page, Ph } from "./Page";
import type { Study } from "../data";

export default function ProjectGrid({ studies, onOpen }: { studies: Study[]; onOpen: (no: string) => void }) {
  return (
    <Page>
      <div>
        <span className="glass-pill rounded-full px-3.5 py-1 font-mono text-xs text-teal">03 / Selected Work</span>
        <h2 className="mt-3 text-3xl font-semibold md:text-5xl tracking-tight">Case Studies</h2>
        <p className="mt-2 max-w-[50ch] text-sm text-ink/70">
          Five focused projects spanning physical computing, service ecosystems, digital products, and brand ritual packaging.
        </p>
      </div>

      <div className="grid flex-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {studies.map((s) => (
          <button
            key={s.no}
            onClick={() => onOpen(s.no)}
            className="group glass-panel flex flex-col justify-between rounded-2xl p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-teal/60 hover:shadow-xl focus-visible:border-teal"
          >
            <div>
              <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-xl border border-line/70 bg-paper/50">
                {s.thumbnail ? (
                  <img
                    src={s.thumbnail}
                    alt={`${s.title} preview`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <Ph label={`${s.title.toUpperCase()} THUMBNAIL`} />
                )}
                {s.liveLink?.badge && (
                  <span className="absolute top-2.5 right-2.5 rounded-md bg-ink/80 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-paper backdrop-blur-md shadow-xs">
                    {s.liveLink.badge}
                  </span>
                )}
              </div>
              <div className="flex items-baseline justify-between gap-2 px-1">
                <span className="font-display text-2xl font-semibold text-teal">{s.no}</span>
                <span className="meta font-medium group-hover:text-teal group-hover:translate-x-0.5 transition-all">
                  View study →
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold leading-tight px-1 mt-1 group-hover:text-teal transition-colors">
                {s.title}
              </h3>
            </div>
            <p className="meta mt-3 px-1 text-xs text-muted border-t border-line/50 pt-2.5">{s.tags}</p>
          </button>
        ))}
      </div>
    </Page>
  );
}
