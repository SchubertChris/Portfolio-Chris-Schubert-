// src/data/projects.data.ts
import { ProjectData } from '../types';

export const PROJECTS_DATA: ProjectData[] = [
    {
        id: 1,
        title: "Dashboard - Wetter & News",
        description: "Eine moderne Dashboard-Seite mit geschütztem Zugriff, erstellt mit React, TypeScript und SCSS.",
        longDescription: "Eine interaktive und benutzerfreundliche Dashboard-Seite, die aktuelle Wetterdaten und Nachrichten anzeigt. Die Anwendung bietet eine geschützte Route für personalisierte Inhalte und wurde mit modernen Webtechnologien entwickelt.",
        image: "/Placeholder.webp",
        technologies: ["React", "TypeScript", "SCSS", "Vite"],
        github: "https://github.com/SchubertChris/React-Abschluss",
        liveDemo: "https://schubertchris.github.io/React-Abschluss/",
        featured: false,
        category: ["Web", "Frontend"]
    },
    {
        id: 2,
        title: "E-Commerce Dashboard",
        description: "Ein Admin-Dashboard für Online-Shops mit Datenvisualisierung.",
        longDescription: "Ein umfassendes Dashboard für E-Commerce-Administratoren mit Echtzeitstatistiken, Bestandsverwaltung und Kundenanalyse. Implementiert mit React für die Benutzeroberfläche und D3.js für komplexe Datenvisualisierungen.",
        image: "/Placeholder.webp",
        technologies: ["React", "Node.js", "MongoDB", "D3.js", "Express"],
        github: "https://github.com/SchubertChris",
        liveDemo: "https://dashboard-demo.com",
        featured: false,
        category: ["Web", "Frontend", "Backend"]
    },
    {
        id: 3,
        title: "Reise-App",
        description: "Eine mobile App für Reiseplanung und Entdeckung lokaler Attraktionen.",
        longDescription: "Eine benutzerfreundliche Reise-App, die es Benutzern ermöglicht, Reisen zu planen, lokale Attraktionen zu entdecken und Erinnerungen zu speichern. Die App nutzt Standortdienste und bietet personalisierte Empfehlungen.",
        image: "/Placeholder.webp",
        technologies: ["React Native", "Firebase", "Google Maps API"],
        github: "https://github.com/SchubertChris",
        featured: false,
        category: ["Mobile", "Frontend"]
    },
    {
        id: 4,
        title: "Task Management System",
        description: "Ein kollaboratives Aufgabenmanagementsystem für Teams.",
        longDescription: "Ein leistungsstarkes Aufgabenmanagementsystem, das Teamarbeit und Produktivität fördert. Bietet Funktionen wie Aufgabenzuweisung, Fortschrittsverfolgung, Deadlines und Integration mit gängigen Kalenderdiensten.",
        image: "/Placeholder.webp",
        technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
        github: "https://github.com/SchubertChris",
        liveDemo: "https://task-system-demo.com",
        featured: false,
        category: ["Web", "Fullstack"]
    },
    {
        id: 5,
        title: "Wetter-Widget",
        description: "Ein anpassbares Wetter-Widget mit animierten Darstellungen.",
        longDescription: "Ein elegantes und anpassbares Wetter-Widget, das aktuelle Wetterbedingungen und Vorhersagen mit schönen Animationen darstellt. Leicht zu integrieren in bestehende Webseiten und Apps.",
        image: "/Placeholder.webp",
        technologies: ["JavaScript", "CSS", "OpenWeather API"],
        github: "https://github.com/SchubertChris",
        liveDemo: "https://weather-widget-demo.com",
        featured: false,
        category: ["Web", "Frontend", "Widget"]
    },
    {
        id: 6,
        title: "Finanz-Tracker",
        description: "Eine App zur persönlichen Finanzverwaltung mit Budgetplanung.",
        longDescription: "Eine umfassende Anwendung zur Verwaltung persönlicher Finanzen. Ermöglicht Benutzern, Einnahmen und Ausgaben zu verfolgen, Budgets zu erstellen, finanzielle Ziele zu setzen und detaillierte Berichte zu generieren.",
        image: "/Placeholder.webp",
        technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
        github: "https://github.com/SchubertChris",
        liveDemo: "https://finance-tracker-demo.com",
        featured: false,
        category: ["Web", "Fullstack"]
    }
];