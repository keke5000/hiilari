import React, { Component } from 'react';
import './App.css';
import Countdown from './components/Countdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Hiilibudjetti
          </h1>
          <Countdown />
        </header>
      </div>
    );
  }
}

export default App;
