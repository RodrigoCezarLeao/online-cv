import { HeaderContainerStyle, HeaderTitleStyle, ProfilePictureContainerStyle, ProfilePictureStyle } from "./styles"

interface HeaderProps {
    name: string;
    role: string;
    imgUrl: string;
    background: string;
}

export const Header = (props: HeaderProps ) => {
    const {name, role, imgUrl, background} = props;

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
                <h1>{name}</h1>
                <h3>{role}</h3>
            </div>
     </div>
}