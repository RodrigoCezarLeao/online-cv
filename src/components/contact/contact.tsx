import { ContactContainer, ContactLink } from "./styles";

interface ContactProps {
    linkedin?: string;
    github?: string;
    mail?: string;
    whatsapp?: string;
    instagram?: string;
}

export const Contact = (props: ContactProps) => {
    const sortedMedias = Object.keys(props);

    const buildUrl = (type: string) => {
        if (type === "github") return `https://github.com/${props.github}`
        if (type === "linkedin") return `https://www.linkedin.com/in/${props.linkedin}`        
    }

    const buildLogoImgUrl = (type: string) => {
        return `/contact/${type}.png`
    }

    return <>
        <hr/>
        <ContactContainer>        
            {sortedMedias.map((media: string, i: number) => {
                return (
                    <ContactLink 
                        href={buildUrl(media)} 
                        target={media !== "mail" && media != "whatsapp" ? "_blank" : ""}
                        rel="noopener noreferrer" 
                        key={i}
                    > 
                        
                            <img src={buildLogoImgUrl(media)} />
                            <span>{props?.[media as keyof ContactProps]}</span>
                        
                    </ContactLink>
                )
            })}
        </ContactContainer>
        <hr/>
    </>
}