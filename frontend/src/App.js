import React, { Component } from 'react';
import './App.css';
import Counteri from './Components/Countdown/Counteri.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Hiilibudjettiiii
          </h1>
        </header>
          <Counteri/>
      </div>
    );
  }
}

export default App;
