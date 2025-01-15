import { Header } from "../../components/header/header"
import { Lang } from "../../components/lang/lang"
import { LinkProject } from "../../components/project/linkProject"
import { HeaderModel } from "../../models/headerModel"

export const FullStack = () => {
    const headerParams: HeaderModel = {
        name: [
            {lang: "pt-br", text: "Rodrigo Cezar Leão"}, 
            {lang: "en-us", text: "Rodrigo Cezar Leao"} 
        ],
        role: [
            {lang: "pt-br", text: "Desenvolvedor Web - FullStack"}, 
            {lang: "en-us", text: "Web Developer - FullStack"}
        ],
        imgUrl: "https://github.com/RodrigoCezarLeao.png" ,
        background: 'linear-gradient(to right,rgb(16, 60, 192),rgb(143, 203, 247))',
    }
    
    return <>
        <Lang />
        <Header data={headerParams} />
        <LinkProject slug="pdm-fs" />
    </>
}