import React, { Component } from 'react';
import './App.css';
import CountdownVerbose from './components/CountdownVerbose';
import background from './images/Hiilibudjetti_maa.png';
import background2 from './images/Hiilibudjetti_tausta.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" >
          <h1>
            Hiilibudjetti
          </h1>
          <CountdownVerbose />
          <img className="buildings" src={background} alt="Background image"/>
          <img className="backgroundImage" src={background2} alt="Background image"/>
        </header>
      </div>
    );
  }
}

export default App;
