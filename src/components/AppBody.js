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
}

export default body;