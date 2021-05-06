import react from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import CV from "./../pages/cv";
import Home from "./../pages/home";
import About from "./../pages/about";
import Projects from "./../pages/projects";


const body = () => {
    return (
    <Switch>
        <Route path="/cv">
            <CV />
        </Route>
        <Route path="/projects">
            <Projects />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
    )
    // return(
    //     <div style={{paddingBottom: "1.25%", textAlign: 'left'}}>
    //     <div id="about">
    //         <h1 style={{textAlign: 'left', marginLeft: "2.5%"}}>About Me</h1>
    //         <p style={{marginLeft: "2.5%"}}>
    //             My name is Omri jukin,<br />
    //             I'm 24 years old certified electrician,<br />
    //             Currently a web and FullStack developer since 02/2021,<br />
    //             Every other detail about my life,<br />
    //             For that, we'll have to grab a cup of coffee :).
    //         </p>
    //     </div>
    //     </div>
    // )
}

export default body;