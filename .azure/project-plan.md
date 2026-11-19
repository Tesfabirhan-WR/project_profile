# Project Plan

**Status**: Planning
**Created**: 2026-11-19
**Mode**: AUGMENT

---

## 1. Project Overview

**Goal**: Create a standalone, responsive personal portfolio and project catalogue in `/root/projects/project_portofolio_pipeline`, keeping the existing profile, skills, about, and contact content while presenting README-derived summaries and verified GitHub links for project folders under `/root/projects`. Missing README or repository metadata must be identified rather than guessed, and the standalone project's README must explain setup and catalogue maintenance. The project is designed so that every module is independently testable.

**App Type**: Static website

**API Login**: No

**Mode**: AUGMENT

**Deployment Plan**: No deployment plan found

---

## 2. Project Portofolio Pipeline Website — frontend

| Component | Technology |
|-----------|-----------|
| **Language** | JavaScript |
| **Runtime** | Browser |
| **Framework** | Plain HTML, CSS, and JavaScript |
| **Package Manager** | None |
| **Test Runner** | Manual browser checks |
| **Mocking Library** | None |
| **Test Command** | No automated test command; verify the static site with a local HTTP server and browser checks |
| **Orchestration** | None; static files require no containers or orchestration |

---

## 3. Services Required

| Azure Service | Role in App | Environment Variable | Default Value (Local) | Classification |
|---------------|------------|---------------------|----------------------|----------------|
| None required | Static files run locally with a standard static-file server; no Azure resource is required by the app | — | — | N/A |

No application datastore is required. The README-derived catalogue is checked in as static client-side data; browsers cannot enumerate `/root/projects` at runtime.

---

## 4. Prerequisites

### Run

| Tool | Service(s) | Installed | Version |
|------|------------|-----------|---------|
| Python 3 (standard-library HTTP server) | Project Portofolio Pipeline Website | ✅ | 3.14.10 |

### Debug

| Tool | Service(s) | Installed | Version |
|------|------------|-----------|---------|
| Chrome | Project Portofolio Pipeline Website | ❓ | Unknown; no Chrome/Chromium executable detected on Linux |

Double-check all tools marked ❓ are available in your local development environment before running or debugging the site.

---

## 6. Design System & UI

**Component Library**: Pico.css, bundled locally with no CDN dependency
**Style Direction**: An editorial personal portfolio with a compact profile introduction, clear skills and contact sections, and a scannable project catalogue. Retain the existing dark blue-green and warm amber identity, generous whitespace, subtle borders, and restrained card elevation; keep all imagery and styles local.
**Typography**: system-ui, -apple-system, "Segoe UI", sans-serif

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#17324D` | Brand navigation, headings, and project links |
| `accent` | `#D98245` | Featured project markers and calls to action |
| `surface` | `#F5F7F6` | Page and project-card backgrounds |
| `text` | `#17232D` | Profile, skill, and project descriptions |
| `muted` | `#63717B` | Captions, metadata, and source notes |
| `border` | `#DCE4E3` | Project cards and section dividers |

### Pages

| Page | Route | Purpose | Layout |
|------|-------|---------|--------|
| Portfolio | `/` | Introduce Tesfabirhan Redie and present profile, skills, README-derived project summaries, and contact information | `header + nav + hero + main(grid) + footer` |

### Sample Content

Portfolio — representative project records:

| Project | README source | Repository metadata |
|---------|---------------|---------------------|
| Data-Exploration-Project | `../Data-Exploration-Project/README.md` | `https://github.com/Tesfabirhan-WR/Data-Exploration-Project` |
| Eripolarc-Data-center | `../Eripolarc-Data-center/README.md` | `https://github.com/Tesfabirhan-WR/Eripolarc-Data-center` |
| llm_eripolarc_database | `../llm_eripolarc_database/README.md` | `https://github.com/Tesfabirhan-WR/Knowledge_graph_project` |
| predict-film-category | `../predict-film-category/README.md` | `https://github.com/Tesfabirhan-WR/predict-film-category` |
| eritrea_research_collector_v2 | `../eritrea_research_collector_v2/README.md` | GitHub link not configured |

Project summaries must come from the corresponding README files. Catalog entries without a README or GitHub remote must state that fact; do not generate descriptions or repository URLs. The known README-backed folders `scrapers` and `streamvault_pipeline_cloud-main` also have no GitHub remote and must show “GitHub link not configured”. Include other top-level project folders with a README or Git remote, and exclude support/data/cache folders such as `data`, `reports`, `venv`, `.venv`, `node_modules`, and caches.

---

## 7. Project Structure

```text
project_portofolio_pipeline/
├── .azure/
│   ├── project-plan.md
│   └── .preview-temp/
├── images/
│   ├── portofolio_photo.jpeg
│   └── cv_Tesfabirhan_REDIE.pdf
├── index.html
├── styles.css
├── projects.js
├── script.js
└── README.md
```

`projects.js` contains the generated static catalogue. The browser does not scan project directories or make remote requests at runtime.

---

## 8. Route Definitions

| # | Method | Path | Description | Request Body | Response Body | Status Codes |
|---|--------|------|-------------|-------------|--------------|-------------|
| 1 | GET | `/` | Serve the portfolio page | — | `index.html` | 200, 404 |
| 2 | GET | `/styles.css` | Serve local responsive styles and component-library styles | — | CSS assets | 200, 404 |
| 3 | GET | `/projects.js` | Serve the static README-derived project catalogue | — | JavaScript data | 200, 404 |
| 4 | GET | `/script.js` | Render the project catalogue and page interactions | — | JavaScript | 200, 404 |
| 5 | GET | `/images/portofolio_photo.jpeg` | Serve the local profile portrait | — | Image | 200, 404 |
| 6 | GET | `/images/cv_Tesfabirhan_REDIE.pdf` | Serve the local CV | — | PDF | 200, 404 |

---

## 9. Next Steps

1. Review the project plan and portfolio preview, then explicitly approve the plan.
2. After approval, run **azure-project-scaffold** to implement the standalone static website and README-based catalogue.
3. Verify the page and local project links with a browser; no backend integration or datastore migrations are needed.
4. Run the **azure-deploy** agent only if an Azure hosting target is later requested.
