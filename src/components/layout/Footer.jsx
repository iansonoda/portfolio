import { getContactLinks } from "@/lib/portfolio";
import SocialIconLink from "@/components/ui/SocialIconLink";

export default function Footer({ personal }) {
  const currentYear = new Date().getFullYear();
  const contactLinks = getContactLinks(personal);

  return (
    <div className="w-full px-6 pb-8 pt-4">
      <footer className="max-w-[1000px] mx-auto bg-card border border-border rounded-full py-4 px-6 md:px-8 flex flex-col md:flex-row items-center justify-between shadow-sm">
        
        {/* Left Side */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
          <span>&copy; {currentYear} {personal.name}</span>
          <span className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            All Systems Nominal
          </span>
        </div>
        
        {/* Right Side */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Icons */}
          <div className="flex items-center gap-3">
            {contactLinks.map((link) => (
              <SocialIconLink
                key={link.key}
                href={link.href}
                label={link.ariaLabel}
                icon={link.Icon}
                isExternal={link.isExternal}
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
