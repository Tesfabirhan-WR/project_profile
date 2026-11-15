# Project Profile Pipeline

A lightweight, static portfolio page for browsing projects in the parent `/root/projects` directory. Project summaries are based on their README files, and GitHub links are shown only when a repository remote is configured.

## Run locally

From this directory, start Python's built-in static file server:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000> in a browser. Stop the server with `Ctrl+C`. The site uses plain HTML, CSS, and JavaScript; it has no package installation, backend, or external runtime dependencies.

## Project catalog

The browser cannot enumerate sibling folders, so `projects.js` contains a static catalog that must be updated manually when projects are added or changed. For each eligible top-level project folder in `/root/projects`:

- Include projects with a `README.md` and/or a verified Git remote; omit support folders such as `data`, `reports`, and virtual environments.
- Use a concise, faithful summary from the README. Do not invent a description if the README is missing.
- Set `readme` to the README path relative to this directory, such as `../TP_project/README.md`.
- Set `repositoryUrl` to the verified GitHub remote URL, or `null` if there is no remote. The page labels missing GitHub links instead of creating broken links.

After editing the catalog, serve the site locally and check that all project cards and repository links render as expected.

## Files

- `index.html` — page structure and content
- `styles.css` — responsive layout and visual design
- `projects.js` — static project catalog
- `script.js` — catalog rendering
