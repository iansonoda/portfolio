import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

const NAV_SECTIONS = [
  { id: "hero", label: "" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
];

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [intersectingSection, setIntersectingSection] = useState(null);
  const { theme, toggle } = useTheme();

  const isHome = location.pathname === "/";
  const pathParts = location.pathname.split("/").filter(Boolean);

  // Derived current label
  let activeSection = "";
  if (isHome) {
    if (intersectingSection !== null) {
      activeSection = intersectingSection;
    } else {
      const id = location.hash.replace("#", "") || "hero";
      activeSection = NAV_SECTIONS.find((s) => s.id === id)?.label ?? "";
    }
  }

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection observer for section tracking on home page
  useEffect(() => {
    if (location.pathname !== "/") return;

    const observers = [];
    NAV_SECTIONS.forEach(({ id, label }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIntersectingSection(label);
          }
        },
        { rootMargin: "-30% 0px -30% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex h-14 items-center justify-between px-6">
        {/* Logo / Home — dynamic section label + blinking cursor */}
        <div className="flex items-center space-x-0 text-lg font-semibold tracking-tight">
          <Link
            to="/"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ~/
          </Link>
          {isHome ? (
            activeSection && (
              <span className="text-foreground">{activeSection}</span>
            )
          ) : (
            pathParts.map((part, index) => {
              const to = `/${pathParts.slice(0, index + 1).join("/")}`;
              const isLast = index === pathParts.length - 1;
              return (
                <span key={to} className="flex items-center">
                  <Link
                    to={to}
                    className={`transition-colors ${
                      isLast ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {part}
                  </Link>
                  {!isLast && <span className="text-muted-foreground">/</span>}
                </span>
              );
            })
          )}
          <span className="cursor-blink inline-block w-[2px] h-5 bg-primary ml-0.5 rounded-sm" />
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <nav className="flex items-center space-x-8 text-sm font-medium">
            <Link
              to="/about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              to="/#skills"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIntersectingSection("skills")}
            >
              Skills
            </Link>
            <Link
              to="/projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/socials"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Socials
            </Link>
          </nav>

          {/* Theme toggle */}
          <button
            id="theme-toggle"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
