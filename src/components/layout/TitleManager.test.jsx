import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import TitleManager from "./TitleManager";

function renderWithRoute(route) {
  render(
    <MemoryRouter initialEntries={[route]}>
      <TitleManager />
    </MemoryRouter>
  );
}

describe("TitleManager", () => {
  it("sets the projects page title", async () => {
    renderWithRoute("/projects");

    await waitFor(() => {
      expect(document.title).toBe("Projects | Ian Sonoda McFarland");
    });
  });

  it("sets the matched project title for project detail routes", async () => {
    renderWithRoute("/projects/vocalize-ai");

    await waitFor(() => {
      expect(document.title).toBe("Vocalize AI | Ian Sonoda McFarland");
    });
  });

  it("falls back when the project slug is unknown", async () => {
    renderWithRoute("/projects/unknown-project");

    await waitFor(() => {
      expect(document.title).toBe("Project | Ian Sonoda McFarland");
    });
  });
});
