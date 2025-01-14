import { ProjectFeature } from "./projectFeature";

export interface Project {
    slug: string;
    name: string;
    description: string;
    headerBackground: string;
    features: ProjectFeature[];
}