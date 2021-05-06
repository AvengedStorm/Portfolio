import react from 'react';
import ReactDOM from 'react-dom';
import AppBody from './AppBody';
import AppFooter from './AppFooter';

const header = () => {
    return (
        <div style={{textAlign: 'left', marginLeft: "2.5%",paddingTop: "1.25%"}}>
            <h1>My Portfolio Site</h1>
            <ul style={{listStyleType: "none", width: "5%"}}>
                <a href="#"><li id="projects">My Projects</li></a>
                <a href="#"><li id="cv">My C.V.</li></a>
                <a href="#"><li id="aboutMe">About Me</li></a>
            </ul>
        </div>
    )
}

export default header;