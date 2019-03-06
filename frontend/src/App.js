import React, { Component } from 'react';
import './App.css';
import CountdownVerbose from './components/CountdownVerbose';
import background from './images/hiilibudjetti2_kuvana.png';
import background3 from './images/Hiilibudjetti_tausta_xs.jpg';
import Infotext from './components/Infotext'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header Container">
          <h1>
            Hiilibudjetti
          </h1>
          <br/>
          <CountdownVerbose />
          <img className="buildings" src={background} alt="Background image"/>
          <img className="backgroundImage" src={background3} alt="Background image"/>
        </header>
        <Infotext />
      </div>
    );
  }
}

export default App;
