import { Header } from "../../components/header/header"
import { LinkProject } from "../../components/project/linkProject"
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
    
    return <>
        <Header data={headerParams} lang={lang}/>
        <LinkProject slug="pdm-fs" />
    </>
}