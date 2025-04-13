# 🚀 Portfolio Chris Schubert

<div align="center">
  <img src="./public/Profilbild2.webp" alt="Portfolio Preview" width="300px" />
</div>

## 📋 Inhaltsverzeichnis

- [Übersicht](#-übersicht)
- [Features](#-features)
- [Technologie-Stack](#-technologie-stack)
- [Projektstruktur](#-projektstruktur)
- [Installation](#-installation)
- [Entwicklung starten](#-entwicklung-starten)
- [Deployment](#-deployment)
- [Komponenten](#-komponenten)

## 🔍 Übersicht

Dieses Portfolio ist eine moderne, responsive Single-Page-Anwendung, die mit React, TypeScript und SCSS entwickelt wurde. Die Seite präsentiert meine Projekte, Fähigkeiten und beruflichen Erfahrungen in einer visuell ansprechenden und benutzerfreundlichen Weise.

## ✨ Features

- 🎨 Modernes, responsives Design
- 🧩 Modularer Komponentenaufbau
- 🔄 Interaktive UI-Elemente mit Animationen
- 📱 Vollständig responsive auf allen Geräten
- ⚡ Optimiert für Geschwindigkeit und Performance
- 📊 Interaktive Skill-Visualisierungen
- 📝 Dynamische Projektfilterung und -anzeige
- 📬 Kontaktformular
- 🔄 Nahtlose Seitenübergänge

## 🛠 Technologie-Stack

<div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/SCSS-Modules-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SCSS" />
  <img src="https://img.shields.io/badge/Vite-Build%20Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/GSAP-Animationen-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
  <img src="https://img.shields.io/badge/Vercel-Deployment-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</div>

- **Frontend Framework**: React mit TypeScript
- **Styling**: SCSS mit modularem Aufbau
- **Build-Tool**: Vite
- **Animationen**: GSAP (GreenSock Animation Platform)
- **Deployment**: Vercel
- **Weitere Tools**:
  - Particle Effekte
  - CountUp Animationen
  - Responsive Design mit CSS Grid und Flexbox
  - Komponententests mit React Testing Library

## 📂 Projektstruktur

Die Anwendung ist nach Funktionalität und Seitenkomponenten strukturiert:

```
src/
📂 components/           # Wiederverwendbare Komponenten
 ┣ 📂 about/            # About-Seitenkomponenten
 ┃ ┣ ⚛️ AboutDetails.tsx
 ┃ ┣ ⚛️ AboutHero.tsx
 ┃ ┣ ⚛️ InterestsSection.tsx
 ┃ ┣ ⚛️ SkillsSection.tsx
 ┃ ┣ ⚛️ TimelineItem.tsx
 ┃ ┗ ⚛️ TimelineSection.tsx
 ┣ 📂 contact/          # Kontakt-Seitenkomponenten
 ┃ ┣ ⚛️ ContactForm.tsx
 ┃ ┣ ⚛️ ContactHero.tsx
 ┃ ┗ ⚛️ ContactInfoSection.tsx
 ┣ 📂 home/             # Home-Seitenkomponenten
 ┃ ┣ ⚛️ AboutSection.tsx
 ┃ ┣ ⚛️ HeroSection.tsx
 ┃ ┣ ⚛️ ProjectCard.tsx
 ┃ ┣ ⚛️ ProjectsSection.tsx
 ┃ ┣ ⚛️ SkillsSection.tsx
 ┃ ┗ ⚛️ TechSymbols.tsx
 ┣ 📂 layout/           # Layout-Komponenten
 ┃ ┣ ⚛️ Footer.tsx
 ┃ ┣ ⚛️ Layout.tsx
 ┃ ┗ ⚛️ Navbar.tsx
 ┣ 📂 projects/         # Projekt-Seitenkomponenten
 ┃ ┣ ⚛️ ProjectCard.tsx
 ┃ ┣ ⚛️ ProjectFilter.tsx
 ┃ ┣ ⚛️ ProjectHero.tsx
 ┃ ┗ ⚛️ ProjectModal.tsx
 ┣ 📂 shared/           # Geteilte Komponenten
 ┃ ┣ ⚛️ ContactCTA.tsx
 ┃ ┗ ⚛️ Seo.tsx
 ┗ 📂 ui/               # UI-Elemente
   ┣ ⚛️ CountUpAnimation.tsx
   ┣ ⚛️ NeonButtonMitTooltip.tsx
   ┣ ⚛️ ParticleBackground.tsx
   ┣ ⚛️ ScrollToTop.tsx
   ┣ ⚛️ ScrollToTopOnRouteChange.tsx
   ┗ ⚛️ SkillBar.tsx
📂 data/                 # Statische Daten
 ┗ 📊 projects.data.ts
📂 pages/                # Hauptseitenkomponenten
 ┣ ⚛️ About.tsx
 ┣ ⚛️ Contact.tsx
 ┣ ⚛️ Home.tsx
 ┗ ⚛️ Projects.tsx
📂 styles/               # SCSS-Styles
 ┣ 📂 abstracts/        # Variablen, Mixins
 ┃ ┣ 🎨 _global.scss
 ┃ ┣ 🎨 _mixins.scss
 ┃ ┗ 🎨 _variables.scss
 ┣ 📂 base/             # Basisstyles
 ┃ ┣ 🎨 _animations.scss
 ┃ ┣ 🎨 _reset.scss
 ┃ ┗ 🎨 _typography.scss
 ┣ 📂 layout/           # Layout-Styles
 ┃ ┣ 🎨 Footer.scss
 ┃ ┣ 🎨 Layout.scss
 ┃ ┗ 🎨 Navbar.scss
 ┣ 📂 pages/            # Seitenspezifische Styles
 ┃ ┣ 🎨 About.scss
 ┃ ┣ 🎨 Contact.scss
 ┃ ┣ 🎨 Home.scss
 ┃ ┗ 🎨 Projects.scss
 ┣ 📂 shared/           # Geteilte Styles
 ┃ ┣ 🎨 ContactCTA.scss
 ┃ ┗ 🎨 ProjectCard.scss
 ┗ 📂 utilities/        # Hilfsstyles
   ┣ 🎨 _NeonButtonMitTooltip.scss
   ┗ 🎨 _ParticleBackground.scss
📂 types/                # TypeScript-Typdefinitionen
 ┗ 📜 index.ts
```

## 🚀 Installation

```bash
# Repository klonen
git clone https://github.com/SchubertChris/portfolio-chris-schubert.git
cd portfolio-chris-schubert

# Abhängigkeiten installieren
npm install
```

## 💻 Entwicklung starten

```bash
# Entwicklungsserver starten
npm run dev

# Build für Produktion erstellen
npm run build

# Build lokal testen
npm run preview
```

## 🚢 Deployment

Das Projekt wird automatisch auf Vercel deployt. Jeder Push auf den Main-Branch löst ein neues Deployment aus.

Konfiguration befindet sich in:
- `.github/workflows/deploy.yml` für CI/CD-Workflow
- `vercel.json` für Vercel-spezifische Konfiguration

## 🧩 Komponenten

### Hauptseiten

- **Home**: Landing Page mit Hero-Sektion, Kurzvorstellung, Projektgalerie und Skills
- **About**: Detaillierte Informationen zu meinem Hintergrund, Fähigkeiten, Interessen und Zeitachse
- **Projects**: Umfassende Projektgalerie mit Filtern und detaillierten Projektansichten
- **Contact**: Kontaktformular und Kontaktinformationen

### UI-Komponenten

- **ParticleBackground**: Interaktiver Partikelhintergrund für visuelles Interesse
- **SkillBar**: Visualisierung von Fähigkeiten mit animierten Fortschrittsbalken
- **CountUpAnimation**: Animierte Zahlen für die Darstellung von Statistiken
- **NeonButtonMitTooltip**: Stilisierte Buttons mit Hover-Effekten und Tooltips
- **ScrollToTop**: Button zum einfachen Zurückscrollen zum Seitenanfang

### Besondere Features

- **Modularer SCSS-Aufbau**: Styles sind in logische Module unterteilt
- **Responsive Design**: Optimales Erscheinungsbild auf allen Geräten
- **Performanceoptimierung**: Lazy Loading, Code-Splitting und optimierte Assets
- **Zugänglichkeit**: Semantisches HTML und ARIA-Attribute für bessere Zugänglichkeit

---

# English Version

==================
ENGLISH
==================

# 🚀 Portfolio Chris Schubert

<div align="center">
  <img src="./public/Profilbild2.webp" alt="Portfolio Preview" width="300px" />
</div>

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Development](#-development)
- [Deployment](#-deployment)
- [Components](#-components)

## 🔍 Overview

This portfolio is a modern, responsive single-page application developed with React, TypeScript, and SCSS. The site showcases my projects, skills, and professional experience in a visually appealing and user-friendly manner.

## ✨ Features

- 🎨 Modern, responsive design
- 🧩 Modular component architecture
- 🔄 Interactive UI elements with animations
- 📱 Fully responsive on all devices
- ⚡ Optimized for speed and performance
- 📊 Interactive skill visualizations
- 📝 Dynamic project filtering and display
- 📬 Contact form
- 🔄 Seamless page transitions

## 🛠 Technology Stack

<div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/SCSS-Modules-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SCSS" />
  <img src="https://img.shields.io/badge/Vite-Build%20Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/GSAP-Animations-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
  <img src="https://img.shields.io/badge/Vercel-Deployment-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</div>

- **Frontend Framework**: React with TypeScript
- **Styling**: SCSS with modular architecture
- **Build Tool**: Vite
- **Animations**: GSAP (GreenSock Animation Platform)
- **Deployment**: Vercel
- **Additional Tools**:
  - Particle effects
  - CountUp animations
  - Responsive design with CSS Grid and Flexbox
  - Component testing with React Testing Library

## 📂 Project Structure

The application is structured by functionality and page components:

```
src/
📂 components/           # Reusable components
 ┣ 📂 about/            # About page components
 ┃ ┣ ⚛️ AboutDetails.tsx
 ┃ ┣ ⚛️ AboutHero.tsx
 ┃ ┣ ⚛️ InterestsSection.tsx
 ┃ ┣ ⚛️ SkillsSection.tsx
 ┃ ┣ ⚛️ TimelineItem.tsx
 ┃ ┗ ⚛️ TimelineSection.tsx
 ┣ 📂 contact/          # Contact page components
 ┃ ┣ ⚛️ ContactForm.tsx
 ┃ ┣ ⚛️ ContactHero.tsx
 ┃ ┗ ⚛️ ContactInfoSection.tsx
 ┣ 📂 home/             # Home page components
 ┃ ┣ ⚛️ AboutSection.tsx
 ┃ ┣ ⚛️ HeroSection.tsx
 ┃ ┣ ⚛️ ProjectCard.tsx
 ┃ ┣ ⚛️ ProjectsSection.tsx
 ┃ ┣ ⚛️ SkillsSection.tsx
 ┃ ┗ ⚛️ TechSymbols.tsx
 ┣ 📂 layout/           # Layout components
 ┃ ┣ ⚛️ Footer.tsx
 ┃ ┣ ⚛️ Layout.tsx
 ┃ ┗ ⚛️ Navbar.tsx
 ┣ 📂 projects/         # Project page components
 ┃ ┣ ⚛️ ProjectCard.tsx
 ┃ ┣ ⚛️ ProjectFilter.tsx
 ┃ ┣ ⚛️ ProjectHero.tsx
 ┃ ┗ ⚛️ ProjectModal.tsx
 ┣ 📂 shared/           # Shared components
 ┃ ┣ ⚛️ ContactCTA.tsx
 ┃ ┗ ⚛️ Seo.tsx
 ┗ 📂 ui/               # UI elements
   ┣ ⚛️ CountUpAnimation.tsx
   ┣ ⚛️ NeonButtonMitTooltip.tsx
   ┣ ⚛️ ParticleBackground.tsx
   ┣ ⚛️ ScrollToTop.tsx
   ┣ ⚛️ ScrollToTopOnRouteChange.tsx
   ┗ ⚛️ SkillBar.tsx
📂 data/                 # Static data
 ┗ 📊 projects.data.ts
📂 pages/                # Main page components
 ┣ ⚛️ About.tsx
 ┣ ⚛️ Contact.tsx
 ┣ ⚛️ Home.tsx
 ┗ ⚛️ Projects.tsx
📂 styles/               # SCSS styles
 ┣ 📂 abstracts/        # Variables, mixins
 ┃ ┣ 🎨 _global.scss
 ┃ ┣ 🎨 _mixins.scss
 ┃ ┗ 🎨 _variables.scss
 ┣ 📂 base/             # Base styles
 ┃ ┣ 🎨 _animations.scss
 ┃ ┣ 🎨 _reset.scss
 ┃ ┗ 🎨 _typography.scss
 ┣ 📂 layout/           # Layout styles
 ┃ ┣ 🎨 Footer.scss
 ┃ ┣ 🎨 Layout.scss
 ┃ ┗ 🎨 Navbar.scss
 ┣ 📂 pages/            # Page-specific styles
 ┃ ┣ 🎨 About.scss
 ┃ ┣ 🎨 Contact.scss
 ┃ ┣ 🎨 Home.scss
 ┃ ┗ 🎨 Projects.scss
 ┣ 📂 shared/           # Shared styles
 ┃ ┣ 🎨 ContactCTA.scss
 ┃ ┗ 🎨 ProjectCard.scss
 ┗ 📂 utilities/        # Utility styles
   ┣ 🎨 _NeonButtonMitTooltip.scss
   ┗ 🎨 _ParticleBackground.scss
📂 types/                # TypeScript type definitions
 ┗ 📜 index.ts
```

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/SchubertChris/portfolio-chris-schubert.git
cd portfolio-chris-schubert

# Install dependencies
npm install
```

## 💻 Development

```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## 🚢 Deployment

The project is automatically deployed to Vercel. Each push to the main branch triggers a new deployment.

Configuration can be found in:
- `.github/workflows/deploy.yml` for CI/CD workflow
- `vercel.json` for Vercel-specific configuration

## 🧩 Components

### Main Pages

- **Home**: Landing page with hero section, brief introduction, project gallery, and skills
- **About**: Detailed information about my background, skills, interests, and timeline
- **Projects**: Comprehensive project gallery with filters and detailed project views
- **Contact**: Contact form and contact information

### UI Components

- **ParticleBackground**: Interactive particle background for visual interest
- **SkillBar**: Visualization of skills with animated progress bars
- **CountUpAnimation**: Animated numbers for displaying statistics
- **NeonButtonMitTooltip**: Stylized buttons with hover effects and tooltips
- **ScrollToTop**: Button to easily scroll back to the top of the page

### Special Features

- **Modular SCSS Architecture**: Styles are divided into logical modules
- **Responsive Design**: Optimal appearance on all devices
- **Performance Optimization**: Lazy loading, code splitting, and optimized assets
- **Accessibility**: Semantic HTML and ARIA attributes for better accessibility