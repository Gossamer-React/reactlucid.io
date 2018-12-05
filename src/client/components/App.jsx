import React, { Component } from 'react';
import '../app.css';
import logoWhite from'./../../../public/assets/logo-white.png'
import NavBar from './NavBar.jsx'
import Content from './Content.jsx'
import './../../../public/assets/favicon.ico';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    return(
      <div>
        <div id='splash'>
          <NavBar />
          <img id='logo' src={logoWhite} />
          <h1>a React-GraphQL devtool</h1>
          <button>Install</button>
        </div>
        <Content />
      </div>
    )
  }
}
