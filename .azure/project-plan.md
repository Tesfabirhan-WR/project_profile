# Project Plan

**Status**: Approved
**Created**: 2026-11-16
**Mode**: AUGMENT

---

## 1. Project Overview

**Goal**: Maintain a lightweight static project portfolio in `/root/projects/project_profile_pipeline`, separate from the existing `TP_project` repository. Its catalog includes top-level project folders identified by a `README.md` and/or Git remote, derives descriptions from README files where present, and explicitly shows when README or GitHub-remote metadata is missing. Exclude obvious non-project folders and virtual environments. Keep the portfolio setup and catalog-maintenance guidance in this project's README; leave the `TP_project` README, notebooks, and datasets unchanged.

**App Type**: Static website

**API Login**: No

**Mode**: AUGMENT

**Deployment Plan**: No deployment plan found

---

## 2. Project Profile Pipeline Website — frontend

| Component | Technology |
|-----------|-----------|
| **Language** | JavaScript |
| **Runtime** | Browser |
| **Framework** | Plain HTML, CSS, and JavaScript; no framework |
| **Package Manager** | None |
| **Test Runner** | Browser/manual checks |
| **Mocking Library** | None |
| **Test Command** | `python3 -m http.server 8000` (Python standard library only; verify the page and links in a browser) |
| **Orchestration** | None; static files require no containers or orchestration |

---

## 3. Services Required

| Azure Service | Role in App | Environment Variable | Default Value (Local) | Classification |
|---------------|------------|---------------------|----------------------|----------------|
| None | Static files are served by the hosting platform or a local static-file server; no Azure resource is required by the app | — | — | N/A |

---

## 4. Prerequisites

### Run

| Tool | Service(s) | Installed | Version |
|------|------------|-----------|---------|
| Web browser | Project Profile Pipeline Website | ❓ | Unknown; no browser executable was detected |
| Python 3 (standard-library local static-file server) | Project Profile Pipeline Website | ✅ | 3.14.10 |

### Debug

| Tool | Service(s) | Installed | Version |
|------|------------|-----------|---------|
| Browser developer tools | Project Profile Pipeline Website | ❓ | Browser not detected; confirm in the browser used to view the site |
| VS Code JavaScript/HTML debugging | Project Profile Pipeline Website | ❓ | `code` command and extension state could not be confirmed |

Double-check all tools marked ❓ are available in your local development environment before running or debugging the site.

---

## 5. Design System & UI

**Component Library**: None — native semantic HTML, CSS, and JavaScript; no framework, component library, or CDN
**Style Direction**: A lightweight editorial project hub inspired by the reference site's clear hierarchy: a concise portfolio introduction and scannable project cards. Use a dark blue-green brand color with warm amber highlights, generous whitespace, subtle borders, and restrained elevation so README-derived summaries remain the focus. All assets and styles are local.
**Typography**: system-ui, -apple-system, "Segoe UI", sans-serif

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#17324D` | Portfolio navigation, headings, and primary GitHub links |
| `accent` | `#D98245` | Featured project markers and small calls to action |
| `surface` | `#F5F7F6` | Portfolio page background |
| `text` | `#17232D` | Project names and readable body copy |
| `muted` | `#63717B` | README source notes, project metadata, and secondary labels |
| `border` | `#DCE4E3` | Card outlines and section dividers |

### Pages

| Page | Route | Purpose | Layout |
|------|-------|---------|--------|
| Project Portfolio | `/` | Introduce the portfolio and show README-derived project summaries with repository links where known | `header + hero + main(grid) + footer` |

### Sample Content

Project Portfolio — representative project card records:

| Project | README source | GitHub repository |
|---------|---------------|-------------------|
| Data-Exploration-Project | `../Data-Exploration-Project/README.md` | `https://github.com/Tesfabirhan-WR/Data-Exploration-Project` |
| Eripolarc-Data-center | `../Eripolarc-Data-center/README.md` | `https://github.com/Tesfabirhan-WR/Eripolarc-Data-center` |
| Knowledge Graph Project (`llm_eripolarc_database`) | `../llm_eripolarc_database/README.md` | `https://github.com/Tesfabirhan-WR/Knowledge_graph_project` |
| predict-film-category | `../predict-film-category/README.md` | `https://github.com/Tesfabirhan-WR/predict-film-category` |
| SQL_projet | `../SQL_projet/README.md` | `https://github.com/Tesfabirhan-WR/SQL_projet` |
| TP_project | `../TP_project/README.md` | `https://github.com/Tesfabirhan-WR/TP_project` |

Also include `eritrea_research_collector_v2`, `scrapers`, and `streamvault_pipeline_cloud-main`; each was identified by a top-level `README.md`, but no GitHub remote was detected. Show a clear “GitHub link not configured” label rather than a broken or guessed link. Catalog README paths are relative to `/root/projects/project_profile_pipeline`. During catalog assembly, include other top-level project folders if they have a `README.md` or Git remote, even if one of those signals is missing; mark missing README or remote explicitly. Exclude obvious non-project/support folders such as `data`, `reports`, `venv`, `.venv`, `node_modules`, and cache folders. Keep the final catalog as local static data; browsers cannot enumerate `/root/projects` at runtime. Do not invent README descriptions or repository URLs.

---

## 6. Project Structure

```text
project_profile_pipeline/
├── .azure/
│   └── project-plan.md
├── index.html                 # Static portfolio page
├── styles.css                 # Responsive layout and design tokens
├── projects.js                # Static README-derived project catalog
├── script.js                  # Render the static catalog; no persistence or remote calls
├── README.md                  # Website setup and catalog maintenance
└── ../TP_project/             # Existing notebook project; unchanged
```

---

## 7. Route Definitions

| # | Method | Path | Description | Request Body | Response Body | Status Codes |
|---|--------|------|-------------|-------------|--------------|-------------|
| 1 | GET | `/` | Serve the static portfolio entry page | — | `index.html` | 200, 404 |
| 2 | GET | `/styles.css` | Serve portfolio styles | — | `styles.css` | 200, 404 |
| 3 | GET | `/projects.js` | Serve the static README-derived catalog | — | `projects.js` | 200, 404 |
| 4 | GET | `/script.js` | Serve client-side catalog rendering and interactions | — | `script.js` | 200, 404 |

---

## 8. Next Steps

1. The site lives in the standalone `/root/projects/project_profile_pipeline` folder.
2. Run `python3 -m http.server 8000` from that folder for local preview.
3. Keep the catalog README paths relative to the portfolio folder and verify project links after catalog updates.
