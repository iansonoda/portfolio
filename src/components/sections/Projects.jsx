import { Link } from "react-router-dom";
import ProjectCard from "@/components/ui/ProjectCard";
import { Star } from "lucide-react";

export default function Projects({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="w-full py-8 md:py-12 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6 space-y-8">
        {/* Heading */}
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <h2 className="text-4xl font-bold tracking-tight">Featured Projects</h2>
          </div>
          <Link
            to="/projects"
            className="text-sm font-medium text-primary hover:opacity-80 transition-all group flex items-center"
          >
            <span className="flex items-center gap-1 border-b border-primary pb-0.5">
              view all
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
