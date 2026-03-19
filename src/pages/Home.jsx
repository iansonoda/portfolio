import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";

import portfolioData from "@/data/portfolio.json";

const FEATURED_PROJECT_TITLES = ["Portfolio", "GymAI", "Vocalize AI"];

export default function Home() {
  const { personal, skills, projects } = portfolioData;
  const featuredProjects = FEATURED_PROJECT_TITLES
    .map((title) => projects.find((project) => project.title === title))
    .filter(Boolean);

  return (
    <main className="flex-1 w-full flex flex-col">
      <Hero personal={personal} />
      <Skills skills={skills} />
      <Projects projects={featuredProjects} />
    </main>
  );
}
