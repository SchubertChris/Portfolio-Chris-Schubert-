// src/data/projects.data.ts
import { ProjectData } from '../types';

export const PROJECTS_DATA: ProjectData[] = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "Eine moderne Portfolio-Website mit React, TypeScript und SCSS.",
        longDescription: "Diese Portfolio-Website wurde mit React und TypeScript entwickelt, um meine Projekte und Fähigkeiten zu präsentieren. Sie verfügt über verschiedene Animationen, interaktive Elemente und ist vollständig responsive.",
        image: "/project-portfolio.jpg",
        technologies: ["React", "TypeScript", "SCSS", "Vite"],
        github: "https://github.com/username/portfolio",
        liveDemo: "https://portfolio.dev",
        featured: true,
        category: ["Web", "Frontend"]
    },
    {
        id: 2,
        title: "E-Commerce Dashboard",
        description: "Admin-Dashboard für einen Online-Shop mit Datenvisualisierung.",
        longDescription: "Ein umfassendes Dashboard für E-Commerce-Administratoren mit Echtzeitstatistiken, Bestandsverwaltung und Kundenanalyse. Implementiert mit React für die Benutzeroberfläche und D3.js für komplexe Datenvisualisierungen.",
        image: "/project-dashboard.jpg",
        technologies: ["React", "Node.js", "MongoDB", "D3.js", "Express"],
        github: "https://github.com/username/dashboard",
        liveDemo: "https://dashboard-demo.com",
        featured: true,
        category: ["Web", "Frontend", "Backend"]
    },
    {
        id: 3,
        title: "Reise-App",
        description: "Mobile App für Reiseplanung und Entdeckung lokaler Attraktionen.",
        longDescription: "Eine benutzerfreundliche Reise-App, die es Benutzern ermöglicht, Reisen zu planen, lokale Attraktionen zu entdecken und Erinnerungen zu speichern. Die App nutzt Standortdienste und bietet personalisierte Empfehlungen.",
        image: "/project-travel.jpg",
        technologies: ["React Native", "Firebase", "Google Maps API"],
        github: "https://github.com/username/travel-app",
        featured: false,
        category: ["Mobile", "Frontend"]
    },
    {
        id: 4,
        title: "Task Management System",
        description: "Kollaboratives Aufgabenmanagementsystem für Teams.",
        longDescription: "Ein leistungsstarkes Aufgabenmanagementsystem, das Teamarbeit und Produktivität fördert. Bietet Funktionen wie Aufgabenzuweisung, Fortschrittsverfolgung, Deadlines und Integration mit gängigen Kalenderdiensten.",
        image: "/project-task.jpg",
        technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
        github: "https://github.com/username/task-system",
        liveDemo: "https://task-system-demo.com",
        featured: true,
        category: ["Web", "Fullstack"]
    },
    {
        id: 5,
        title: "Wetter-Widget",
        description: "Ein anpassbares Wetter-Widget mit animierten Darstellungen.",
        longDescription: "Ein elegantes und anpassbares Wetter-Widget, das aktuelle Wetterbedingungen und Vorhersagen mit schönen Animationen darstellt. Leicht zu integrieren in bestehende Webseiten und Apps.",
        image: "/project-weather.jpg",
        technologies: ["JavaScript", "CSS", "OpenWeather API"],
        github: "https://github.com/username/weather-widget",
        liveDemo: "https://weather-widget-demo.com",
        featured: false,
        category: ["Web", "Frontend", "Widget"]
    },
    {
        id: 6,
        title: "Finanz-Tracker",
        description: "Persönliche Finanzverwaltung mit Budget-Planung und Ausgabenverfolgung.",
        longDescription: "Eine umfassende Anwendung zur Verwaltung persönlicher Finanzen. Ermöglicht Benutzern, Einnahmen und Ausgaben zu verfolgen, Budgets zu erstellen, finanzielle Ziele zu setzen und detaillierte Berichte zu generieren.",
        image: "/project-finance.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
        github: "https://github.com/username/finance-tracker",
        liveDemo: "https://finance-tracker-demo.com",
        featured: false,
        category: ["Web", "Fullstack"]
    }
];