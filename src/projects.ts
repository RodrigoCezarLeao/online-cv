import { Project } from "./models/project";

export const PROJECTS: Project[] = [
    {
        slug: 'pdm-fs',
        name: 'Predictive Maintenance',
        description: "Braskem's industrial plants monitoring",
        headerBackground: 'linear-gradient(to right,rgb(255, 249, 138),rgb(52, 148, 199))',
        features: [
            {
                title: "Project Architecture",
                description: "Robust backend structure (C#, PostgreSQL, Python, Azure, etc.) and a ReactJs dashboard",
                img: "/projects/pdm/architecture.png",
            },
        ]
    }
]