/* ============================================================
   project.js — powers project.html
   This is the "central" project page: it reads ?id=... from the
   URL, looks the project up in PROJECTS (data.js), and renders
   the whole page. Add a new project by adding it to data.js —
   this file never needs to change.
   ============================================================ */

function getProjectId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function renderNotFound() {
  document.getElementById("app").innerHTML = `
    <section class="project-header">
      <div class="container">
        <a href="index.html#projects" class="back-link mono">&larr; Back to projects</a>
        <h1 class="project-title">Project not found</h1>
        <p class="project-subtitle">Check the link, or head back to the full project list.</p>
      </div>
    </section>
  `;
}

function renderComingSoon(project) {
  return `
    <section class="project-header">
      <div class="container">
        <a href="index.html#projects" class="back-link mono">&larr; Back to projects</a>
        <h1 class="project-title">${project.title}</h1>
        <p class="project-subtitle">${project.subtitle}</p>
      </div>
    </section>
    <section class="project-detail-content">
      <div class="container">
        <div class="detail-block">
          <div class="detail-block-title">Overview</div>
          <div class="description-text">
            ${project.overview.map(p => `<p>${p}</p>`).join("")}
          </div>
        </div>
        <div class="detail-block">
          <div class="detail-block-title">Tech Stack</div>
          <div class="tag-row">${project.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        </div>
        <div class="coming-soon-note">Full case study coming soon — add timeline, features, and results for this project in data.js.</div>
      </div>
    </section>
  `;
}

function renderFull(project) {
  const image = project.image
    ? `<div class="detail-image"><img src="${project.image}" alt="${project.title}"></div>`
    : "";

  const features = (project.features || []).map(f => `
    <div class="feature-card">
      <h4>${f.title}</h4>
      <p>${f.description}</p>
    </div>
  `).join("");

  const challenges = (project.challenges || []).map(c => `
    <div class="challenge-item">
      <h4>${c.title}</h4>
      <p>${c.description}</p>
    </div>
  `).join("");

  const results = (project.results || []).map(r => `
    <div class="sidebar-row"><span class="k">${r.label}</span><span class="v">${r.value}</span></div>
  `).join("");

  const details = project.details ? `
    <div class="sidebar-row"><span class="k">Client</span><span class="v">${project.details.client || "—"}</span></div>
    <div class="sidebar-row"><span class="k">Industry</span><span class="v">${project.details.industry || "—"}</span></div>
    <div class="sidebar-row"><span class="k">Launch</span><span class="v">${project.details.launch || "—"}</span></div>
    <div class="sidebar-row"><span class="k">Type</span><span class="v">${project.details.type || "—"}</span></div>
  ` : "";

  return `
    <section class="project-header">
      <div class="container">
        <a href="index.html#projects" class="back-link mono">&larr; Back to projects</a>
        <h1 class="project-title">${project.title}</h1>
        <p class="project-subtitle">${project.subtitle}</p>
        <div class="spec-strip">
          <div class="spec-cell"><span class="spec-label">Timeline</span><span class="spec-value">${project.meta.timeline}</span></div>
          <div class="spec-cell"><span class="spec-label">Role</span><span class="spec-value">${project.meta.role}</span></div>
          <div class="spec-cell"><span class="spec-label">Status</span><span class="spec-value">${project.meta.status}</span></div>
          <div class="spec-cell"><span class="spec-label">Team</span><span class="spec-value">${project.meta.team}</span></div>
        </div>
      </div>
    </section>

    <section class="project-detail-content">
      <div class="container">
        <div class="content-grid">
          <div class="main-content">

            <div class="detail-block">
              ${image}
              <div class="project-links">
                <a href="${project.links.demo}" class="btn btn-full">View Demo</a>
                <a href="${project.links.source}" class="btn btn-outline btn-full">Source Code</a>
              </div>
            </div>

            <div class="detail-block">
              <div class="detail-block-title">Project Overview</div>
              <div class="description-text">${project.overview.map(p => `<p>${p}</p>`).join("")}</div>
            </div>

            ${features ? `
            <div class="detail-block">
              <div class="detail-block-title">Key Features</div>
              <div class="features-grid">${features}</div>
            </div>` : ""}

            ${challenges ? `
            <div class="detail-block">
              <div class="detail-block-title">Challenges &amp; Solutions</div>
              ${challenges}
            </div>` : ""}

          </div>

          <div class="sidebar">
            <div class="detail-block">
              <div class="detail-block-title">Tech Stack</div>
              <div class="tag-row">${project.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
            </div>

            ${details ? `
            <div class="detail-block">
              <div class="detail-block-title">Project Details</div>
              ${details}
            </div>` : ""}

            ${results ? `
            <div class="detail-block">
              <div class="detail-block-title">Results</div>
              ${results}
            </div>` : ""}
          </div>
        </div>
      </div>
    </section>
  `;
}

function init() {
  const id = getProjectId();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    renderNotFound();
    return;
  }

  document.title = `${project.title} | C.J Dewmith`;

  document.getElementById("app").innerHTML = project.comingSoon
    ? renderComingSoon(project)
    : renderFull(project);
}

document.addEventListener("DOMContentLoaded", init);
