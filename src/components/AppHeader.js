import react from 'react';
import ReactDOM from 'react-dom';
import AppBody from './AppBody';
import AppFooter from './AppFooter';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as a
  } from "react-router-dom";

const header = (props) => {
    // console.log(props)
    return (
        <div style={{textAlign: 'left', marginLeft: "2.5%",paddingTop: "1.25%"}}>
            <a id="button" href="/Portfolio"><h1>My Portfolio Site</h1></a>
            <ul style={{listStyleType: "none", width: "5%"}}>
                <a href="#" onClick={() => props.updateFunction('/projects')}><li id="button">My Projects</li></a>
                <a href="#" onClick={() => props.updateFunction('/cv')}><li id="button">My C.V.</li></a>
                <a href="#" onClick={() => props.updateFunction('/about')}><li id="button">About Me</li></a>
            </ul>
        </div>
    )
}

export default header;