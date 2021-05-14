import react from 'react';
import ReactDOM from 'react-dom';

const elem = (props) => {
    return (
        <div style={{textAlign: 'left', marginLeft: "2.5%"}}>
            <h2>about myself:</h2>
            <p>My name is Omri Jukin,<br/>
            I'm 24 years old, certified electrical engineer
            <br/>
            I've went to the Be'er Sheva Air Force Technical College for the total amount of 6 years,
            <br/>
            completing 14 years at school.
            <br/>
            <br/>
            My hobbies are learning and doing magic tricks,<br/>
            I love playing the computer and learning new things about the games I play and the things I usually do in the everyday life,
            <br/>
            <br/>
            My guilty plasure song is "You belong with me" by Taylor Swift, well, she's good :)
            <br/>
            My intentions for the future is to be a developer who develop a life-changing thing which will ease on the level of everyday life for everybody.
            </p>
        </div>
    )
};

export default elem;