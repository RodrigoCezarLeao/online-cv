import { Header, HeaderModel } from "../../components/header/header"
import { LinkProject } from "../../components/projeto/linkProject"

export const FullStack = () => {
    const headerParams: HeaderModel = {
        name: "Rodrigo Cezar Leão" ,
        role: "Desenvolvedor Web - FullStack" ,
        imgUrl: "https://github.com/RodrigoCezarLeao.png" ,
        background: 'linear-gradient(to right,rgb(16, 60, 192),rgb(143, 203, 247))',
    }
    
    return <>
        <Header data={headerParams} />
        <LinkProject slug="pdm-fs" />
    </>
}