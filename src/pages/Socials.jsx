import portfolioData from "@/data/portfolio.json";
import { getContactLinks } from "@/lib/portfolio";

export default function Socials() {
  const { personal } = portfolioData;
  const socialsList = getContactLinks(personal);
  const emailLink = socialsList.find(({ key }) => key === "email");

  return (
    <main className="flex-1 w-full flex flex-col items-center justify-center animate-in fade-in duration-500 py-20 px-6 min-h-[calc(100vh-140px)]">
      
      {/* Top Tagline */}
      <h1 className="text-muted-foreground font-mono text-sm md:text-base text-center mb-12">
        Find me across the web. Let's build something together.
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
        {socialsList.map((social) => (
          <a
            key={social.key}
            href={social.href}
            className="group flex flex-col items-start p-6 rounded-2xl border border-border bg-card shadow-md hover:shadow-md hover:bg-muted/40 transition-all duration-300 hover:-translate-y-1"
            {...(social.isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <div className="w-12 h-12 rounded-xl bg-muted/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <social.Icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground font-mono tracking-tight mb-1">
              {social.label}
            </h3>
            <p className="text-sm text-muted-foreground font-mono">
              {social.handle}
            </p>
          </a>
        ))}
      </div>

      {/* Bottom Text */}
      <p className="text-muted-foreground font-mono text-sm text-center">
        Prefer email? Reach out at{" "}
        {emailLink ? (
          <a
            href={emailLink.href}
            className="text-primary hover:underline underline-offset-4 transition-colors"
          >
            {emailLink.handle}
          </a>
        ) : (
          personal.contact.email
        )}
      </p>

    </main>
  );
}
