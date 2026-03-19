import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import portfolioData from "@/data/portfolio.json";
import { findProjectBySlug } from "@/lib/portfolio";

const TitleManager = () => {
  const { pathname } = useLocation();
  const { name } = portfolioData.personal;

  useEffect(() => {
    let title = name;

    if (pathname === "/") {
      title = name;
    } else if (pathname === "/about") {
      title = `About | ${name}`;
    } else if (pathname === "/socials") {
      title = `Socials | ${name}`;
    } else if (pathname === "/projects") {
      title = `Projects | ${name}`;
    } else if (pathname.startsWith("/projects/")) {
      const slug = pathname.split("/").pop();
      const project = findProjectBySlug(portfolioData.projects, slug);
      if (project) {
        title = `${project.title} | ${name}`;
      } else {
        title = `Project | ${name}`;
      }
    } else {
      // Fallback: capitalize the first segment of the path
      const segment = pathname.split("/")[1];
      if (segment) {
        const pageName = segment.charAt(0).toUpperCase() + segment.slice(1);
        title = `${pageName} | ${name}`;
      }
    }

    document.title = title;
  }, [pathname, name]);

  return null;
};

export default TitleManager;
