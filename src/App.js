import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import react from 'react';
import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <div className="App" style={{marginLeft: "2.5%"}}>
      <AppHeader />
      <AppBody />
      <AppFooter />
    </div>
  );
}

export default App;
