import { Badge } from "@/components/ui/badge";

export default function About({ personal, skills }) {
  return (
    <section id="about" className="container mx-auto px-4 md:px-8 py-16 md:py-24 space-y-12">
      <div className="max-w-[800px] mx-auto space-y-8 text-center md:text-left md:flex md:space-x-12 md:space-y-0">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
            {personal.bio}
          </p>
        </div>
        
        <div className="md:w-1/2 space-y-6 text-left">
          <h3 className="text-2xl font-semibold tracking-tight">Skills</h3>
          <div className="space-y-6">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-sm font-medium text-foreground/80 my-1">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
