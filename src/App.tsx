import { useState } from "react";
import { studies } from "./data";
import CaseStudyModal from "./components/CaseStudyModal";
import ProjectGrid from "./components/ProjectGrid";
import Sakura from "./components/Sakura";
import Playground from "./components/Playground";
import { About, Approach, Closing, Cover } from "./components/Front";

export default function App() {
  const [openNo, setOpenNo] = useState<string | null>(null);
  const openStudy = studies.find((s) => s.no === openNo) ?? null;

  return (
    <main>
      <Sakura />
      <Cover />
      <About />
      <Approach />
      <ProjectGrid studies={studies} onOpen={setOpenNo} />
      <Playground />
      <Closing />

      {openStudy && <CaseStudyModal study={openStudy} onClose={() => setOpenNo(null)} />}
    </main>
  );
}
