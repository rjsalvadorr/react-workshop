import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// import Timer from "./Timer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul className="links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/form">Form</Link></li>
        </ul>
        <h1>Apps:</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;
