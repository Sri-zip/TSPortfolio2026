const rnd = (i: number, n: number) => { const x = Math.sin(i * 97.1 + n * 13.7) * 10000; return x - Math.floor(x); };
const petals = Array.from({ length: 14 }, (_, i) => ({
  left: rnd(i, 1) * 100, size: 10 + rnd(i, 2) * 12, dur: 14 + rnd(i, 3) * 16, delay: -rnd(i, 4) * 30,
  dx: (rnd(i, 5) - 0.5) * 160, op: 0.35 + rnd(i, 6) * 0.25, blur: rnd(i, 7) < 0.3 ? 1 : 0, y: rnd(i, 8) * 90,
}));

/** Decorative only. Hidden in print; static and reduced under prefers-reduced-motion. */
export default function Sakura() {
  return (
    <div className="sakura" aria-hidden="true">
      {petals.map((p, i) => (
        <svg key={i} className={`petal ${i >= 7 ? "max-sm:hidden" : ""} ${i >= 3 ? "extra" : ""}`} viewBox="0 0 20 20" width={p.size} height={p.size}
          style={{ left: `${p.left}%`, opacity: p.op, filter: p.blur ? "blur(1px)" : undefined, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s`,
            ["--dx" as string]: `${p.dx}px`, ["--y" as string]: `${p.y}vh` }}>
          <path d="M10 3 C12 0 17 4 14 12 C12.5 16 10 18 10 18 C10 18 7.5 16 6 12 C3 4 8 0 10 3Z" fill="var(--color-sakura)" />
        </svg>
      ))}
    </div>
  );
}
