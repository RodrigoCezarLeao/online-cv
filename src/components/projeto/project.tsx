import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PROJECTS } from "../../projects";
import { FeatureCard, FeatureCardContent, FeatureCardDescription, FeatureImg, ProjectDescription, ProjectTitle, ReturnIcon } from "./styles";
import { ProjectFeature } from "../../models/projectFeature";

export const Project = () => {
    const navigate = useNavigate();
    
    const location = useLocation();
    const slug = location?.pathname?.split('/')?.slice(-1)?.[0]; // pegar último elemento
    const project = PROJECTS.find(p => p.slug === slug);

    useEffect(() => {
        if (!slug || !project) navigate('/')
    }, [])

    

    return <div>        
        <ProjectTitle color={project?.headerBackground}>Projeto: {project?.name}</ProjectTitle>
        <ReturnIcon
            className="material-symbols-outlined"
            onClick={() => navigate(-1)}
        >
            keyboard_return
        </ReturnIcon>

        <ProjectDescription>
            {project?.description}
        </ProjectDescription>

        {project?.features.map((feature: ProjectFeature, i: number) => {
            return <FeatureCard>
                <summary>{feature?.title}</summary>

                <FeatureCardContent>
                    <FeatureImg src={`${feature?.img}`} />

                    <FeatureCardDescription>{feature?.description}</FeatureCardDescription>
                </FeatureCardContent>
            </FeatureCard>
        })}
    </div>
}