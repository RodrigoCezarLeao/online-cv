import { Header } from "../../components/header/header"
import { HeaderModel } from "../../models/headerModel";
import { LangKey } from "../../models/langText";

interface BackendProps {
    lang: LangKey;
}

export const Backend = (props: BackendProps) => {
    const {lang} = props;

    const headerParams: HeaderModel = {
        name: {
            pt: "Rodrigo Cezar Leão", 
            en: "Rodrigo Cezar Leao"
        },
        role: {
            pt: "Desenvolvedor Web - Backend", 
            en: "Web Developer - Backend"
        },
        imgUrl: "https://github.com/RodrigoCezarLeao.png" ,
        background: 'linear-gradient(to right,rgb(16, 60, 192),rgb(143, 203, 247))',
    }
    
    return <Header data={headerParams} lang={lang} />
}