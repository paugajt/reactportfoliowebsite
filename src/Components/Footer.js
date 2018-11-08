import React, { Component } from 'react';
import '../Stylesheets/App.css'

class Footer extends Component {
    render() {
        return (
            <div>
                <h2 style={{textalign: "center"}}>Feel free to contact me directly!</h2>

                <div className="socialbtns" style={{textalign: "center"}}>
                <a href="mailto:paugajt@gmail.com" target="_blank">paugajt@gmail.com</a>
                <p>My LinkedIn Profile can be found <a href="https://www.linkedin.com/in/justin-pauga-51152698/" target="_blank">Here</a> | My Github Repositories can be found <a href="https://github.com/paugajt" target="_blank">Here</a></p>
                
                </div>
                <p style={{textalign: "center"}}>Copyright 2017 by Justin Pauga</p>
            </div>
        )
    }
}

export default Footer;