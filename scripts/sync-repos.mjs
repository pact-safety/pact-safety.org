// Snapshot the org's public repos into src/data/org-repos.json.
//
// The site reads this file at build time instead of calling GitHub during
// the build, so builds stay deterministic and never fail on a rate limit.
// The sync-repos workflow runs this hourly and commits only when the list
// changed; that commit is what triggers a Cloudflare Pages rebuild.
import { writeFile } from "node:fs/promises";

const ORG = "pact-safety";
const OUT = new URL("../src/data/org-repos.json", import.meta.url);

const headers = { Accept: "application/vnd.github+json", "User-Agent": "pact-safety.org-sync" };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

const res = await fetch(`https://api.github.com/orgs/${ORG}/repos?type=public&per_page=100`, { headers });
if (!res.ok) {
  console.error(`GitHub API ${res.status}: ${await res.text()}`);
  process.exit(1);
}

const repos = (await res.json())
  .map(({ name, description, html_url, homepage, archived, fork, topics, created_at }) => ({
    name, description, html_url, homepage, archived, fork, topics, created_at,
  }))
  .sort((a, b) => a.created_at.localeCompare(b.created_at));

await writeFile(OUT, JSON.stringify(repos, null, 2) + "\n");
console.log(`wrote ${repos.length} repos`);
