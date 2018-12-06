import React, { Component } from 'react';
import '../app.css';
<<<<<<< HEAD:src/client/components/App.js
import logoWhite from './../../../public/assets/logo-white.png'
// import NavBar from './NavBar.jsx'
=======
import logoWhite from'./../../../public/assets/logo-white.png'
import NavBar from './NavBar.jsx'
import Content from './Content.jsx'
import './../../../public/assets/favicon.ico';
>>>>>>> 54e5d0cc7328959826429d691cc11f8944a44575:src/client/components/App.jsx

export default class App extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD:src/client/components/App.js
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
=======
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
>>>>>>> 54e5d0cc7328959826429d691cc11f8944a44575:src/client/components/App.jsx
        </div>
        <Content />
      </div>
    )
  }
}
