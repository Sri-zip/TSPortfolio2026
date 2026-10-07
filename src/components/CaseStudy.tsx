import { Page, Ph, Stages } from "./Page";
import type { Block, Study } from "../data";

/** One layout language per case study, one shared system. */
const L = {
  brand:   { wrap: "md:grid-cols-3", block: "flex flex-col gap-3" },
  product: { wrap: "md:grid-cols-2", block: "flex flex-col gap-3" },
  system:  { wrap: "grid-cols-1",    block: "grid gap-4 border-t border-line pt-4 md:grid-cols-[1fr_2fr]" },
  service: { wrap: "md:grid-cols-2", block: "flex flex-col gap-3" },
} as const;

function BlockView({ b, cls }: { b: Block; cls: string }) {
  return (
    <article className={cls}>
      <div>
        <span className="meta text-teal">{b.no}</span>
        <h3 className="text-xl font-semibold">{b.title}</h3>
        {b.text && <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-ink/75">{b.text}</p>}
        {b.bullets && (
          <ul className="mt-2 space-y-1 text-sm text-ink/75">
            {b.bullets.map((x) => <li key={x} className="border-l border-teal pl-2">{x}</li>)}
          </ul>
        )}
      </div>
      {b.slot && <Ph label={b.slot} />}
    </article>
  );
}

export function CaseStudy({ s }: { s: Study }) {
  const v = L[s.variant];
  return (
    <>
      {s.pages.map((p, i) => (
        <Page key={i}>
          <header className="flex justify-between gap-4 meta">
            <span>{s.no} / {s.title}</span><span className="text-right">{s.tags}</span>
          </header>
          {i === 0 && (
            <div className="grid items-end gap-6 md:grid-cols-[2fr_1fr]">
              <div>
                <span className="font-display text-6xl font-semibold text-teal">{s.no}</span>
                <h2 className="text-4xl font-semibold leading-none md:text-6xl">{s.title}</h2>
              </div>
              <dl className="space-y-1 text-sm">
                {s.meta.map(([k, val]) => (
                  <div key={k} className="grid grid-cols-[5rem_1fr] gap-2 border-t border-line pt-1">
                    <dt className="meta">{k}</dt><dd>{val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
          <div className={`grid content-start gap-6 ${v.wrap}`}>
            {p.blocks.map((b, j) => (
              <BlockView key={b.no} b={b} cls={`${v.block} ${s.variant === "service" && j === 0 ? "md:col-span-2" : ""}`} />
            ))}
          </div>
          {p.slot && <div className="flex min-h-40 flex-1 [&>*]:flex-1"><Ph label={p.slot} /></div>}
          <Stages active={p.stages} />
        </Page>
      ))}
    </>
  );
}
