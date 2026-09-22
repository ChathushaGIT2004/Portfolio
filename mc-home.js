const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
window.addEventListener('load',()=>setTimeout(()=>$('#loader')?.classList.add('hide'),650));
const menu=$('#menu'),side=$('#side'); menu?.addEventListener('click',()=>side.classList.toggle('open'));
$$('.side a').forEach(a=>a.addEventListener('click',()=>side.classList.remove('open')));
const reveal=()=>$$('.reveal').forEach(el=>{if(el.getBoundingClientRect().top<innerHeight*.9)el.classList.add('show')}); addEventListener('scroll',reveal,{passive:true}); reveal();
addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight; $('#xp').style.width=(scrollY/max*100)+'%'; let cur='home'; $$('main section[id]').forEach(s=>{if(scrollY>=s.offsetTop-180)cur=s.id}); $$('.side nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));},{passive:true});

const allProjects=[...FEATURED_SOFTWARE,...PROJECTS.map(p=>({id:p.id,title:p.title,type:p.subtitle,category:p.category,badge:p.badge,image:p.image,description:(p.overview||[])[0]||p.subtitle,groups:{Technologies:p.tags||[]},comingSoon:p.comingSoon}))];
const grid=$('#projectGrid');
function projectCard(p){const groups=Object.entries(p.groups||{}).map(([k,v])=>`<div class="tech-row"><b>${k}</b><div>${v.map(x=>`<span>${x}</span>`).join('')}</div></div>`).join(''); const href=PROJECTS.some(x=>x.id===p.id)?`project.html?id=${p.id}`:'#'; return `<article class="project-card reveal show" data-category="${p.category}">${p.badge?`<small class="badge">${p.badge}</small>`:''}<div class="project-visual">${p.image?`<img src="${p.image}" alt="${p.title}">`:`<i class="fa-solid fa-code"></i>`}</div><div class="project-body"><small>${p.type}</small><h3>${p.title}</h3><p>${p.description}</p><div class="tech-groups">${groups}</div>${p.comingSoon?`<span class="project-link muted">CASE STUDY COMING SOON</span>`:href==='#'?`<span class="project-link muted">PROJECT OVERVIEW</span>`:`<a class="project-link" href="${href}">VIEW CASE STUDY →</a>`}</div></article>`}
function render(filter='all'){if(!grid)return; const arr=allProjects.filter(p=>filter==='all'||p.category.includes(filter)); grid.innerHTML=arr.map(projectCard).join('')}
render(); $$('#filters button').forEach(b=>b.addEventListener('click',()=>{$$('#filters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');grid.classList.add('switching');setTimeout(()=>{render(b.dataset.filter);grid.classList.remove('switching')},180)}));

let shown=false; const ach=$('#achievement'); addEventListener('scroll',()=>{if(!shown&&scrollY>$('#projects').offsetTop-250){shown=true;$('#achievementText').textContent='PROJECT LIBRARY';ach.classList.add('show');setTimeout(()=>ach.classList.remove('show'),2600)}},{passive:true});
