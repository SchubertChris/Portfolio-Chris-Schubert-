// src/types/index.ts

export interface ProjectData {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    github?: string;
    liveDemo?: string;
    featured: boolean;
    category: string[];
}

// Weitere Typdefinitionen können hier hinzugefügt werden,
// wenn Sie andere Komponenten oder Datenstrukturen haben, die Typisierung benötigen