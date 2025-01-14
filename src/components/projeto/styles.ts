import styled from "styled-components"

export const LinkProjectStyle: React.CSSProperties = {
    cursor: 'pointer',
    color: 'blue',
}

export const LinkProjectHoverStyle: React.CSSProperties = {
    cursor: 'pointer',
    color: 'blue',
    textDecoration: 'underline',
}

export const ProjectTitle = styled.h1`
    background: ${(props) => props?.color || 'lightgrey'};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em 0em;
`;

export const ReturnIcon = styled.span`
    cursor: pointer;    
    position: absolute;
    top: 0;
    left: 0;

    &:hover {
        text-shadow: 2px 2px 5px #000000bd;
    }
`

export const ProjectDescription = styled.p `
    font-size: 1.5em;
    text-align: center;
    padding: 1em;
`

export const FeatureCard = styled.details`
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: "+";
        position: absolute;
        left: 0;
        font-size: 16px;
        font-weight: bold;
    }
`

export const FeatureCardContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const FeatureCardDescription = styled.p`
    font-size: 0.9em;
    padding: 0.5em;
`

export const FeatureImg = styled.img`
    width: 400px;
    border: 5px solid lightgrey;
    border-radius: 5px;
`