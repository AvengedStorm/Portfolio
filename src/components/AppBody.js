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


const body = (props) => {
    console.log(props)

    switch(props.page) {
        case "/projects":
            return <Projects />;
        case "/about":
            return <About />;
        case "/cv":
            return <CV />
        default:
            return <Home />;
    }
}

export default body;