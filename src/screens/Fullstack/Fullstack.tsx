import { Contact } from "../../components/contact/contact";
import { Header } from "../../components/header/header"
import { LinkProject } from "../../components/project/linkProject"
import { ContactModel } from "../../models/contactModel";
import { HeaderModel } from "../../models/headerModel"
import { LangKey } from "../../models/langText";

interface FullStackProps {
    lang: LangKey;
}

export const FullStack = (props: FullStackProps) => {
    const {lang} = props;

    const headerParams: HeaderModel = {
        name: {
            pt: "Rodrigo Cezar Leão", 
            en: "Rodrigo Cezar Leao"
        },
        role: {
            pt: "Desenvolvedor Web - Fullstack", 
            en: "Web Developer - Fullstack"
        },
        imgUrl: "https://github.com/RodrigoCezarLeao.png" ,
        background: 'linear-gradient(to right,rgb(16, 60, 192),rgb(143, 203, 247))',
    }
    const contactParams: ContactModel = {
        github: "rodrigocezarleao",
        linkedin: "rodrigocezarleao",
        mail: "rodrigoczleo@yahoo.com.br",
        whatsapp: "+55 (21) 99829-6447",
    }
    
    return <>
        <Header data={headerParams} lang={lang}/>
        <Contact data={contactParams}/>
        <LinkProject slug="pdm-fs" />        
    </>
}