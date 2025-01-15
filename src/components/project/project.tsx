import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PROJECTS } from "../../projects";
import { FeatureCard, FeatureCardContent, FeatureCardDescription, FeatureImg, ProjectContentContainer, ProjectDescription, ProjectHeader, ProjectTechnology, ProjectTitle, ReturnIcon } from "./styles";
import { ProjectFeature } from "../../models/projectFeature";
import { Technologies } from "../../enums/technologies";
import { LangKey } from "../../models/langText";

interface ProjectProps {
    lang: LangKey;
}


export const Project = (props: ProjectProps) => {
    const {lang} = props;

    const navigate = useNavigate();
    
    const location = useLocation();
    const slug = location?.pathname?.split('/')?.slice(-1)?.[0]; // pegar último elemento
    const project = PROJECTS.find(p => p.slug === slug);

    useEffect(() => {
        if (!slug || !project) navigate('/')
    }, [])

    

    return <div>  
        <ProjectHeader color={project?.headerBackground}>
            <ProjectTitle>{lang == "pt" ? "Projeto: " : "Project: "}{project?.name?.[lang]}</ProjectTitle>

            <ProjectTechnology>
            {project?.technologies.map((tech: Technologies, i: number) => {
                return  <span key={i}>{tech}</span>
            })}
            </ProjectTechnology>
        </ProjectHeader>      
        <ReturnIcon
            className="material-symbols-outlined"
            onClick={() => navigate(-1)}
        >
            keyboard_return
        </ReturnIcon>

        <ProjectDescription>
            {project?.description?.[lang]}
        </ProjectDescription>

        <ProjectContentContainer>
        {project?.features.map((feature: ProjectFeature, i: number) => {
            return <FeatureCard key={i}>
                <summary>{feature?.title?.[lang]}</summary>

                <FeatureCardContent>
                    <FeatureImg src={`${feature?.img}`} />

                    <FeatureCardDescription>{feature?.description?.[lang]}</FeatureCardDescription>
                </FeatureCardContent>
            </FeatureCard>
        })}
        </ProjectContentContainer>
    </div>
}