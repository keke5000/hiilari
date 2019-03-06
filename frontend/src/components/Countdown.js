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
                day: time.getDate() - beginningOfTime.getDate(),
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
                Aikaa jäljellä +1.5 °C lämpenemiseen
                <br />
                <table align="center">
                    <tr className="countdown">
                        <td>
                            {this.state.year < 10 ? "0" + this.state.year : this.state.year}
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            {this.state.month < 10 ? "0" + this.state.month : this.state.month}
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            {this.state.day < 10 ? "0" + this.state.day : this.state.day}
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            {this.state.hour < 10 ? "0" + this.state.hour : this.state.hour}
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            {this.state.minute < 10 ? "0" + this.state.minute : this.state.minute}
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            {this.state.second < 10 ? "0" + this.state.second : this.state.second}
                        </td>
                    </tr>
                    <tr className="countdown-second-row">
                        <td>
                            v
                        </td>
                        <td>

                        </td>
                        <td>
                            kk
                        </td>
                        <td>

                        </td>
                        <td>
                            pv
                        </td>
                        <td>

                        </td>
                        <td>
                            h
                        </td>
                        <td>

                        </td>
                        <td>
                            min
                        </td>
                        <td>

                        </td>
                        <td>
                            s
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Countdown;
