# Integration hand-off

## Project shape
- Static, dependency-free website only; no backend, database, external API, or Azure service.
- Do not add a package manager, component library, Docker, migrations, or seed data.

## Frontend
- Folder: `/root/projects/project_portofolio_pipeline`
- Run: `python3 -m http.server 8000` from this folder
- Build: none; plain HTML, CSS, and JavaScript
- Entry point and assets: `index.html`, `styles.css`, `projects.js`, `script.js`
- Catalog source: `projects.js` is the maintained local catalog. There are no mock clients or live-data seam to replace.

## Backend, APIs, and data
- Backend: none; no backend run command, build command, port, or health endpoint.
- HTTP files to verify: `GET /`, `GET /styles.css`, `GET /projects.js`, `GET /script.js`
- Database/migrations: none; no schema or seed data.
- Shared types: none.

## Services
- Essential: static file hosting only (local Python standard-library server for development).
- Enhancement: none.
