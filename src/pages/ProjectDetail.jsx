import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Github, ExternalLink } from "lucide-react";
import { TechBadge } from "@/components/ui/ProjectCard";
import portfolioData from "@/data/portfolio.json";

export default function ProjectDetail() {
  const { slug } = useParams();
  
  // Find project
  const project = portfolioData.projects.find(
    (p) => p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug
  );

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <main className="flex-1 w-full max-w-[800px] mx-auto px-6 py-12 md:py-20 animate-in fade-in duration-500">
      <div className="mb-8">
        <Link
          to="/projects"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>
      </div>

      {/* Large Image Card */}
      <div className="w-full max-w-2xl mx-auto rounded-2xl border border-border overflow-hidden p-3 md:p-5 bg-muted/40 mb-12 shadow-sm">
        <div className="rounded-xl overflow-hidden aspect-video bg-muted relative border border-border/50">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground bg-zinc-900 p-8 md:p-12 relative overflow-hidden">
              {/* Fallback pattern matching the cards */}
              <div className="absolute top-4 left-4 flex gap-2 z-10">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="w-full text-left mt-8 md:mt-12">
                <p className="text-white font-mono md:text-xl leading-tight font-bold">
                  {project.title.toLowerCase()} / <span className="text-green-400">repo</span>
                </p>
                <p className="text-zinc-400 dark:text-zinc-300 md:text-sm font-mono mt-4">
                  {project.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <article className="max-w-[700px] mx-auto">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
          {project.title}
        </h1>

        {/* Meta Row: Date & Links */}
        <div className="flex flex-wrap items-center gap-6 mb-6 text-muted-foreground">
          {project.date && (
            <div className="flex items-center gap-2 font-mono text-sm tracking-tight text-slate-500 dark:text-slate-300">
              <Calendar className="w-4 h-4" />
              <span>{project.date}</span>
            </div>
          )}
          
          <div className="flex items-center gap-4">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-1.5"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-1.5"
                title="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Tags Row */}
        {project.techStack?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {project.techStack.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        )}

        <hr className="border-t border-border mb-10" />

        {/* Content Section */}
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-primary mb-6">
            {project.title}
          </h2>
          <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
            {project.content || project.description}
          </div>
        </div>
      </article>
    </main>
  );
}
