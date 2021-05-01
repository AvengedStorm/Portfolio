import react from 'react';
import ReactDOM from 'react-dom';
import AppBody from './AppBody';
import AppFooter from './AppFooter';

const header = () => {
    return (
        <div style={{textAlign: 'left'}}>
            <h1>My Portfolio Site</h1>
            <ul style={{listStyleType: "none"}}>
                <li id="projects">My Projects</li>
                <li id="cv">My C.V.</li>
                <li id="contact">Contact Info</li>
            </ul>
        </div>
    )
}

export default header;