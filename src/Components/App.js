import React, { Component } from 'react';
import logo from '../logo.svg';
import '../Stylesheets/App.css';
import Navbar from '../Components/Navbar.js';
import Footer from '../Components/Footer.js';
import Resume from '../Components/Resume.js';
import AboutMe from '../Components/AboutMe.js';
import ContactMe from '../Components/ContactMe.js';
import Projects from '../Components/Projects';
import Home from './Home';


var content = <Home />;

function setContent(itemClicked) {
    var availableContent = [
      <Resume />, 
      <Projects />,
      <AboutMe />,
      <ContactMe />
    ]
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        
          {content}
        
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
