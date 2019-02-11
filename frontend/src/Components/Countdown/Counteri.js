import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

const Completionist = () => <span>You are good to go!</span>;

class Counteri extends Component {
  render() {
    return (
      <div>
          <Countdown date={Date.now() + 5000}>
            <Completionist />
          </Countdown>
      </div>
    );
  }
}

export default Counteri;
