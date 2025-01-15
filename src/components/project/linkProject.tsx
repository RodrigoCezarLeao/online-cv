import { useNavigate } from "react-router-dom";
import { PROJECTS } from "../../projects";
import { LinkProjectHoverStyle, LinkProjectStyle } from "./styles";
import { useState } from "react";

interface LinkProjectProps {
    slug: string;
}

export const LinkProject = (props: LinkProjectProps) => {
    const [hover, setHover] = useState(false);
    const {slug} = props;

    const IsProjectValid = !!(PROJECTS.find(p => p.slug === slug));
    
    const navigate = useNavigate();

    return (IsProjectValid && 
            <span 
                style={hover ? LinkProjectHoverStyle : LinkProjectStyle} 
                onClick={() => {
                    navigate(slug)
                }}
                onMouseEnter={() => setHover(true)}
                onMouseOut={() => setHover(false)}
                >
                    {slug}
            </span>
    )
}