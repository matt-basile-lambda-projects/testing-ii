import React, { Component } from 'react';
import './App.css';
import Count from './Count'
import ButtonPad from './Dashboard'
import LineUp from './LineUp'
import ScoreBoard from './ScoreBoard'

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
    outs: 0,
    inning: 1,
    topInning: true,
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
      < div className="flex flex-wrap">
      <div className="w-full flex h-auto">
        <LineUp away roster={this.state.away}/>
        <ScoreBoard inning={this.state.inning}/>
        <LineUp  roster={this.state.home} />
      </div>
      <div className="w-full  border">
        <div className="w-full flex h-64 justify-center mx-auto">
          <div className="w-1/4 text-center self-center">
            <h2 className="text-2xl underline ">At Bat</h2>
            <h2 className="text-4xl">{this.state.away[this.state.atBat]}</h2>
          </div>
          <Count 
          strikes={this.state.strikes}
          balls={this.state.balls}
          outs={this.state.outs}
          />
        </div>
        <ButtonPad 
        addStrike={this.addStrike} 
        addBall={this.addBall}
        addFoul={this.addFoul}
         />
      </div>
        
       
      </div>
    );
  }
}

export default App;
