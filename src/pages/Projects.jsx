import { Folder } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";
import portfolioData from "@/data/portfolio.json";

export default function ProjectsPage() {
  const { projects } = portfolioData;

  // If you wanted to fetch all projects vs just featured, you would do it here. 
  // For now we use the same `projects` list from JSON to populate a grid.
  return (
    <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 py-12 md:py-20 animate-in fade-in duration-500">
      <div className="flex items-center gap-3 mb-10 border-b pb-6 border-border">
        <Folder className="w-8 h-8 text-emerald-500" />
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Projects
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </main>
  );
}
