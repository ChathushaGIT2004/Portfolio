/* ============================================================
   main.js — index.html behavior
   Reads PROJECTS from data.js. No project content is hardcoded
   here — edit data.js to add/change projects.
   ============================================================ */

function projectCardHTML(project) {
  const badge = project.badge
    ? `<div class="project-badge">${project.badge}</div>`
    : "";

  const imageWrap = project.image
    ? `<div class="project-image"><img src="${project.image}" alt="${project.title}">${badge}</div>`
    : `<div class="project-image placeholder"><span class="ph-code mono">${initials(project.title)}</span>${badge}</div>`;

  const tags = project.tags.map(t => `<span class="tag">${t}</span>`).join("");

  return `
    <div class="project-card" data-category="${project.category}">
      ${imageWrap}
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.subtitle}</p>
        <div class="project-tech">${tags}</div>
        <div class="project-links">
          <a href="project.html?id=${project.id}" class="btn">View Details</a>
          ${project.links && project.links.source ? `<a href="${project.links.source}" class="btn btn-outline">Source Code</a>` : ""}
        </div>
      </div>
    </div>
  `;
}

function initials(title) {
  return title
    .split(" ")
    .map(w => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

class ProjectsGrid {
  constructor() {
    this.filterButtons = document.querySelectorAll(".filter-btn");
    this.grid = document.getElementById("projects-grid");
    this.render(PROJECTS);
    this.bindFilters();
  }

  bindFilters() {
    this.filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        this.filterButtons.forEach(b => b.classList.remove("active"));
        button.classList.add("active");
        const filter = button.getAttribute("data-filter");
        const filtered = filter === "all"
          ? PROJECTS
          : PROJECTS.filter(p => p.category === filter);
        this.render(filtered);
      });
    });
  }

  render(list) {
    this.grid.style.opacity = 0;
    setTimeout(() => {
      this.grid.innerHTML = list.map(projectCardHTML).join("");
      this.grid.style.opacity = 1;
    }, 150);
  }
}

class ContactForm {
  constructor() {
    this.form = document.getElementById("contactForm");
    if (!this.form) return;
    this.form.addEventListener("submit", e => {
      e.preventDefault();
      this.showSuccess();
      this.form.reset();
    });
  }

  showSuccess() {
    const btn = this.form.querySelector(".btn");
    const original = btn.textContent;
    btn.textContent = "Message sent";
    btn.style.background = "var(--ok)";
    btn.style.borderColor = "var(--ok)";
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = "";
      btn.style.borderColor = "";
    }, 2500);
  }
}

function setupMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => menu.classList.toggle("active"));
  menu.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => menu.classList.remove("active"))
  );
  document.addEventListener("click", e => {
    if (menu.classList.contains("active") && !menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove("active");
    }
  });
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      if (id === "#") return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 90, behavior: "smooth" });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  new ProjectsGrid();
  new ContactForm();
  setupMobileMenu();
  setupSmoothScroll();
});

// Minecraft-style XP progress: decorative only; page remains understandable without it.
(() => {
  const fill = document.getElementById('xpFill');
  if (!fill) return;
  const updateXP = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
    fill.style.width = pct + '%';
  };
  updateXP();
  window.addEventListener('scroll', updateXP, { passive: true });
  window.addEventListener('resize', updateXP);
})();

// Minecraft-style reveal, particles, and section travel transitions
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets = document.querySelectorAll('.section-header,.tech-panel,.project-card,.terminal,.hobby-card,.contact-method,.contact-form,.about-hobbies');
  revealTargets.forEach(el => el.classList.add('reveal-mc'));
  if (!reduce && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('mc-visible'); io.unobserve(e.target); }
    }), {threshold:.12});
    revealTargets.forEach(el => io.observe(el));
  } else revealTargets.forEach(el => el.classList.add('mc-visible'));

  if (!reduce) {
    const field = document.getElementById('mcParticles');
    for (let i=0;i<22;i++) {
      const p=document.createElement('i'); p.className='mc-particle';
      p.style.left=(Math.random()*100)+'%'; p.style.bottom=(-10-Math.random()*80)+'px';
      p.style.animationDuration=(7+Math.random()*10)+'s'; p.style.animationDelay=(-Math.random()*12)+'s';
      p.style.transform=`scale(${.6+Math.random()*1.2})`; field.appendChild(p);
    }
  }

  const transition=document.getElementById('mcTransition');
  document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const id=a.getAttribute('href'); if (!id || id==='#') return;
    const target=document.querySelector(id); if (!target) return;
    e.preventDefault();
    if (reduce) { target.scrollIntoView(); return; }
    transition.classList.remove('active'); void transition.offsetWidth; transition.classList.add('active');
    setTimeout(()=>target.scrollIntoView({behavior:'auto'}),430);
    setTimeout(()=>transition.classList.remove('active'),720);
  }));

  // URLs were not supplied yet: keep buttons visible without sending visitors to a wrong profile.
  document.querySelectorAll('[data-profile-missing]').forEach(a => a.addEventListener('click', e => {
    if (a.getAttribute('href') === '#') {
      e.preventDefault();
      const old=a.querySelector('span').textContent;
      a.querySelector('span').textContent='Add URL';
      setTimeout(()=>a.querySelector('span').textContent=old,1300);
    }
  }));
})();
