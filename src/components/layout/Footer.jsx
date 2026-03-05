export default function Footer({ personal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border dark:border-gray-700 bg-muted/40 py-8">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-sm text-zinc-500 text-center md:text-left dark:text-zinc-400">
          &copy; {currentYear} {personal.name}. All rights reserved.
        </p>
        <div className="flex space-x-4">
          {personal.contact.email && (
            <a href={`mailto:${personal.contact.email}`} className="text-sm text-zinc-500 hover:text-foreground transition-colors dark:text-zinc-400">
              Email
            </a>
          )}
          {personal.contact.github && (
            <a href={personal.contact.github} target="_blank" rel="noreferrer" className="text-sm text-zinc-500 hover:text-foreground transition-colors dark:text-zinc-400">
              GitHub
            </a>
          )}
          {personal.contact.linkedin && (
            <a href={personal.contact.linkedin} target="_blank" rel="noreferrer" className="text-sm text-zinc-500 hover:text-foreground transition-colors dark:text-zinc-400">
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
