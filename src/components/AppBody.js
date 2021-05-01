import react from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const body = () => {
    return(
        <div id="about" style={{textAlign: 'left'}}>
            <h1 style={{textAlign: 'left'},{textDecoration: "underline overline"}}>About Me</h1>
            <p>
                My name is Omri jukin,<br />
                I'm 24 years old certified electrician,<br />
                Currently a web and FullStack developer since 02/2021,<br />
                Every other detail about my life,<br />
                For that, we'll have to get a cup of coffee :).
            </p>
        </div>
    )
}

export default body;