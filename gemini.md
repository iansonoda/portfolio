# Project Constitution

## Data Schemas

**Portfolio Data Schema (JSON)**

```json
{
  "personal": {
    "name": "Ian Sonota McFarland",
    "title": "Full Stack / Backend Engineer",
    "bio": "Hi, I'm Ian. This is what I do.",
    "location": "City, Country",
    "resumeUrl": "/resume.pdf",
    "contact": {
      "email": "string",
      "github": "string",
      "linkedin": "string"
    }
  },
  "skills": [
    {
      "category": "Frontend",
      "technologies": ["React", "Tailwind CSS", "TypeScript"]
    },
    {
      "category": "Backend",
      "technologies": ["Node.js", "Python", "SQL"]
    }
  ],
  "projects": [
    {
      "title": "string",
      "description": "string",
      "techStack": ["string"],
      "demoUrl": "string (optional)",
      "repoUrl": "string (optional)",
      "imageUrl": "string (optional)"
    }
  ]
}
```

## Behavioral Rules

- **Design:** Professional, clean, minimalistic, sleek.
- **Tools:** React, Tailwind CSS, shadcn/ui.
- **Integrations:** None needed initially; external services only when explicitly requested.
- **Workflow:** Must follow B.L.A.S.T. protocol and Agent Superpowers.

## Architectural Invariants

- Front-end mostly application.
- All portfolio data acts as the "Source of Truth" living locally in a JSON or TS file (or `.env` if secrets are needed).

## Maintenance Log

(To be finalized in Phase 5)
