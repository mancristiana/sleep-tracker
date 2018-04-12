import React, { Component } from 'react';
import logo from './../assets/logo.svg';
import Calendar from './Calendar.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sleep Tracker</h1>
        </header>
        <Calendar />
      </div>
    );
  }
}

export default App;
