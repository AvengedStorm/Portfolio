import react from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import instagram_icon from './../images/instagram_icon'
import facebook_icon from './../images/facebook_icon'
import twitter_icon from './../images/twitter_icon'
import gmail_icon from './../images/gmail_icon'
import messenger_icon from './../images/messenger_icon'
import whatsapp_icon from './../images/whatsapp_icon'

const instagramImg = {
    backgroundImage: {instagram_icon},
    height: "30px",
    width: "30px"
}

const facebookImg = {
    backgroundImage: {facebook_icon},
    height: "30px",
    width: "30px"
}

const footer = () => {
    return (
        <div style={{textAlign: 'left'}}>
            <h1>Contact Info:</h1>
            <div id='contact'>
                <img
                style={instagramImg}>
                </img>
            </div>
        </div>
    )
}

export default {footer,instagramImg, facebookImg};