import { LangContainer, LangImg } from "./styles"
import { LangText } from "../../models/langText";

interface LangProps {
    setLang: React.Dispatch<React.SetStateAction<keyof LangText>>
}

export const Lang = (props: LangProps) => {
    const {setLang} = props;

    return <LangContainer>
        <LangImg src="/lang/brasil.png" onClick={() => {setLang("pt")}} />
        <LangImg src="/lang/eua.png" onClick={() => {setLang("en")}} />        
    </LangContainer>
}