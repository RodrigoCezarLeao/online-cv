import { Technologies } from "./enums/technologies";
import { Project } from "./models/project";

export const PROJECTS: Project[] = [
    {
        slug: 'pdm-fs',
        name: {en: 'Predictive Maintenance', pt: 'Preditiva Digital'},
        description: {en: "Braskem's industrial plants monitoring", pt: "Monitoramento industrial de plantas da Braskem"},
        headerBackground: 'linear-gradient(to right,rgb(255, 249, 138),rgb(52, 148, 199))',
        technologies: [Technologies.CSharp, Technologies.ReactJs, Technologies.Python, Technologies.PostgreSQL],
        features: [
            {
                title: {en: "Project Architecture", pt: "Arquitetura do Projeto"},
                description: {en: "Robust backend structure (C#, PostgreSQL, Python, Azure, etc.) and a ReactJs dashboard",
                    pt: "Estrutura robusta de backend (C#, PostgreSQL, Python, Azure, etc.) e um dashboard feito com ReactJs"},
                img: "/projects/pdm/architecture.png",
            },
        ]
    }
]