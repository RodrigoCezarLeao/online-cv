import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PROJECTS } from "../../projects";
import { FeatureCard, FeatureCardContent, FeatureCardDescription, FeatureImg, ProjectContentContainer, ProjectDescription, ProjectHeader, ProjectTechnology, ProjectTitle, ReturnIcon } from "./styles";
import { ProjectFeature } from "../../models/projectFeature";
import { Technologies } from "../../enums/technologies";

export const Project = () => {
    const navigate = useNavigate();
    
    const location = useLocation();
    const slug = location?.pathname?.split('/')?.slice(-1)?.[0]; // pegar último elemento
    const project = PROJECTS.find(p => p.slug === slug);

    useEffect(() => {
        if (!slug || !project) navigate('/')
    }, [])

    

    return <div>  
        <ProjectHeader color={project?.headerBackground}>
            <ProjectTitle>Projeto: {project?.name}</ProjectTitle>

            <ProjectTechnology>
            {project?.technologies.map((tech: Technologies, i: number) => {
                return  <span>{tech}</span>
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
            {project?.description}
        </ProjectDescription>

        <ProjectContentContainer>
        {project?.features.map((feature: ProjectFeature, i: number) => {
            return <FeatureCard key={i}>
                <summary>{feature?.title}</summary>

                <FeatureCardContent>
                    <FeatureImg src={`${feature?.img}`} />

                    <FeatureCardDescription>{feature?.description}</FeatureCardDescription>
                </FeatureCardContent>
            </FeatureCard>
        })}
        </ProjectContentContainer>
    </div>
}