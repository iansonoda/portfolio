import { Link } from "react-router-dom";
import portfolioData from "@/data/portfolio.json";
import { getContactLinks } from "@/lib/portfolio";

export default function About() {
  const { personal } = portfolioData;
  const contactLinks = getContactLinks(personal);
  const aboutLinks = contactLinks.filter(({ key }) => key !== "instagram");
  const instagramLink = contactLinks.find(({ key }) => key === "instagram");
  const emailLink = contactLinks.find(({ key }) => key === "email");

  return (
    <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 py-12 md:py-20 animate-in fade-in duration-500">
      <h1 className="text-4xl font-bold tracking-tight text-foreground mb-12 border-b border-border pb-6">
        About Me
      </h1>
      
      <div className="flex flex-col md:flex-row items-center md:items-start md:mt-8 gap-10 md:gap-16">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shrink-0 bg-muted/40 border border-border aspect-square">
          <img 
            // Grabbing profile picture from the GitHub link provided
            src="https://github.com/iansonoda.png" 
            alt={personal.name} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        
        <div className="flex flex-col flex-1 space-y-6 text-center md:text-left">
          <p className="text-muted-foreground dark:text-zinc-200 text-lg md:text-xl leading-relaxed">
            <b>Hey!</b> I&apos;m Ian{" "}
            <Link to="/socials" className="text-primary hover:underline underline-offset-4 transition-colors">
              (@iansonoda)
            </Link>{" "}
            - A recent graduate from McGill University, and based out of Montreal, Canada. I love making random and{" "}
            <Link to="/projects" className="text-primary hover:underline underline-offset-4 transition-colors">
              cool projects
            </Link>{" "}
            when I&apos;m bored.
          </p>
          <p className="text-muted-foreground dark:text-zinc-200 text-lg md:text-xl leading-relaxed">
            Some of my favorite projects include: 
          </p>

          <p className="text-muted-foreground dark:text-zinc-200 text-lg md:text-xl leading-relaxed">
            Outside of coding, I love playing video games, reading fiction (especially fantasy), photography, and spending time with my family. I love making new friends and experiences new things!
            {" "}Feel free to reach out on{" "}
            {instagramLink ? (
              <a href={instagramLink.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4 transition-colors">instagram</a>
            ) : (
              "instagram"
            )}{" "}
            or shoot me an{" "}
            {emailLink ? (
              <a href={emailLink.href} className="text-primary hover:underline underline-offset-4 transition-colors">email</a>
            ) : (
              "email"
            )}{" "}
            if you&apos;d like to chat.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            {aboutLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="flex items-center gap-2 text-sm font-medium text-foreground bg-muted/50 hover:bg-muted px-4 py-2.5 rounded-lg transition-colors border border-border/50 shadow-sm hover:shadow"
                {...(link.isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <link.Icon className="w-4 h-4" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
