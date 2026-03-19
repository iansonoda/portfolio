import { createElement } from "react";

export default function SocialIconLink({ href, label, icon, isExternal = false }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="text-muted-foreground hover:text-foreground transition-colors"
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {createElement(icon, { className: "w-4 h-4" })}
    </a>
  );
}
