import { Technologies } from "../enums/technologies";
import { LangText } from "./langText";
import { ProjectFeature } from "./projectFeature";

export interface Project {
    slug: string;
    name: LangText;
    description: LangText;
    headerBackground: string;
    technologies: Technologies[];
    features: ProjectFeature[];
}