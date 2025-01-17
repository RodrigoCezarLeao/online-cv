import { ContactModel } from "../../models/contactModel";
import { ContactContainer, ContactLink } from "./styles";

interface ContactProps {
    data: ContactModel;
}

export const Contact = (props: ContactProps) => {
    const {data} = props;
    const sortedMedias = Object.keys(data);

    const buildUrl = (type: string) => {
        if (type === "github") return `https://github.com/${data.github}`
        if (type === "linkedin") return `https://www.linkedin.com/in/${data.linkedin}`        
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
                            <span>{data?.[media as keyof ContactModel]}</span>
                        
                    </ContactLink>
                )
            })}
        </ContactContainer>
        <hr/>
    </>
}