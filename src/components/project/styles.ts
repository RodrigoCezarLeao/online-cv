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

export const ProjectHeader = styled.div`
    background: ${(props) => props?.color || 'lightgrey'};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1em 0em;
`
export const ProjectTitle = styled.h1`
    text-align: center;
    cursor: default;
`;

export const ProjectTechnology = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;

    span {
        border-left: 2px solid black;
        padding: 0em 0.5em;
        cursor: default;
    }

    span:first-child {
        border: none;
    }
`

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
    cursor: default;
`

export const ProjectContentContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1em;
`

export const FeatureCard = styled.details`
    color: #1e1e5c;
    text-align: center;    
    border: 3px solid #1e1e5c;
    border-radius: 5px;
    width: 80%;
    
    summary {
        background: #1e1e5c;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }

    summary::marker {
        content: "+ ";
        font-size: 16px;
        font-weight: bold;
    }

    &[open] summary::marker {
        content: "- ";
    }
`

export const FeatureCardContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 0.5em;
    cursor: default;

    @media (max-width: 720px) {
        flex-direction: column;
        justify-content: center;
    }
`

export const FeatureCardDescription = styled.p`
    font-size: 0.9em;
    padding: 0.5em;
`

export const FeatureImg = styled.img`
    width: 40%;
    border-radius: 5px;
`