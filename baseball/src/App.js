import React, { Component } from 'react';
import './App.css';
import Count from './Count'
import ButtonPad from './ButtonPad'

class App extends Component {
  state={
    names: [
      "Tony Gwynn",
      "Ty Cobb",
      "Wade Boggs",
      "Lou Gehrig",
      "Barry Bonds",
      "Willie Mays"
    ],
    count: 0
  }
  nextAB = e =>{
    e.preventDefault()
    if(this.state.count <5){
      this.setState({count: this.state.count+1})
    } else{
      this.setState({count: 0})
    }
  }
  render() {
    return (
      <>
        <h1>At Bat: {this.state.names[this.state.count]}</h1>
        <Count />
        <ButtonPad />
      <button onClick={e => this.nextAB(e)}>Next Batter</button>
      </>
    );
  }
}

export default App;
