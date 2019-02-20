import React, { Component } from 'react';

class Counter2 extends Component {

  state = {
    numero: 1};

  kutsuMua = () => {
  setInterval(() => {
    let numeroo = this.state.numero + 1;
     this.setState({numero: numeroo});
   }, 1000)
  ;}

  componentDidMount() {
    this.kutsuMua();
  }

  render() {
    return (
      <div>
        {this.state.numero}
      </div>

    );
  }
}

export default Counter2;
