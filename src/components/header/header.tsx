import { useLang } from "../../hooks/useLang";
import { HeaderModel } from "../../models/headerModel";
import { HeaderContainerStyle, HeaderTitleStyle, ProfilePictureContainerStyle, ProfilePictureStyle } from "./styles"

interface HeaderProps {
    data: HeaderModel;
}

export const Header = (props: HeaderProps ) => {
    const {name, role, imgUrl, background} = props.data;
        
    const {lang} = useLang()
    console.log("🚀 ~ Header ~ lang:", lang)

    return <div style={{...HeaderContainerStyle, background}}>
            <div 
                id='profile-picture-container'
                style={ProfilePictureContainerStyle}
            >
                <img 
                    // src="https://avatars.githubusercontent.com/u/51330881?v=4" 
                    src={imgUrl}
                    style={ProfilePictureStyle}
                />
            </div>

            <div style={HeaderTitleStyle}>
                <h1>{name.find((x) => x.lang === window.lang)?.text}</h1>
                <h3>{role.find((x) => x.lang === window.lang)?.text}</h3>
            </div>
     </div>
}