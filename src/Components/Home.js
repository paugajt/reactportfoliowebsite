import React, { Component } from 'react';
import headshot from '../Images/HeadShot.jpg';
import '../Stylesheets/App.css'


class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1 className="heading" id="homename">Justin Pauga</h1>
                <p style={{textalign: "center"}}><img src={headshot} alt="Justin Pauga" className="img-circle"></img></p>

                <div style={{margin: '0% 15% 0% 15%'}}>
                    <p style={{textalign: "center"}}>I am a software engineering student with a passion for learning and writing code. I have a strong knowledge of object-oriented programming and application development tools. Consistently commended by professors and classmates for programming abilities, grasp of multiple technologies and attention to detail. Known as a self-starter, multitasker and team player who strives to consistently exceed expectations.</p>
                </div>
            </div>
        )
    };
}

export default Home;