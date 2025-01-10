import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PROJECTS } from "../../projects";

export const Project = () => {
    const navigate = useNavigate();
    
    const location = useLocation();
    const slug = location?.pathname?.split('/')?.slice(-1)?.[0]; // pegar último elemento
    const project = PROJECTS.find(p => p.slug === slug);

    useEffect(() => {
        if (!slug || !project) navigate('/')
    }, [])

    

    return <div>        
        <h1>Projeto {project?.name}</h1>
        <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
}