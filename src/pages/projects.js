import react from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as a
  } from "react-router-dom";

const elem = (props) => {
    return (
        <div className="projects" style={{textAlign: 'left', marginLeft: "2.5%"}}>
            <h2>My projects so far:</h2>
            <ul>
                <a id="button" href="/Portfolio/projectim/HTML-CSS5-company/index.html"><li>A made-up company/organization site</li></a>
                <a id="button" href="/Portfolio/projectim/HTML-CSS-club/index.html"><li>A made-up club site</li></a>
                <a id="button" href="/Portfolio/projectim/HTML-CSS2/index.html"><li>A style-guide</li></a>
                <a id="button" href="/Portfolio/projectim/HTML-CSS-JS1/index.html"><li>A music guide for Happy B-Day song</li></a>
                <a id="button" href="/Portfolio/projectim/HTML-CSS3/index.html"><li>TeAdventures</li></a>
                <a id="button" href="https://avengedstorm.github.io/appocon/"><li>AppoCon</li></a>
                <a id="button" href="https://avengedstorm.github.io/reddit-client/"><li>Reddit Client Project</li></a>
            </ul>
        </div>
    )
};

export default elem;