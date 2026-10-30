import orgRepos from "./org-repos.json";

export type Status = "live" | "building" | "planned" | "public";

export interface Project {
  slug: string;
  status: Status;
  summary: string;
  detail: string;
  href?: string;
  hrefLabel?: string;
  repo?: string;
}

interface OrgRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  archived: boolean;
  fork: boolean;
  topics: string[];
}

// Hand-written copy for projects we want to describe properly. Anything else
// public under the org is listed automatically from its GitHub description.
const curated: Project[] = [
  {
    slug: "bench",
    status: "live",
    summary: "Deliberate practice for engineers moving into AI safety research engineering.",
    detail:
      "Each problem runs through five phases: explore, brainstorm, plan, implement, verify. Papers, exercises and mock interviews come back on a spaced-retrieval schedule based on where you are weak. No streaks, no scores. Self-hostable, bring your own key.",
    href: "https://bench.pact-safety.dev",
    hrefLabel: "bench.pact-safety.dev",
  },
  {
    slug: "touchstone",
    status: "live",
    summary: "Rigor ratings for AI benchmarks, across published benchmark-quality standards.",
    detail:
      "Touchstone encodes the published standards for what makes a benchmark good as data, applies each one to a benchmark with cited evidence, and shows the verdicts side by side, so you can see how rigorous a benchmark is and where the standards disagree. Scores are a deterministic function of the verdicts; model-drafted assessments are labelled and never count.",
    href: "https://touchstone.pact-safety.dev",
    hrefLabel: "touchstone.pact-safety.dev",
  },
];

// The site's own repo and the org profile repo are infrastructure, not projects.
// A repo can also opt out with the `pact-hide` topic.
const HIDDEN = new Set([".github", "pact-safety.org"]);

export function listProjects(): Project[] {
  const bySlug = new Map(curated.map((p) => [p.slug, { ...p }]));
  for (const r of orgRepos as OrgRepo[]) {
    if (HIDDEN.has(r.name) || r.archived || r.fork || r.topics.includes("pact-hide")) continue;
    const known = bySlug.get(r.name);
    if (known) {
      known.repo = r.html_url;
      continue;
    }
    bySlug.set(r.name, {
      slug: r.name,
      status: "public",
      summary: r.description ?? "No description yet.",
      detail: r.description ?? "This repository doesn't have a description yet.",
      href: r.homepage || undefined,
      hrefLabel: r.homepage ? r.homepage.replace(/^https?:\/\//, "") : undefined,
      repo: r.html_url,
    });
  }
  return [...bySlug.values()];
}

export const statusLabel: Record<Status, string> = {
  live: "● live",
  building: "○ building",
  planned: "· planned",
  public: "○ public repo",
};
