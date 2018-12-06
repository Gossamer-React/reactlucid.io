import React, { Component } from 'react';
import '../app.css';
import logoWhite from './../../../public/assets/logo-white.png'
// import NavBar from './NavBar.jsx'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }


  render() {

    return (
      <div>
        <div id='splash'>
          <img id='logo' src={logoWhite} />
          <h1>a React-GraphQL devtool</h1>
          <div>
            <h2>Please give us stars!!!</h2>
            <button>Install</button>
          </div>
        </div>
      </div>
    )
  }
}
