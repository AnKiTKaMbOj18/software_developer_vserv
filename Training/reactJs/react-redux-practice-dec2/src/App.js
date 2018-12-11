import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <p>App!</p>
      <Clock />
      <Clock />
      <Clock />
      </div>
    );
  }
}


export default App;
