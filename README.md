# pact-safety.org

Source for [pact-safety.org](https://pact-safety.org): Astro + Tailwind CSS + TypeScript, built to static files and deployed by Cloudflare Pages on every push to `main`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-checks, then writes dist/
```

## Where things live

- `src/data/projects.ts`: hand-written copy for featured projects. Any other public repo under `pact-safety` is listed automatically from `src/data/org-repos.json`.
- `src/data/org-repos.json`: a snapshot of the org's public repos. The `Sync org repos` workflow refreshes it hourly and commits only on a change, which triggers a deploy. Run `npm run sync-repos` to refresh it by hand. To keep a repo off the site, give it the `pact-hide` topic.
- `src/data/resources.ts`: third-party tools on `/resources`. Check the maintainer, license and repo against the source before adding or changing an entry.
- `src/styles/global.css`: design tokens (`@theme`) and the few shared component classes.
