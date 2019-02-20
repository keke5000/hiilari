import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

const Completionist = () => <span>You are good to go!</span>;

class Counteri extends Component {
  render() {
    return (
      <div>
          <Countdown
          date={'Sat, 01 Jan 2020 00:00:00'}
          zeroPadDays={1}
          precision={60}
          >
            <Completionist />
          </Countdown>
      </div>
    );
  }
}

export default Counteri;
