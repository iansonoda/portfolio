import { Button } from "@/components/ui/button";

export default function Hero({ personal }) {
  return (
    <section id="hero" className="container mx-auto px-4 md:px-8 pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance text-foreground">
          {personal.name}
        </h1>
        <p className="mx-auto max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
          {personal.title} — {personal.location}
        </p>
      </div>
      <div className="flex space-x-4">
        <Button size="lg" asChild>
          <a href="#projects">View Works</a>
        </Button>
        {personal.resumeUrl && (
          <Button variant="outline" size="lg" asChild>
            <a href={personal.resumeUrl} target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </Button>
        )}
      </div>
    </section>
  );
}
