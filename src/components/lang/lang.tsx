import { useLang } from "../../hooks/useLang"
import { LangContainer } from "./styles"

export const Lang = () => {
    const {changeLang} = useLang()
    
    return <LangContainer>
        <button onClick={() => changeLang("pt-br")}>PT-BR</button>
        <button onClick={() => changeLang("en-us")}>EN-US</button>
    </LangContainer>
}