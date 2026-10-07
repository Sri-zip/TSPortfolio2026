import { useState } from "react";
import { Page } from "./Page";

type PlaygroundCategory = "sketches" | "solidworks" | "digital" | "posters" | "videos";

interface PlaygroundItem {
  id: string;
  title: string;
  category: PlaygroundCategory;
  src: string;
  caption: string;
  isVideo?: boolean;
}

const ITEMS: PlaygroundItem[] = [
  // Sketches (DR1, DR2, DR3, DR4)
  {
    id: "dr1",
    title: "Form & Concept Exploration I",
    category: "sketches",
    src: "/projects/DR1.png",
    caption: "Concept iteration & exploratory visual ideation",
  },
  {
    id: "dr2",
    title: "Ideation & Form Study II",
    category: "sketches",
    src: "/projects/DR2.png",
    caption: "Product geometry, ergonomics & structural sketching",
  },
  {
    id: "dr3",
    title: "Orthographic & Material Study",
    category: "sketches",
    src: "/projects/DR3.jpeg",
    caption: "Hand-rendered visual detailing & proportions",
  },
  {
    id: "dr4",
    title: "Material and Form Study",
    category: "sketches",
    src: "/projects/DR4.png",
    caption: "Form exploration, material considerations & design variations",
  },

  // SolidWorks (SLD1, SLD2)
  {
    id: "sld1",
    title: "SolidWorks Technical Drawing I",
    category: "solidworks",
    src: "/projects/SLD1.png",
    caption: "Technical drawing of a conceptual phone stand with all dimensions and materials specified",
  },
  {
    id: "sld2",
    title: "SolidWorks Technical Drawing II",
    category: "solidworks",
    src: "/projects/SLD2.png",
    caption: "Technical drawing of a well-measured Realme 9 phone, comprehensively labeled with precise dimensions",
  },

  // Digital Media (LOGO_1, LOGO_2, LOGO_3, MYLOGO, LOGO_4)
  {
    id: "mylogo",
    title: "Personal Brand Identity",
    category: "digital",
    src: "/projects/MYLOGO.jpg",
    caption: "Monogram design, geometry & identity exploration",
  },
  {
    id: "logo1",
    title: "Brand Graphic & Identity I",
    category: "digital",
    src: "/projects/LOGO_1.png",
    caption: "Vector logo construction & visual identity system",
  },
  {
    id: "logo2",
    title: "Brand Graphic & Identity II",
    category: "digital",
    src: "/projects/LOGO_2.png",
    caption: "Iconography, typography & symbol design",
  },
  {
    id: "logo3",
    title: "Brand Graphic & Identity III",
    category: "digital",
    src: "/projects/LOGO_3.png",
    caption: "Digital mark & badge experimentation",
  },
  {
    id: "logo4",
    title: "Vector Emblem & Digital Art",
    category: "digital",
    src: "/projects/LOGO_4.svg",
    caption: "Scalable vector identity & digital styling",
  },

  // Posters (Albumcover, poster_1, poster_2, TEJAL_Poster2025 slide 5 & 6)
  {
    id: "albumcover",
    title: "Album Cover Art",
    category: "posters",
    src: "/projects/Albumcover.png",
    caption: "Conceptual musical album artwork & visual styling",
  },
  {
    id: "poster1",
    title: "Poster Design I",
    category: "posters",
    src: "/projects/poster_1.png",
    caption: "Graphic layout, typographic hierarchy & composition",
  },
  {
    id: "poster2",
    title: "Poster Design II",
    category: "posters",
    src: "/projects/poster_2.png",
    caption: "Visual storytelling & expressive poster design",
  },
  {
    id: "poster2025-slide5",
    title: "Poster Series _1",
    category: "posters",
    src: "/projects/TEJAL_Poster2025_slide5.png",
    caption: "Typographic exhibition & editorial layout poster (Series 01)",
  },
  {
    id: "poster2025-slide6",
    title: "Poster Series _2",
    category: "posters",
    src: "/projects/TEJAL_Poster2025_slide6.png",
    caption: "Visual communication & color theory exploration (Series 02)",
  },

  // Videos (Nirchal_promo1.mp4, Nirchal_promo2.mp4)
  {
    id: "video1",
    title: "Nirchal Promo Reel I",
    category: "videos",
    src: "/projects/nirchal_promo1.mp4",
    caption: "Motion design, promotional video editing & pacing",
    isVideo: true,
  },
  {
    id: "video2",
    title: "Nirchal Promo Reel II",
    category: "videos",
    src: "/projects/Nirchal_promo2.mp4",
    caption: "Dynamic motion identity & promotional narrative reel",
    isVideo: true,
  },
];

const CATEGORIES: { key: PlaygroundCategory; label: string; count: number }[] = [
  { key: "sketches", label: "Sketches", count: 4 },
  { key: "solidworks", label: "SolidWorks", count: 2 },
  { key: "digital", label: "Digital Media", count: 5 },
  { key: "posters", label: "Posters", count: 5 },
  { key: "videos", label: "Videos", count: 2 },
];

export default function Playground() {
  const [activeTab, setActiveTab] = useState<PlaygroundCategory>("sketches");
  const [activeItem, setActiveItem] = useState<PlaygroundItem | null>(null);

  const filteredItems = ITEMS.filter((item) => item.category === activeTab);

  return (
    <Page>
      <div>
        <span className="glass-pill rounded-full px-3.5 py-1 font-mono text-xs text-teal">04 / Playground</span>
        <h2 className="mt-3 text-3xl font-semibold md:text-5xl tracking-tight">My Playground</h2>
        <p className="mt-2 max-w-[55ch] text-sm text-ink/70">
          Experiments in sketching, 3D CAD modeling, digital branding, poster typography, and motion video reels.
        </p>
      </div>

      {/* Segmented Filter Control */}
      <div className="glass-panel flex flex-wrap items-center gap-2 rounded-2xl p-2 shadow-xs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveTab(cat.key)}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-mono transition-all ${
              activeTab === cat.key
                ? "bg-teal text-paper font-medium shadow-xs"
                : "text-ink/80 hover:bg-white/60 hover:text-ink"
            }`}
          >
            <span>{cat.label}</span>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] ${
                activeTab === cat.key ? "bg-paper/20 text-paper" : "bg-ink/5 text-muted"
              }`}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Grid of Artifacts */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group glass-panel flex flex-col text-left rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-teal/60 hover:shadow-xl focus-visible:border-teal"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-line/60 bg-paper/40 p-2 flex items-center justify-center">
              {item.isVideo ? (
                <div className="relative h-full w-full flex items-center justify-center bg-ink/90 rounded-lg overflow-hidden">
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-paper/90 text-ink shadow-lg transition-transform group-hover:scale-110">
                      ▶
                    </span>
                  </div>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              )}
            </div>
            <div className="mt-3 flex flex-col gap-1 px-1">
              <h3 className="font-display text-base font-semibold group-hover:text-teal transition-colors">
                {item.title}
              </h3>
              <p className="font-mono text-xs text-muted line-clamp-2">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox / Video Modal */}
      {activeItem && (
        <div
          className="modal-backdrop no-print z-50"
          onMouseDown={(e) => e.target === e.currentTarget && setActiveItem(null)}
        >
          <div className="modal-panel max-w-4xl max-h-[92vh]">
            <header className="flex items-center justify-between border-b border-line px-6 py-4">
              <div>
                <span className="meta text-teal capitalize">{activeItem.category}</span>
                <h3 className="text-xl font-semibold">{activeItem.title}</h3>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                aria-label="Close preview"
                className="rounded-xl border border-line bg-white/70 px-3.5 py-1.5 font-mono text-xs hover:bg-ink hover:text-paper hover:border-ink transition-colors shadow-xs"
              >
                Close ✕
              </button>
            </header>
            <div className="flex-1 overflow-auto p-6 bg-paper/40 flex flex-col items-center justify-center">
              {activeItem.isVideo ? (
                <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-line/60 bg-black shadow-lg">
                  <video
                    src={activeItem.src}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-auto max-h-[65vh]"
                  />
                </div>
              ) : (
                <img
                  src={activeItem.src}
                  alt={activeItem.title}
                  className="max-h-[65vh] w-auto max-w-full rounded-xl object-contain border border-line/60 bg-white p-2 shadow-sm"
                />
              )}
              <p className="mt-4 text-center font-mono text-xs text-muted max-w-xl">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </Page>
  );
}
