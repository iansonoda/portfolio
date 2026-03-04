import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="container mx-auto px-4 md:px-8 py-16 md:py-24 space-y-12">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Selected Projects</h2>
        <p className="text-zinc-500 max-w-[600px] mx-auto text-lg dark:text-zinc-400">
          A showcase of my recent work and side projects.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <Card key={idx} className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
            {project.imageUrl && (
              <div className="aspect-video w-full overflow-hidden border-b">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="line-clamp-3">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2 mt-2">
                {project.techStack?.map((tech) => (
                  <Badge variant="outline" key={tech}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex space-x-4 border-t pt-4">
              {project.repoUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    Source
                  </a>
                </Button>
              )}
              {project.demoUrl && (
                <Button size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
