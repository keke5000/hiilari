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
                <table align="center" className="countdownVerbose">
                    <tr>
                        <td className="alignRight">
                            {this.state.year}
                        </td>
                        <td className="alignLeft">
                            vuotta
                        </td>
                    </tr>
                    <tr>
                        <td className="alignRight">
                            {this.state.month}
                        </td>
                        <td className="alignLeft">
                            kuukautta
                        </td>
                    </tr>
                    <tr>
                        <td className="alignRight">
                            {this.state.day}
                        </td>
                        <td className="alignLeft">
                            päivää
                        </td>
                    </tr>
                    <tr>
                        <td className="alignRight">
                            {this.state.hour}
                        </td>
                        <td className="alignLeft">
                            tuntia
                        </td>
                    </tr>
                    <tr>
                        <td className="alignRight">
                            {this.state.minute}
                        </td>
                        <td className="alignLeft">
                            minuuttia
                        </td>
                    </tr>
                    <tr>
                        <td className="alignRight">
                            {this.state.second}
                        </td>
                        <td className="alignLeft">
                            sekuntia
                        </td>
                    </tr>
                </table>
                <br />
                <span className="loppumiseen">+1.5 °C hiilibudjetin loppumiseen</span>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default Countdown;
