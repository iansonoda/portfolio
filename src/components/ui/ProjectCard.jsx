import { useRef, useLayoutEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { slugifyProjectTitle } from "@/lib/portfolio";

const TECH_COLORS = {
  // Frontend — blue
  "React":       "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Next.js":     "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "NextJS":      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Vue":         "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "React Router 7": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Tailwind CSS":"bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
  "Tailwind":    "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
  "Tailwind CSS v4": "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
  "HTML":        "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
  "CSS":         "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "radix-ui":    "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  "Radix UI":    "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  "shadcn/ui":   "bg-zinc-100 text-zinc-700 dark:bg-zinc-900/30 dark:text-zinc-400",
  "Vite":        "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  "Electron":    "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300",

  // Languages — violet
  "TypeScript":  "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  "JavaScript":  "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  "Python":      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "Java":        "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  "SQL":         "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",

  // Backend — emerald
  "Node.js":     "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "NodeJS":      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "Express":     "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "Django":      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "FastAPI":     "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "Spring Boot": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "JUnit":       "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",

  // Database / Cloud — amber/sky
  "MongoDB":     "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  "PostgreSQL":  "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  "MySQL":       "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  "Appwrite":    "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
  "Supabase":    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "Prisma":      "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300",
  "Firebase":    "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  "AWS":         "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  "Puter.js":    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "OpenRouter":  "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-400",
  "Hugging Face":"bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",

  // Tools — zinc
  "Git":         "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400",
  "Docker":      "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",
  "Zustand":     "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  "TMDB API":    "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",

  // ML / Data Science — indigo
  "PyTorch":     "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
  "Whisper Large v3": "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
  "Qwen 2.5":    "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
  "NumPy":       "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Matplotlib":  "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Pandas":      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",

  "pdfjs-dist":   "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  "react-use":    "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",
  "tw-animate-css": "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
  "Hooks":        "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Context":      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "react-router-dom": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Lucide React": "bg-zinc-100 text-zinc-700 dark:bg-zinc-900/30 dark:text-zinc-400",

  // Default — zinc
  default:       "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
};

export function TechBadge({ tech }) {
  const colorClass = TECH_COLORS[tech] ?? TECH_COLORS.default;
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium whitespace-nowrap ${colorClass}`}>
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

export default function ProjectCard({ project }) {
  const slug = slugifyProjectTitle(project.title);
  
  return (
    <Link
      to={`/projects/${slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
    >
      {/* Image bubble — top portion */}
      <div className="p-4 bg-muted/40">
        <div className="rounded-xl overflow-hidden aspect-video bg-muted relative">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground bg-zinc-900 p-6 relative overflow-hidden">
                {/* Fallback image like the ones in the screenshot */}
                <div className="absolute top-2 left-2 flex gap-1.5 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="w-full text-left mt-6">
                    <p className="text-white font-mono text-sm leading-tight font-bold">{project.title.toLowerCase()} / <span className="text-green-400">repo</span></p>
                    <p className="text-zinc-400 text-xs font-mono mt-2 line-clamp-3">{project.description}</p>
                </div>
            </div>
          )}
        </div>
      </div>

      {/* Content — grows to fill remaining space */}
      <div className="flex flex-col flex-1 px-5 py-4 gap-2">
        {/* Title */}
        <div className="flex justify-between items-baseline gap-2">
            <h3 className="font-semibold text-foreground leading-tight text-xl">
              {project.title}
            </h3>
        </div>

        {/* Description — flex-1 so it fills space and pushes tags to the bottom */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Tech badges — always pinned to the bottom */}
        {project.techStack?.length > 0 && (
          <TechBadgeRow techStack={project.techStack} />
        )}
      </div>
    </Link>
  );
}
