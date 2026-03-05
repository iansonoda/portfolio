import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero({ personal }) {
  return (
    <section
      id="hero"
      className="hero-grid-bg w-full flex flex-col items-center justify-center text-center relative"
      style={{ minHeight: "calc(100vh - 3.5rem)" }}
    >
      <div className="relative z-10 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 -mt-24">
        {/* Location above name */}
        <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase flex items-center justify-center gap-1.5">
          <span>📍</span>
          <span>{personal.location}</span>
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
          {personal.name}
        </h1>

        {/* Title & Bio */}
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg leading-relaxed">
          {personal.title} — {personal.bio}
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <Button size="lg" asChild>
            <Link to="/#projects" className="group">
              See My Work
              <span className="inline-block ml-1.5 transition-transform group-hover:translate-x-1">›</span>
            </Link>
          </Button>
          {personal.resumeUrl && (
            <Button variant="outline" size="lg" asChild>
              <a href={personal.resumeUrl} download="Ian_McFarland_Resume.pdf" target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 mr-2 flex-shrink-0"
                >
                  <path d="M12 3v13" />
                  <path d="M7.5 11.5L12 16l4.5-4.5" />
                  <path d="M3 19h18" />
                </svg>
                Download Resume
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
