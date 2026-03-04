import { Button } from "@/components/ui/button";

export default function Header({ personal }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center mx-auto px-4 md:px-8">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">
              {personal.name.split(" ")[0]}&apos;s Portfolio
            </span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#about"
            >
              About
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#experience"
            >
              Experience
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#projects"
            >
              Projects
            </a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            {personal.contact.github && (
              <a href={personal.contact.github} target="_blank" rel="noreferrer">
                <Button variant="ghost" size="sm" className="w-9 px-0">
                  GH
                </Button>
              </a>
            )}
            {personal.contact.linkedin && (
              <a href={personal.contact.linkedin} target="_blank" rel="noreferrer">
                <Button variant="ghost" size="sm" className="w-9 px-0">
                  IN
                </Button>
              </a>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
