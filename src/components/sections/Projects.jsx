import { useRef, useLayoutEffect, useCallback } from "react";

const TECH_COLORS = {
  // Frontend — blue
  "React":       "bg-blue-100 text-blue-700",
  "Next.js":     "bg-blue-100 text-blue-700",
  "NextJS":      "bg-blue-100 text-blue-700",
  "Vue":         "bg-blue-100 text-blue-700",
  "Tailwind CSS":"bg-cyan-100 text-cyan-700",
  "Tailwind":    "bg-cyan-100 text-cyan-700",
  "HTML":        "bg-orange-100 text-orange-600",
  "CSS":         "bg-blue-100 text-blue-700",

  // Languages — violet
  "TypeScript":  "bg-violet-100 text-violet-700",
  "JavaScript":  "bg-yellow-100 text-yellow-700",
  "Python":      "bg-yellow-100 text-yellow-700",

  // Backend — emerald
  "Node.js":     "bg-emerald-100 text-emerald-700",
  "NodeJS":      "bg-emerald-100 text-emerald-700",
  "Express":     "bg-emerald-100 text-emerald-700",
  "Django":      "bg-emerald-100 text-emerald-700",
  "FastAPI":     "bg-emerald-100 text-emerald-700",

  // Database — amber
  "MongoDB":     "bg-amber-100 text-amber-700",
  "PostgreSQL":  "bg-amber-100 text-amber-700",
  "MySQL":       "bg-amber-100 text-amber-700",
  "Redis":       "bg-amber-100 text-amber-700",
  "SQLite":      "bg-amber-100 text-amber-700",

  // ORM / BaaS — orange
  "Prisma":      "bg-orange-100 text-orange-700",
  "Supabase":    "bg-orange-100 text-orange-700",
  "Firebase":    "bg-orange-100 text-orange-700",

  // APIs / Infra — rose
  "REST":        "bg-rose-100 text-rose-700",
  "GraphQL":     "bg-rose-100 text-rose-700",
  "Docker":      "bg-rose-100 text-rose-700",
  "AWS":         "bg-rose-100 text-rose-700",

  // Default — zinc
  default:       "bg-zinc-100 text-zinc-600",
};

function TechBadge({ tech }) {
  const colorClass = TECH_COLORS[tech] ?? TECH_COLORS.default;
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${colorClass}`}>
      {tech}
    </span>
  );
}

function TechBadgeRow({ techStack }) {
  const containerRef = useRef(null);

  const measure = useCallback(() => {
    const container = containerRef.current;
    if (!container || container.offsetWidth === 0) return;
    const containerRight = container.getBoundingClientRect().right;
    const children = Array.from(container.children);
    // Reset all to visible first
    children.forEach((c) => (c.style.display = ""));
    let overflowed = false;
    children.forEach((child) => {
      if (overflowed || child.getBoundingClientRect().right > containerRight) {
        child.style.display = "none";
        overflowed = true;
      }
    });
  }, []);

  useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [techStack, measure]);

  return (
    <div ref={containerRef} className="flex flex-nowrap gap-1.5 pt-2 overflow-hidden">
      {techStack.map((tech) => (
        <TechBadge key={tech} tech={tech} />
      ))}
    </div>
  );
}


export default function Projects({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="w-full py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 space-y-12">
        {/* Heading */}
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Selected Projects</h2>
          <p className="text-muted-foreground max-w-[500px] mx-auto">
            A showcase of my recent work and side projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              {/* Image bubble — top portion */}
              <div className="p-4 bg-muted/40">
                <div className="rounded-xl overflow-hidden aspect-video bg-muted">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                      No preview
                    </div>
                  )}
                </div>
              </div>

              {/* Content — grows to fill remaining space */}
              <div className="flex flex-col flex-1 px-5 py-4 gap-2">
                {/* Title */}
                <h3 className="font-semibold text-foreground leading-tight text-xl">
                  {project.title}
                </h3>

                {/* Description — flex-1 so it fills space and pushes tags to the bottom */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                  {project.description}
                </p>

                {/* Tech badges — always pinned to the bottom */}
                {project.techStack?.length > 0 && (
                  <TechBadgeRow techStack={project.techStack} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
