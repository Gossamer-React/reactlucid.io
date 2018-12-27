import React, { Component } from 'react';
import '../app.css';
import logoWhite from './../../../public/assets/logo-min.png';
import NavBar from './NavBar.jsx';
import Intro from './Intro.jsx';
import Features from './Features.jsx';
import About from './About.jsx';
import Setup from './Setup.jsx';
import './../../../public/assets/favicon.ico';
import { Link } from 'react-scroll';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div id='splash'>
          <NavBar />
          <img id='logo' src={logoWhite} />
          <h1>a React-GraphQL devtool</h1>
          <a href = 'https://chrome.google.com/webstore/detail/lucid/pnaoeldlekbfpnalhabggkcddleelamc'><button>Install</button></a>
          <Link to='content' smooth={true} offset={30} duration={900}>
            <div id='arrow-down'>
              <i className='fas fa-angle-double-down' />
            </div>
          </Link>
        </div>
        <div className='content' name='content'>
          <Intro />
          <Setup />
          <Features />
          <About />
        </div>
      </div>
    );
  }
}
