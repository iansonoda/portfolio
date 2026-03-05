import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-black/5 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex h-14 items-center justify-between px-6">
        {/* Logo / Home */}
        <a href="/" className="flex items-center space-x-0 text-lg font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity">
          <span className="text-muted-foreground">~/</span>
          <span className="inline-block w-[2px] h-5 bg-primary ml-0.5 rounded-sm" />
        </a>

        {/* Navigation */}
        <nav className="flex items-center space-x-8 text-sm font-medium">
          <a className="text-muted-foreground hover:text-foreground transition-colors" href="#skills">
            Skills
          </a>
          <a className="text-muted-foreground hover:text-foreground transition-colors" href="#projects">
            Projects
          </a>
          <a className="text-muted-foreground hover:text-foreground transition-colors" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
