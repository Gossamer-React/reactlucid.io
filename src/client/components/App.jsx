import React, { Component } from 'react';
import '../app.css';
import logoWhite from './../../../public/assets/logo-white.png';
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
          <button><a href = 'https://chrome.google.com/webstore/detail/lucid/pnaoeldlekbfpnalhabggkcddleelamc'>Install</a></button>
          <Link to='content' smooth={true} offset={30} duration={900}>
            <i className='fas fa-chevron-circle-down' />
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
