import { Technologies } from "../enums/technologies";
import { ProjectFeature } from "./projectFeature";

export interface Project {
    slug: string;
    name: string;
    description: string;
    headerBackground: string;
    technologies: Technologies[];
    features: ProjectFeature[];
}