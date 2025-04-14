import{r as n,R as S,j as e,g as N,F as y,h as E}from"./index-C2Qc6dzO.js";import{S as D}from"./Seo-BUiGT9pQ.js";import{P as A,s as P,S as C}from"./scrollUtils-CGovgXnS.js";/* empty css                    */const F=()=>{const t=S.useRef(null),r=n.useCallback(()=>{t.current&&requestAnimationFrame(()=>{if(t.current){const s=window.scrollY;t.current.style.transform=`translateY(${s*.3}px)`}})},[]);return n.useEffect(()=>{let s=!1;const o=()=>{s||(window.requestAnimationFrame(()=>{r(),s=!1}),s=!0)};return window.addEventListener("scroll",o,{passive:!0}),()=>window.removeEventListener("scroll",o)},[r]),e.jsxs("div",{className:"projects-hero-section",children:[e.jsx(A,{}),e.jsxs("div",{className:"hero-content",ref:t,children:[e.jsx("h1",{className:"animated-title",children:"Meine Projekte"}),e.jsx("p",{className:"animated-subtitle",children:"Eine Auswahl meiner Arbeit - von Webapplikationen bis Mobile Apps"})]}),e.jsxs("div",{className:"hero-background",children:[e.jsx("div",{className:"gradient-overlay"}),e.jsx("div",{className:"grid-overlay"})]})]})},R=n.memo(F),z=["Alle","Web","Mobile","Frontend","Backend","Fullstack","Widget"],W=({searchTerm:t,activeFilter:r,onSearchChange:s,onFilterChange:o})=>e.jsx("div",{className:"projects-filter-section",children:e.jsxs("div",{className:"filter-container",children:[e.jsx("div",{className:"category-filters",children:z.map(a=>e.jsx("button",{className:`filter-button ${r===a?"active":""}`,onClick:()=>o(a),children:a},a))}),e.jsxs("div",{className:"search-container",children:[e.jsx(N,{className:"search-icon"}),e.jsx("input",{type:"text",placeholder:"Projekte durchsuchen...",value:t,onChange:s,className:"search-input"})]})]})}),L=n.memo(W),M=({project:t,onClick:r})=>{const s=n.useRef(null),[o,a]=n.useState(0),[l,h]=n.useState(0),[g,m]=n.useState(1),p=d=>{if(!s.current)return;const c=s.current.getBoundingClientRect(),f=d.clientX-c.left,j=d.clientY-c.top,x=f/c.width,k=5-j/c.height*10,w=x*10-5;a(k),h(w),m(1.03)},b=()=>{a(0),h(0),m(1)},i={transform:`perspective(1000px) rotateX(${o}deg) rotateY(${l}deg) scale(${g})`,transition:"transform 0.2s ease"};return e.jsxs("div",{ref:s,className:"project-card",style:i,onMouseMove:p,onMouseLeave:b,children:[e.jsxs("div",{className:"project-image",children:[e.jsx("img",{src:t.image,alt:t.title}),e.jsx("div",{className:"project-overlay",children:e.jsx("button",{className:"view-details-btn",onClick:r,children:"Details ansehen"})})]}),e.jsxs("div",{className:"project-content",children:[e.jsx("h3",{children:t.title}),e.jsx("p",{children:t.description}),e.jsxs("div",{className:"project-tech",children:[t.technologies.slice(0,3).map((d,u)=>e.jsx("span",{className:"tech-tag",children:d},u)),t.technologies.length>3&&e.jsxs("span",{className:"tech-tag more",children:["+",t.technologies.length-3]})]})]})]})},B=({project:t,onClose:r})=>{const s=n.useRef(null),o=n.useCallback(l=>{s.current&&!s.current.contains(l.target)&&r()},[r]),a=n.useCallback(l=>{l.key==="Escape"&&r()},[r]);return n.useEffect(()=>{if(!t)return;const l=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${l}px`,document.body.style.width="100%",document.body.style.overflow="hidden",document.addEventListener("mousedown",o),document.addEventListener("keydown",a),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("keydown",a),document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="",window.scrollTo(0,l)}},[t,o,a]),t?e.jsx("div",{className:"project-modal-backdrop",children:e.jsxs("div",{className:"project-modal",ref:s,children:[e.jsx("button",{className:"close-button",onClick:r,"aria-label":"Schließen",children:"×"}),e.jsxs("div",{className:"modal-content",children:[e.jsx("div",{className:"modal-image",children:e.jsx("img",{src:t.image,alt:t.title,loading:"lazy",width:"100%",height:"auto"})}),e.jsxs("div",{className:"modal-details",children:[e.jsx("h2",{children:t.title}),e.jsx("p",{className:"modal-description",children:t.longDescription}),e.jsxs("div",{className:"tech-section",children:[e.jsx("h3",{children:"Technologien"}),e.jsx("div",{className:"tech-tags",children:t.technologies.map((l,h)=>e.jsx("span",{className:"tech-tag",children:l},h))})]}),e.jsxs("div",{className:"modal-links",children:[t.github&&e.jsxs("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"github-link","aria-label":"GitHub Repository",children:[e.jsx(y,{})," GitHub"]}),t.liveDemo&&e.jsxs("a",{href:t.liveDemo,target:"_blank",rel:"noopener noreferrer",className:"demo-link","aria-label":"Live Demo",children:[e.jsx(E,{})," Live Demo"]})]})]})]})]})}):null},T=n.memo(B),v=[{id:1,title:"Dashboard - Wetter & News",description:"Eine moderne Dashboard-Seite mit geschütztem Zugriff, erstellt mit React, TypeScript und SCSS.",longDescription:"Eine interaktive und benutzerfreundliche Dashboard-Seite, die aktuelle Wetterdaten und Nachrichten anzeigt. Die Anwendung bietet eine geschützte Route für personalisierte Inhalte und wurde mit modernen Webtechnologien entwickelt.",image:"/Placeholder.webp",technologies:["React","TypeScript","SCSS","Vite"],github:"https://github.com/SchubertChris/React-Abschluss",liveDemo:"https://schubertchris.github.io/React-Abschluss/",featured:!1,category:["Web","Frontend"]},{id:2,title:"E-Commerce Dashboard",description:"Ein Admin-Dashboard für Online-Shops mit Datenvisualisierung.",longDescription:"Ein umfassendes Dashboard für E-Commerce-Administratoren mit Echtzeitstatistiken, Bestandsverwaltung und Kundenanalyse. Implementiert mit React für die Benutzeroberfläche und D3.js für komplexe Datenvisualisierungen.",image:"/Placeholder.webp",technologies:["React","Node.js","MongoDB","D3.js","Express"],github:"https://github.com/SchubertChris",liveDemo:"https://dashboard-demo.com",featured:!1,category:["Web","Frontend","Backend"]},{id:3,title:"Reise-App",description:"Eine mobile App für Reiseplanung und Entdeckung lokaler Attraktionen.",longDescription:"Eine benutzerfreundliche Reise-App, die es Benutzern ermöglicht, Reisen zu planen, lokale Attraktionen zu entdecken und Erinnerungen zu speichern. Die App nutzt Standortdienste und bietet personalisierte Empfehlungen.",image:"/Placeholder.webp",technologies:["React Native","Firebase","Google Maps API"],github:"https://github.com/SchubertChris",featured:!1,category:["Mobile","Frontend"]},{id:4,title:"Task Management System",description:"Ein kollaboratives Aufgabenmanagementsystem für Teams.",longDescription:"Ein leistungsstarkes Aufgabenmanagementsystem, das Teamarbeit und Produktivität fördert. Bietet Funktionen wie Aufgabenzuweisung, Fortschrittsverfolgung, Deadlines und Integration mit gängigen Kalenderdiensten.",image:"/Placeholder.webp",technologies:["Vue.js","Laravel","MySQL","Redis"],github:"https://github.com/SchubertChris",liveDemo:"https://task-system-demo.com",featured:!1,category:["Web","Fullstack"]},{id:5,title:"Wetter-Widget",description:"Ein anpassbares Wetter-Widget mit animierten Darstellungen.",longDescription:"Ein elegantes und anpassbares Wetter-Widget, das aktuelle Wetterbedingungen und Vorhersagen mit schönen Animationen darstellt. Leicht zu integrieren in bestehende Webseiten und Apps.",image:"/Placeholder.webp",technologies:["JavaScript","CSS","OpenWeather API"],github:"https://github.com/SchubertChris",liveDemo:"https://weather-widget-demo.com",featured:!1,category:["Web","Frontend","Widget"]},{id:6,title:"Finanz-Tracker",description:"Eine App zur persönlichen Finanzverwaltung mit Budgetplanung.",longDescription:"Eine umfassende Anwendung zur Verwaltung persönlicher Finanzen. Ermöglicht Benutzern, Einnahmen und Ausgaben zu verfolgen, Budgets zu erstellen, finanzielle Ziele zu setzen und detaillierte Berichte zu generieren.",image:"/Placeholder.webp",technologies:["React","Node.js","MongoDB","Chart.js"],github:"https://github.com/SchubertChris",liveDemo:"https://finance-tracker-demo.com",featured:!1,category:["Web","Fullstack"]}],V=()=>{const[t,r]=n.useState(null),[s,o]=n.useState(v),[a,l]=n.useState(""),[h,g]=n.useState("Alle"),m=(i=a,d=h)=>{let u=[...v];i.trim()!==""&&(u=u.filter(c=>c.title.toLowerCase().includes(i.toLowerCase())||c.description.toLowerCase().includes(i.toLowerCase())||c.technologies.some(f=>f.toLowerCase().includes(i.toLowerCase())))),d!=="Alle"&&(d==="Featured"?u=u.filter(c=>c.featured):u=u.filter(c=>c.category.includes(d))),o(u)},p=i=>{g(i),m(a,i)},b=i=>{const d=i.target.value;l(d),m(d,h)};return n.useEffect(()=>{const i=P();return()=>{i()}},[]),e.jsxs("div",{className:"projects-page",children:[e.jsx(D,{title:"Projekte von CS-Designcode",description:"Entdecke die Projekte von Chris Schubert. Webdesign, UI/UX-Design und React-Projekte, die innovative Lösungen bieten.",keywords:"Projekte, Webdesign, React, UI Design, Frontend Entwicklung, Portfolio",image:"https://deine-domain.de/assets/projects-og-image.jpg",url:"https://deine-domain.de/projects"}),e.jsx(R,{}),e.jsx(L,{searchTerm:a,activeFilter:h,onSearchChange:b,onFilterChange:p}),e.jsx("div",{className:"projects-grid-section",children:e.jsx("div",{className:"projects-grid",children:s.length>0?s.map(i=>e.jsx(M,{project:i,onClick:()=>r(i)},i.id)):e.jsxs("div",{className:"no-results",children:[e.jsx("h3",{children:"Keine Projekte gefunden"}),e.jsx("p",{children:"Versuchen Sie eine andere Suche oder Filter-Kategorie."})]})})}),t&&e.jsx(T,{project:t,onClose:()=>r(null)}),e.jsx(C,{})]})};export{V as default};
