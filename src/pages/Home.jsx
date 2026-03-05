import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";

import portfolioData from "@/data/portfolio.json";

export default function Home() {
  const { personal, skills, projects } = portfolioData;

  return (
    <main className="flex-1 w-full flex flex-col">
      <Hero personal={personal} />
      <Skills skills={skills} />
      <Projects projects={projects} />
    </main>
  );
}
