import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const PLACEHOLDER_HOSTNAMES = new Set([
  "example.com",
  "www.example.com",
  "localhost",
  "127.0.0.1",
]);

function parseUrl(url) {
  try {
    return new URL(url);
  } catch {
    return null;
  }
}

function getLastPathSegment(url) {
  const parsed = parseUrl(url);
  if (!parsed) return null;

  const segments = parsed.pathname.split("/").filter(Boolean);
  return segments.at(-1) ?? null;
}

export function slugifyProjectTitle(title = "") {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function findProjectBySlug(projects = [], slug = "") {
  return projects.find((project) => slugifyProjectTitle(project.title) === slug);
}

export function isPublicExternalUrl(url) {
  const parsed = parseUrl(url);
  if (!parsed) return false;

  if (!["http:", "https:"].includes(parsed.protocol)) {
    return false;
  }

  const hostname = parsed.hostname.toLowerCase();
  if (
    PLACEHOLDER_HOSTNAMES.has(hostname) ||
    hostname.endsWith(".example.com")
  ) {
    return false;
  }

  return true;
}

export function getContactLinks(personal) {
  const contact = personal?.contact ?? {};

  return [
    {
      key: "github",
      label: "GitHub",
      href: isPublicExternalUrl(contact.github) ? contact.github : null,
      handle: getLastPathSegment(contact.github),
      Icon: Github,
      isExternal: true,
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      href: isPublicExternalUrl(contact.linkedin) ? contact.linkedin : null,
      handle: getLastPathSegment(contact.linkedin),
      Icon: Linkedin,
      isExternal: true,
    },
    {
      key: "instagram",
      label: "Instagram",
      href: isPublicExternalUrl(contact.instagram) ? contact.instagram : null,
      handle: getLastPathSegment(contact.instagram),
      Icon: Instagram,
      isExternal: true,
    },
    {
      key: "email",
      label: "Email",
      href: contact.email ? `mailto:${contact.email}` : null,
      handle: contact.email ?? null,
      Icon: Mail,
      isExternal: false,
    },
  ]
    .filter((link) => Boolean(link.href))
    .map((link) => {
      const handle = link.key === "email"
        ? contact.email ?? null
        : link.handle
          ? `@${link.handle}`.replace("@@", "@")
          : null;

      return {
        ...link,
        handle,
        ariaLabel: handle ? `${link.label} ${handle}` : link.label,
      };
    });
}
