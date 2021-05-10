import react from 'react';
import ReactDOM from 'react-dom';

const elem = (props) => {
    return(
        <div style={{paddingBottom: "1.25%", textAlign: 'left'}}>
        <div id="about">
            <h1 style={{textAlign: 'left', marginLeft: "2.5%"}}>A little about Me</h1>
            <p style={{marginLeft: "2.5%"}}>
                My name is Omri jukin,<br />
                A story and song writer,<br />
                I'm 24 years old certified electrician,<br />
                Currently a web and FullStack developer since 02/2021.
            </p>
        </div>
        </div>
    )
};

export default elem;