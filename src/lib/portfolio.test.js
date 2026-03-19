import { describe, expect, it } from "vitest";
import {
  findProjectBySlug,
  getContactLinks,
  isPublicExternalUrl,
  slugifyProjectTitle,
} from "./portfolio";

describe("slugifyProjectTitle", () => {
  it("normalizes casing, spacing, and punctuation", () => {
    expect(slugifyProjectTitle("  My Cool Project!  ")).toBe("my-cool-project");
    expect(slugifyProjectTitle("React + Vite / Portfolio")).toBe("react-vite-portfolio");
  });

  it("trims leading and trailing separators", () => {
    expect(slugifyProjectTitle("---Already-Slugged---")).toBe("already-slugged");
  });
});

describe("findProjectBySlug", () => {
  const projects = [
    { title: "Movie Search App" },
    { title: "Vocalize AI" },
  ];

  it("returns the matching project", () => {
    expect(findProjectBySlug(projects, "vocalize-ai")).toEqual(projects[1]);
  });

  it("returns undefined when there is no match", () => {
    expect(findProjectBySlug(projects, "missing-project")).toBeUndefined();
  });
});

describe("isPublicExternalUrl", () => {
  it("accepts public http and https urls", () => {
    expect(isPublicExternalUrl("https://github.com/iansonoda")).toBe(true);
    expect(isPublicExternalUrl("http://portfolio.example.org/demo")).toBe(true);
  });

  it("rejects invalid, non-http, and placeholder urls", () => {
    expect(isPublicExternalUrl("not-a-url")).toBe(false);
    expect(isPublicExternalUrl("mailto:test@example.com")).toBe(false);
    expect(isPublicExternalUrl("https://example.com/demo")).toBe(false);
    expect(isPublicExternalUrl("https://app.example.com/demo")).toBe(false);
    expect(isPublicExternalUrl("http://localhost:3000")).toBe(false);
  });
});

describe("getContactLinks", () => {
  it("returns only valid links with formatted handles", () => {
    const links = getContactLinks({
      contact: {
        email: "iansmcfarland@gmail.com",
        github: "https://github.com/iansonoda",
        linkedin: "https://linkedin.com/in/iansmcfarland",
        instagram: "https://example.com/placeholder",
      },
    });

    expect(links).toHaveLength(3);
    expect(links.map((link) => link.key)).toEqual(["github", "linkedin", "email"]);
    expect(links[0]).toMatchObject({
      handle: "@iansonoda",
      ariaLabel: "GitHub @iansonoda",
      isExternal: true,
    });
    expect(links[1]).toMatchObject({
      handle: "@iansmcfarland",
      ariaLabel: "LinkedIn @iansmcfarland",
      isExternal: true,
    });
    expect(links[2]).toMatchObject({
      href: "mailto:iansmcfarland@gmail.com",
      handle: "iansmcfarland@gmail.com",
      ariaLabel: "Email iansmcfarland@gmail.com",
      isExternal: false,
    });
  });
});
