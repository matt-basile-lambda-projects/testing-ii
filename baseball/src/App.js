import React, { Component } from 'react';
import './App.css';
import Count from './Count'
import ButtonPad from './Dashboard'

class App extends Component {
  state={
    home: [
      "Tony Gwynn",
      "Ty Cobb",
      "Wade Boggs",
      "Lou Gehrig",
      "Babe Ruth",
      "Willie Mays"
    ],
    away: [
      "Ken Griffey",
      "Derek Jeter",
      "Mike Piazza",
      "Mike Trout",
      "Barry Bonds",
      "Cal Ripken"
    ],
    atBat: 0,
    strikes: 0,
    balls: 0,
    outs: 0
  }
  nextAB = ()=>{
    if(this.state.atBat <5){
      this.setState({atBat: this.state.atBat+1})
    } else{
      this.setState({atBat: 0})
    }
  }
 addStrike = e =>{
   e.preventDefault();
   if(this.state.strikes === 2){
      this.setState({strikes: 0});
      this.setState({balls: 0});
      this.setState({outs: this.state.outs+1})
      this.nextAB();
   }
   if(this.state.strikes < 2){
     this.setState({strikes: this.state.strikes+1})
   }
 }
 addBall = e =>{
   e.preventDefault();
   if(this.state.balls === 3){
      this.setState({strikes: 0});
      this.setState({balls: 0});
      this.nextAB();
   }
   if(this.state.balls < 3){
     this.setState({balls: this.state.balls+1})
   }
 }
 addFoul = e =>{
   e.preventDefault();
   if(this.state.strikes === 2){
     return
   } else{
     this.setState({strikes: this.state.strikes+1})
   }
 }
 addHit = e =>{
   e.preventDefault()
 }
  render() {
    return (
      <>
        <h1>At Bat: {this.state.away[this.state.atBat]}</h1>
        <Count 
        strikes={this.state.strikes}
        balls={this.state.balls}
        outs={this.state.outs}
        />
        <ButtonPad 
        addStrike={this.addStrike} 
        addBall={this.addBall}
        addFoul={this.addFoul}
         />
        <button onClick={e => this.nextAB(e)}>Next Batter</button>
      </>
    );
  }
}

export default App;
