import { Page, Ph, STAGES } from "./Page";
import type { Study } from "../data";

export const Cover = () => (
  <Page>
    <div className="flex min-h-[75vh] flex-col justify-between py-6">
      <div className="flex items-center justify-between">
        <span className="glass-pill rounded-full px-4 py-1.5 font-mono text-xs text-muted shadow-xs">
          Portfolio 2026 · Product Design & Innovation
        </span>
        <span className="font-mono text-xs text-teal font-medium">Maynooth University</span>
      </div>

      <div className="my-auto py-12">
        <p className="font-mono text-xs uppercase tracking-widest text-teal mb-3">Product Designer & Creative Technologist</p>
        <h1 className="display tracking-tight">
          TEJAL<br />SRIVASTAVA
        </h1>
      </div>

      <div className="glass-panel flex flex-wrap items-center justify-between gap-4 rounded-2xl p-6 shadow-sm">
        <div>
          <p className="text-xl font-medium tracking-tight">Designing ideas into tangible experiences.</p>
          <p className="text-sm text-teal font-medium mt-0.5">People × Products × Technology</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="mailto:tejalsriva@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl border border-ink bg-ink px-4 py-2 text-sm font-medium text-paper transition-all hover:bg-teal hover:border-teal shadow-xs hover:shadow-md"
          >
            <span>Get in touch</span>
            <span>→</span>
          </a>
          <a
            href="https://www.linkedin.com/in/tejal-srivastava-272899298/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-white/70 px-4 py-2 text-sm font-medium text-ink transition-all hover:border-teal hover:text-teal shadow-xs"
          >
            <span>LinkedIn</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  </Page>
);

export const About = () => (
  <Page>
    <div className="flex flex-col gap-10">
      <div>
        <span className="glass-pill rounded-full px-3.5 py-1 font-mono text-xs text-teal">01 / Profile</span>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_280px] items-start">
          <h2 className="text-3xl font-semibold leading-[1.12] md:text-5xl lg:text-[3.25rem] tracking-tight">
            A Product Design student exploring the space between people, products, and technology.
          </h2>
          <div className="flex flex-col items-center sm:items-start lg:items-end">
            <div className="group relative aspect-[4/5] w-52 sm:w-60 overflow-hidden rounded-2xl border border-line/80 bg-white/60 p-2 shadow-md backdrop-blur-md transition-all hover:border-teal/60 hover:shadow-lg">
              <img
                src="/projects/MYPICTURE.png"
                alt="Tejal Srivastava"
                className="h-full w-full rounded-xl object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute bottom-4 left-4 rounded-lg bg-ink/85 px-2.5 py-1 font-mono text-[11px] text-paper backdrop-blur-md">
                Tejal Srivastava
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Study */}
        <div className="glass-panel flex flex-col justify-between rounded-2xl p-5 transition-all hover:border-teal/50 hover:shadow-md">
          <div>
            <h3 className="meta text-teal mb-3">Study</h3>
            <ul className="space-y-1.5 text-sm font-medium">
              <li className="text-base font-semibold">Maynooth University</li>
              <li className="text-ink/80 text-xs">BSc Product Design & Innovation</li>
              <li className="text-muted font-mono text-xs">2024–2028</li>
              <li className="text-muted text-xs">Ireland</li>
            </ul>
          </div>
          <div className="mt-6 border-t border-line/70 pt-4">
            <h4 className="meta text-teal mb-2">Languages</h4>
            <ul className="space-y-1 text-xs text-ink/80">
              <li className="flex justify-between"><span>English</span><span className="font-mono text-teal">Fluent</span></li>
              <li className="flex justify-between"><span>Hindi</span><span className="font-mono text-teal">Fluent</span></li>
              <li className="flex justify-between"><span>Korean</span><span className="font-mono text-muted">Elementary</span></li>
              <li className="flex justify-between"><span>Mandarin</span><span className="font-mono text-muted">Learning</span></li>
            </ul>
          </div>
        </div>

        {/* Interests */}
        <div className="glass-panel flex flex-col rounded-2xl p-5 transition-all hover:border-teal/50 hover:shadow-md">
          <h3 className="meta text-teal mb-3">Interests</h3>
          <ul className="space-y-1.5 text-sm text-ink/85">
            {[
              "Product Design",
              "UX/UI & Interaction",
              "Service Design",
              "User Research",
              "Web & Branding",
              "Prototyping",
              "Emerging Technology",
              "3D Modelling",
              "Responsive Design",
              "Information Architecture",
              "Visual Design",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal/60" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="glass-panel flex flex-col rounded-2xl p-5 transition-all hover:border-teal/50 hover:shadow-md">
          <h3 className="meta text-teal mb-3">Tools</h3>
          <div className="flex flex-wrap gap-1.5">
            {[
              "Figma",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Arduino / C++",
              "Wix",
              "Adobe Illustrator",
              "Adobe InDesign",
              "Adobe Photoshop",
              "Blender",
              "SolidWorks",
              "Canva",
            ].map((tool) => (
              <span key={tool} className="rounded-lg border border-line/80 bg-white/70 px-2.5 py-1 text-xs font-medium text-ink/85 shadow-xs">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="glass-panel flex flex-col rounded-2xl p-5 transition-all hover:border-teal/50 hover:shadow-md">
          <h3 className="meta text-teal mb-3">Certifications</h3>
          <ul className="space-y-3.5 text-xs text-ink/85">
            <li className="border-b border-line/60 pb-2.5">
              <span className="font-semibold block text-xs leading-snug">Certificate of SolidWorks Design Associate (CSWA)</span>
              <span className="text-muted font-mono text-[11px]">Dassault Systèmes</span>
            </li>
            <li className="border-b border-line/60 pb-2.5">
              <span className="font-semibold block text-xs leading-snug">User Experience Design Fundamentals</span>
              <span className="text-muted font-mono text-[11px]">IBM SkillsBuild</span>
            </li>
            <li className="border-b border-line/60 pb-2.5">
              <span className="font-semibold block text-xs leading-snug">Digital Marketing</span>
              <span className="text-muted font-mono text-[11px]">HubSpot Academy</span>
            </li>
            <li>
              <span className="font-semibold block text-xs leading-snug">Essential Skills in Adobe Photoshop</span>
              <span className="text-muted font-mono text-[11px]">Adobe Systems</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Page>
);

export const Approach = () => {
  const steps = ["Understand", "Explore", "Define", "Iterate", "Prototype", "Test", "Refine"];
  return (
    <Page>
      <div>
        <span className="glass-pill rounded-full px-3.5 py-1 font-mono text-xs text-teal">02 / Process</span>
        <h2 className="mt-3 max-w-[22ch] text-3xl font-semibold md:text-5xl tracking-tight">From ambiguous problems to tangible experiences.</h2>
      </div>
      <div className="glass-panel rounded-2xl p-6 shadow-xs">
        <div className="flex flex-wrap items-center gap-3">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-3">
              <div className="group flex items-center gap-2 rounded-xl border border-line bg-white/80 px-4 py-2 shadow-xs transition-all hover:border-teal hover:bg-teal hover:text-paper">
                <span className="font-mono text-xs text-teal group-hover:text-paper">{`0${i + 1}`}</span>
                <span className="font-display text-lg font-semibold md:text-xl">{s}</span>
              </div>
              {i < steps.length - 1 && <span className="text-teal font-mono text-lg">→</span>}
            </div>
          ))}
        </div>
        <p className="meta mt-4 text-xs text-muted">A continuous, grounded design cycle bridging user research, physical ergonomics, and software engineering.</p>
      </div>
    </Page>
  );
};

export const Closing = () => (
  <Page dark className="rounded-t-3xl mt-12">
    <div className="glass-panel-dark flex flex-col justify-between rounded-3xl p-8 md:p-12 shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-paper/15 pb-8">
        <div>
          <span className="inline-block rounded-full border border-teal/40 bg-teal/20 px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#98d4d0]">
            Available for Internships & Projects
          </span>
          <h2 className="display mt-4 tracking-tight">Let’s connect & work together.</h2>
        </div>
      </div>

      <div className="grid gap-8 py-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-2">
          <p className="font-display text-2xl font-semibold text-paper">Tejal Srivastava</p>
          <p className="text-sm text-[#7fb8b3]">BSc Product Design & Innovation · Maynooth University</p>
          <p className="mt-2 text-xs leading-relaxed text-paper/70 max-w-[34ch]">
            Passionate about crafting thoughtful product experiences, physical computing systems, and human-centered services.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-mono text-xs uppercase tracking-wider text-[#7fb8b3]">Direct Contact</h3>
          <a
            href="mailto:tejalsriva@gmail.com"
            className="group flex items-center justify-between rounded-xl border border-paper/20 bg-paper/5 px-4 py-3 transition-all hover:border-[#7fb8b3] hover:bg-paper/10"
          >
            <div>
              <span className="block font-mono text-[10px] text-paper/60 uppercase">Email</span>
              <span className="text-sm font-medium text-paper">tejalsriva@gmail.com</span>
            </div>
            <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="https://www.linkedin.com/in/tejal-srivastava-272899298/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl border border-paper/20 bg-paper/5 px-4 py-3 transition-all hover:border-[#7fb8b3] hover:bg-paper/10"
          >
            <div>
              <span className="block font-mono text-[10px] text-paper/60 uppercase">LinkedIn Profile</span>
              <span className="text-sm font-medium text-paper">tejal-srivastava-272899298</span>
            </div>
            <span className="text-lg transition-transform group-hover:translate-x-1">↗</span>
          </a>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-paper/15 bg-paper/5 p-6 backdrop-blur-md">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#7fb8b3] mb-2">Location & Availability</h3>
            <p className="text-sm text-paper font-medium">Maynooth / Dublin, Ireland</p>
            <p className="mt-1 text-xs text-paper/70">Open to design internships, research fellowships, and product collaborations.</p>
          </div>
          <div className="mt-6 pt-4 border-t border-paper/10 flex items-center justify-between text-xs text-paper/60 font-mono">
            <span>© 2026 Tejal Srivastava</span>
            <span className="text-sakura">● Made with craft</span>
          </div>
        </div>
      </div>
    </div>
  </Page>
);
