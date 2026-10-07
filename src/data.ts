export type Media = { src: string; alt?: string; caption?: string };
export type Block = { no: string; title: string; text?: string; bullets?: string[]; slot?: string; media?: Media };
export type Study = {
  no: string;
  title: string;
  tags: string;
  variant: "brand" | "product" | "system" | "service";
  thumbnail?: string;
  liveLink?: { url: string; label: string; badge?: string };
  meta: [string, string][];
  pages: { stages: number[]; blocks: Block[]; slot?: string; media?: Media[] }[];
};
const b = (no: string, title: string, o: Partial<Block> = {}): Block => ({ no, title, ...o });

export const studies: Study[] = [
  {
    no: "01",
    title: "Maynooth Degree Show",
    tags: "Branding / Digital Experience",
    variant: "brand",
    thumbnail: "/projects/MU_HERO.png",
    liveLink: {
      url: "https://designinnovationmu.wixsite.com/degreeshow",
      label: "Live Degree Show Website ↗",
      badge: "Group Project",
    },
    meta: [
      ["Team", "Six-person branding & graphic design team"],
      ["Role", "Digital experience, project pages, brochure & poster contributions"],
      ["Tools", "Wix, CMS Collections, Figma"],
    ],
    pages: [
      {
        stages: [0, 1],
        media: [
          { src: "/projects/MU_HERO.png", caption: "Degree Show 2026 digital landing hero experience" },
          { src: "/projects/MU_IDEA.png", caption: "Ideation & exploratory concept development" },
        ],
        blocks: [
          b("01", "Context", { text: "Maynooth Degree Show 2026 represents 37 graduating Product Design & Innovation students, showcasing individual and collective design trajectories to industry professionals and the public." }),
          b("02", "Challenge", { text: "Designing an inclusive, dynamic digital exhibition on Wix that spotlights diverse multi-disciplinary work while maintaining a cohesive visual identity across digital, print, and physical gallery touchpoints." }),
          b("03", "My Role (Group Project)", { bullets: ["Built and maintained student project profile pages on Wix", "Co-developed the digital exhibition experience and layout architecture", "Contributed directly to the exhibition brochure and primary promotional poster"] }),
        ],
      },
      {
        stages: [2, 3, 4, 7],
        media: [
          { src: "/projects/MU_SITEMAP.png", caption: "Exhibition architecture & CMS filtering structure" },
          { src: "/projects/MUVisDir.png", caption: "Visual direction, typographic hierarchy & palette" },
          { src: "/projects/MU_2.png", caption: "Project gallery pages & interactive showcase screens" },
        ],
        blocks: [
          b("04", "Information Architecture", { bullets: ["Dynamic CMS collections for automated student indexing", "Multi-tag category filtering across disciplines", "Lightbox modal previews for fast project scanning"] }),
          b("05", "Visual Direction", { text: "High-contrast editorial typography paired with generous negative space, ensuring the students' varied project aesthetics take center stage without visual conflict." }),
          b("06–10", "Outcome & Reflection", { bullets: ["Fully responsive web experience tested across mobile and desktop devices", "Streamlined project page submissions for all 37 exhibitors", "Clear cross-collaboration between branding, print collateral, and web experience teams"] }),
        ],
      },
    ],
  },
  {
    no: "02",
    title: "MKS Website",
    tags: "UX / Product / Web",
    variant: "product",
    thumbnail: "/projects/MKS_HERO.png",
    liveLink: {
      url: "https://midlandsknee.netlify.app",
      label: "Live Prototype ↗",
      badge: "Web App",
    },
    meta: [
      ["Client", "Midlands Knee Society (Charity for orthopaedic professionals & patient mobility)"],
      ["Deliverable", "End-to-end responsive web application prototype"],
      ["Tools", "React, TypeScript, Tailwind CSS, Figma"],
    ],
    pages: [
      {
        stages: [0, 1],
        media: [
          { src: "/projects/MKS_HERO.png", caption: "Midlands Knee Society homepage & public portal" },
          { src: "/projects/MKS_UST.png", caption: "User personas, journey mapping & stakeholder discovery" },
          { src: "/projects/MKS_IDEA.png", caption: "Product discovery synthesis & PRD feature mapping" },
        ],
        blocks: [
          b("01–02", "Problem + Discovery", { text: "The Midlands Knee Society required a trustworthy, unified digital hub serving three distinct user archetypes: orthopaedic clinicians seeking peer collaboration, mobility patients needing accessible medical guidance, and donors funding research." }),
          b("03–04", "Personas + User Journeys", { text: "Mapped distinct journeys for patients (direct accessibility, donation transparency) and surgeons (credential verification, event registration, clinical resources)." }),
          b("Role", "My Role", { text: "Lead UX/UI designer and frontend developer. Conducted discovery research, formulated the PRD, wireframed in Figma, and built the live responsive application with React, TypeScript, and Tailwind CSS." }),
        ],
      },
      {
        stages: [2, 3, 4, 7],
        media: [
          { src: "/projects/MKS_WIREFRAME.png", caption: "Information architecture & mid-fidelity responsive wireframes" },
          { src: "/projects/MKS_LOGIN.png", caption: "Clinician & member portal authentication" },
          { src: "/projects/MKS_ADMIN.png", caption: "Admin management dashboard & donation tracking" },
          { src: "/projects/MKS_2.png", caption: "Final responsive interface & interactive components" },
        ],
        blocks: [
          b("05–06", "Requirements + Architecture", { text: "Tri-modular system structure: public informational portal, secure member portal for clinical research, and a back-office administrative portal." }),
          b("07–09", "Wireframes → UI → Prototype", { text: "High-accessibility WCAG AA compliant interface designed in Figma with calming medical teal/blue accents, clear typography, and simplified form flows." }),
          b("10–12", "Build & Reflection", { bullets: ["Engineered with React, TypeScript, and Tailwind CSS and deployed to Netlify", "Interactive donation tracking, event calendar, and member portal workflows", "Demonstrated end-to-end ability to translate medical client requirements into a production-ready application"] }),
        ],
      },
    ],
  },
  {
    no: "03",
    title: "Smart Attendance System",
    tags: "Physical Product / IoT / Interaction",
    variant: "system",
    thumbnail: "/projects/Smart-attd_HERO.png",
    meta: [
      ["Hardware", "Arduino UNO, MFRC522 RFID reader, ESP8266 Wi-Fi, 16x2 I2C LCD, LEDs, Buzzer"],
      ["Code", "Embedded C++ / Arduino Framework"],
      ["Enclosure", "Custom engineered chassis"],
    ],
    pages: [
      {
        stages: [0, 1, 2],
        media: [
          { src: "/projects/Smart-attd_HERO.png", caption: "Smart Attendance IoT device in operation" },
          { src: "/projects/SAS_DR.png", caption: "Physical product form study & human interaction design" },
        ],
        blocks: [
          b("01–02", "Problem + System Context", { text: "Manual attendance logging in university lecture halls is disruptive, error-prone, and slow. The goal was to build an autonomous, reliable physical computing device that authenticates student smartcards within 500ms and syncs records over Wi-Fi." }),
          b("03", "System Concept", { text: "Contactless tap-in device combining multi-sensory feedback: instantaneous LCD display of student ID, dual-state status LEDs, audio buzzer feedback, and secure Wi-Fi transmission." }),
          b("Role", "My Role", { text: "Hardware prototyping, circuit schematic design, embedded C++ programming, Wi-Fi networking integration, and physical enclosure fabrication." }),
        ],
      },
      {
        stages: [3, 4, 5, 7],
        media: [
          { src: "/projects/SAS_CIRCUIT.png", caption: "Schematic wiring diagram: Arduino UNO + RFID + ESP8266" },
        ],
        blocks: [
          b("04", "System Architecture", { text: "RFID (13.56MHz SPI) reads card UID → Arduino validates payload → ESP8266 transmits timestamped log via HTTP/MQTT → Real-time audiovisual confirmation to the user." }),
          b("05–08", "Hardware & Circuit Iteration", { text: "Solved power distribution constraints between 5V Arduino components and 3.3V logic level requirements on the ESP8266 and MFRC522 modules using dedicated voltage regulators and signal isolation." }),
          b("09–11", "Testing & Reflection", { bullets: ["Stress tested card scan cycle times with sub-0.5s response latency", "Audio/visual feedback eliminated user uncertainty during peak arrival rush", "Bridges the gap between physical product industrial design and connected software systems"] }),
        ],
      },
    ],
  },
  {
    no: "04",
    title: "Be Your Own Barista",
    tags: "Service Design / UX Research",
    variant: "service",
    thumbnail: "/projects/BYOB_PROTOTYPE.png",
    liveLink: {
      url: "/projects/byob-kiosk.html",
      label: "Launch Kiosk Prototype ↗",
      badge: "Interactive Prototype",
    },
    meta: [
      ["Setting", "Campus Café, Maynooth University TSI Building"],
      ["Method", "Contextual inquiry, observational shadowing, student & barista interviews"],
      ["Deliverables", "Service blueprint, journey maps, interactive self-service kiosk prototype"],
    ],
    pages: [
      {
        stages: [0, 1],
        media: [
          { src: "/projects/BYOB_WIREFRAME.png", caption: "Contextual research synthesis, touchpoint mapping & wireframes" },
        ],
        blocks: [
          b("01", "Context & Friction", { bullets: ["Severe bottle-necking at peak 10-minute intervals between university lectures", "Single point of failure: one cashier taking both custom drink orders and handling payment", "Limited space causing physical congestion at café entrance"] }),
          b("02–04", "Research Insights", { text: "Through observational queue timing and on-site student interviews, we identified that 68% of waiting time occurred before payment was initiated, not during beverage preparation." }),
          b("Role", "My Role (Group Project)", { text: "Conducted on-site queue shadowing and user interviews; synthesized findings into service blueprints; engineered the interactive web kiosk prototype." }),
        ],
      },
      {
        stages: [2, 3, 4, 5, 7],
        media: [
          { src: "/projects/BYOB_PROTOTYPE.png", caption: "High-fidelity touch-screen self-service kiosk design" },
        ],
        blocks: [
          b("05–07", "Opportunity & Service Blueprint", { text: "De-coupled ordering from collection by creating a multi-channel service ecosystem: self-service kiosks, express pick-up bays, and pre-packaged coffee stations." }),
          b("08–09", "Self-Service Kiosk Design", { text: "Designed a high-visibility, large-touch-target kiosk interface minimizing decision fatigue. Features large card previews, rapid quantity adjustments, and immediate subtotal feedback." }),
          b("10–13", "Validation & Reflection", { bullets: ["Simulated customer throughput showed an estimated 45% reduction in perceived wait times", "Interactive HTML/CSS/JS prototype validated touch ergonomics and rapid ordering flows", "Demonstrated that service design solves systemic spatial challenges, not just UI screens"] }),
        ],
      },
    ],
  },
  {
    no: "05",
    title: "ROOTED",
    tags: "Brand Identity / Packaging / Art Direction",
    variant: "brand",
    thumbnail: "/projects/rooted_poster.jpeg",
    liveLink: {
      url: "/projects/Rooted_moodboard.pdf",
      label: "View Brand Moodboard PDF ↗",
      badge: "Concept Brand",
    },
    meta: [
      ["Concept", "Slow-living, mindful lifestyle brand for everyday rituals"],
      ["Target Audience", "Young urban adults (ages 18–30) experiencing burnout & anxiety"],
      ["Deliverables", "Brand identity, packaging design (tea tin, candle), marketing collateral"],
    ],
    pages: [
      {
        stages: [0, 1, 2],
        media: [
          { src: "/projects/rooted_poster.jpeg", caption: "Brand philosophy poster: 'STOP RUSHING. TAKE A PAUSE. FEEL GROUNDED.'" },
          { src: "/projects/rooted_idea.jpeg", caption: "Brand discovery, moodboard synthesis & concept sketches" },
          { src: "/projects/rootedlogo.svg", caption: "Rooted brandmark geometry & typographic identity" },
        ],
        blocks: [
          b("01", "Brand Philosophy", {
            text: "ROOTED is a slow-living, mindful lifestyle brand that helps young urban adults reconnect with their inner self through everyday rituals, journalling, calming tea, scent, and intentional pauses.",
          }),
          b("02", "Target Audience & Insight", {
            text: "Aged 18–30. Students and early-career professionals navigating constant digital notifications, chronic hustle culture, and everyday anxiety who crave tangible permission to slow down.",
            bullets: [
              "Calm & honest — real and grounded, not fake toxic-positivity",
              "Natural & minimal — restrained, earthy aesthetic over loud commercial flash",
              "Warm & caring — designed to feel gentle and restorative like a warm hug",
            ],
          }),
          b("03", "My Role", {
            text: "Complete end-to-end brand creation: brand strategy, naming, visual identity (logo & color palette), physical packaging design (tea tin and scented candle), and marketing collateral (art posters, tote bags, thank-you cards, Instagram direction).",
          }),
        ],
      },
      {
        stages: [3, 4, 5, 6],
        media: [
          { src: "/projects/rooted_temock.jpeg", caption: "Custom tea tin packaging with sensory pause prompts" },
          { src: "/projects/rooted_candlemock.jpeg", caption: "Aromatherapy candle packaging & grounding rituals" },
          { src: "/projects/rooted_tote.jpeg", caption: "Eco-cotton lifestyle tote & everyday ritual touchpoints" },
        ],
        blocks: [
          b("04", "Packaging Design & Sensory Prompts", {
            text: "Packaging was designed not just as a container, but as an interactive sensory ritual. Embedded thoughtful 'Pause Prompts' into the user experience:",
            bullets: [
              "Candle packaging: 'Light this when you need a moment of calm'",
              "Tea tin label: 'While your tea steeps, close your eyes. What sounds do you notice?'",
              "Tactile finishes: Textured paper stocks, earthy neutral tones, and honest material authenticity",
            ],
          }),
          b("05", "Marketing Collateral & Touchpoints", {
            bullets: [
              "Customer unboxing: Mindful thank-you cards featuring guided breathing exercises",
              "Social & digital presence: Editorial Instagram carousels focusing on micro-pauses over hard selling",
              "Lifestyle merchandise: Organic tote bags and collectible brand posters reinforcing mindful grounding",
            ],
          }),
          b("06", "Reflection & Impact", {
            text: "ROOTED demonstrates how thoughtful graphic and packaging design can deliver tangible psychological relief, translating abstract mental wellness ideals into tactile, comforting everyday moments.",
          }),
        ],
      },
    ],
  },
];


