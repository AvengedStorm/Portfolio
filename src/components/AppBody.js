import react from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const body = () => {
    return(
        <div style={{paddingBottom: "1.25%", textAlign: 'left'}}>
        <div id="about">
            <h1 style={{textAlign: 'left', marginLeft: "2.5%"}}>About Me</h1>
            <p style={{marginLeft: "2.5%"}}>
                My name is Omri jukin,<br />
                I'm 24 years old certified electrician,<br />
                Currently a web and FullStack developer since 02/2021,<br />
                Every other detail about my life,<br />
                For that, we'll have to grab a cup of coffee :).
            </p>
        </div>
        </div>
    )
}

export default body;