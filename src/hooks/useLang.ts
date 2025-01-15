import { useState } from "react"

export const useLang = () => {
    const [lang, setLang] = useState<string>("pt-br")
    
    const changeLang = (lang: string) => {        
        setLang(lang)
    }

    return {lang, changeLang}
}