import React, { Component } from 'react';

class Countdown extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      year: "00",
      month: "00",
      day: "00",
      hour: "00",
      minute: "00",
      second: "00"
    }
  }

  componentDidMount() {
      this.callMe();
  }

  callMe = () => {
      setInterval(() => {
        let time = this.countTimeDifference();
        let beginningOfTime = new Date(0);
      this.setState({
        year: time.getFullYear() - beginningOfTime.getFullYear(),
        month: time.getMonth() + 1 - beginningOfTime.getMonth(),
        day: time.getDate() - 1 - beginningOfTime.getDate(),
        hour: time.getHours() - beginningOfTime.getHours(),
        minute: time.getMinutes() - beginningOfTime.getMinutes(),
        second: time.getSeconds() - beginningOfTime.getSeconds()
        });
      }, 100)
  }

  countTimeDifference = () => {
      let timeNow = new Date();
      let doomsDay = new Date(2029, 0, 1, 1, 1, 1, 1);
      let milliSeconds = doomsDay.valueOf() - timeNow.valueOf();
      return new Date(milliSeconds);
  }
    
    render() {
        return (
            <div>
                Time left:
                <br />
                {this.state.year < 10 ? "0" + this.state.year : this.state.year}:
                {this.state.month < 10 ? "0" + this.state.month : this.state.month}:
                {this.state.day < 10 ? "0" + this.state.day : this.state.day}:
                {this.state.hour < 10 ? "0" + this.state.hour : this.state.hour}:
                {this.state.minute < 10 ? "0" + this.state.minute : this.state.minute}:
                {this.state.second < 10 ? "0" + this.state.second : this.state.second}
            </div>
        );
    }
}

export default Countdown;