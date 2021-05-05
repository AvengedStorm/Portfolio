import react from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import instagram_icon from './../images/instagram_icon.png'
import facebook_icon from './../images/facebook_icon.png'
import twitter_icon from './../images/twitter_icon.png'
import gmail_icon from '../images/gmail_icon.png'
import messenger_icon from './../images/messenger_icon.png'
import whatsapp_icon from './../images/whatsapp_icon.png'

const baseStyle = {
    height: "30px",
    width: "30px",
    marginRight: "0.5em",
    borderRadius: "50%"
}
const openLink = (url) => {
    window.open(url,'_blank')
}

const footer = () => {
    return (
        <div style={{textAlign: 'left', marginLeft: "2.5%"}}>
            <h1>Contact Info:</h1>
            <div id='contact'>
                <a href="#"><img style={baseStyle} src={instagram_icon} onClick={openLink.bind(null,'https://www.instagram.com/x.omri.j')}></img></a>
                <a href="#"><img style={baseStyle} src={facebook_icon} onClick={openLink.bind(null, 'https://www.facebook.com/omri.jukin')}></img></a>
                <a href="#"><img style={baseStyle} src={twitter_icon} onClick={openLink.bind(null, 'https://twitter.com/Moon_L3tters')}></img></a>
                <a href="#"><img style={{...baseStyle, width: "40px", marginRight: "0.25%"}} src={whatsapp_icon} onClick={openLink.bind(null, 'https://api.whatsapp.com/send?phone=972523344064')}></img></a>
                <a href="#"><img style={baseStyle} src={gmail_icon} onClick={openLink.bind(null, 'mailto:DJCreeperNo1@gmail.com')}></img></a>
                <a href="#"><img style={baseStyle} src={messenger_icon} onClick={openLink.bind(null, 'https://m.me/omri.jukin')}></img></a>
            </div>
        </div>
    )
}

export default footer;