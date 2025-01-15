import { HeaderModel } from "../../models/headerModel";
import { LangKey } from "../../models/langText";
import { HeaderContainerStyle, HeaderTitleStyle, ProfilePictureContainerStyle, ProfilePictureStyle } from "./styles"

interface HeaderProps {
    data: HeaderModel;
    lang: LangKey;
}

export const Header = (props: HeaderProps ) => {
    const {lang} = props
    const {name, role, imgUrl, background} = props.data;
    
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
                <h1>{name?.[lang]}</h1>
                <h3>{role?.[lang]}</h3>
            </div>
     </div>
}
