(function renderProjectCatalog() {
  "use strict";

  const grid = document.getElementById("project-grid");
  const count = document.getElementById("project-count");

  if (!grid || !count || !Array.isArray(projects)) {
    return;
  }

  const textElement = (tagName, className, text) => {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    element.textContent = text;
    return element;
  };

  const makeLink = (label, href) => {
    const link = textElement("a", "", label);
    link.href = href;
    if (/^https?:\/\//i.test(href)) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    return link;
  };

  count.textContent = `${projects.length} projects`;

  projects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const topline = document.createElement("div");
    topline.className = "card-topline";
    topline.append(
      textElement("span", "card-index", String(index + 1).padStart(2, "0")),
      textElement(
        "span",
        `card-status${project.featured ? " is-featured" : ""}`,
        project.featured ? "Featured" : "Project",
      ),
    );

    const title = textElement("h3", "", project.name);
    const folder = textElement("p", "project-folder", project.folder);
    const description = textElement("p", "project-description", project.description);

    const metadata = document.createElement("div");
    metadata.className = "card-meta";
    metadata.append(
      project.readme
        ? textElement("span", "", `README: ${project.readme}`)
        : textElement("span", "", "README not available"),
    );
    if (project.repositoryUrl) {
      metadata.append(makeLink("View repository ↗", project.repositoryUrl));
    } else {
      metadata.append(textElement("span", "", "GitHub link not configured"));
    }

    card.append(topline, title, folder, description, metadata);
    grid.append(card);
  });
})();
