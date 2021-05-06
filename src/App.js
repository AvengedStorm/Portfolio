import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import react from 'react';
import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';
import background from './images/background.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App" style={{height: "100vh", width: "100vw" ,backgroundImage: `url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm21-background-tong-058.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=710a6fed5b1923da8d5f95191839ef8a)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <AppHeader />
      <AppBody />
      <AppFooter />
    </div>
  );
}

export default App;
