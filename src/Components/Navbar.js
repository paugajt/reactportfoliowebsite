import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../Stylesheets/Navbar.css';
import logo from '../Images/Logo.PNG'

class Navbar extends Component {

    navButtonClicked(item) {
        console.log(item + ' was clicked')
    }

    render() {
        return (
            <div className="navbar">
                <a><img src={logo} className='logo'></img></a>
                <a onClick={this.navButtonClicked('home')}>Home</a>

                <div className="dropdown">
                    <a onClick={this.navButtonClicked('projects')}>Projects</a>
                    <div className="dropdown-content">
                    </div>
                </div>  
                <a onClick={this.navButtonClicked('resume')}>Resume</a> 
                <div id="right-items">
                    <a onClick={this.navButtonClicked('aboutme')}>About Me</a>
                    <a onClick={this.navButtonClicked('contact')}>Contact</a>
                </div>  
            </div>            
        )
    }
}

export default Navbar;