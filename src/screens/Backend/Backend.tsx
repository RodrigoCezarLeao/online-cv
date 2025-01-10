import { Header, HeaderModel } from "../../components/header/header"

export const Backend = () => {
    const headerParams: HeaderModel = {
        name: "Rodrigo Cezar Leão" ,
        role: "Desenvolvedor Web - Backend" ,
        imgUrl: "https://github.com/RodrigoCezarLeao.png" ,
        background: 'linear-gradient(to right,rgb(16, 60, 192),rgb(143, 203, 247))',
    }
    return <Header data={headerParams} />
}