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
    homeOrder: 0,
    awayOrder: 0,
  }
  nextAB = ()=>{
    if(this.state.topInning){
      if(this.state.awayOrder <5){
        this.setState({awayOrder: this.state.awayOrder+1})
      } else{
        this.setState({awayOrder: 0})
      }
    } else{
      if(this.state.homeOrder <5){
        this.setState({homeOrder: this.state.homeOrder+1})
      } else{
        this.setState({homeOrder: 0})
      }
    }
    
  }
 addStrike = e =>{
   e.preventDefault();
   if(this.state.strikes === 2){
     if(this.state.outs === 2){
      this.setState({ topInning: false, outs: 0, strikes: 0, balls: 0})
      if(this.state.topInning === false){
        this.setState({topInning: true, outs: 0, strikes: 0, balls: 0})
      }
     } else{
      this.setState({strikes: 0});
      this.setState({balls: 0});
      this.setState({outs: this.state.outs+1})
      this.nextAB();
   }
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
      <div className="flex flex-wrap">
      <h1 className="mx-auto w-full text-center my-3">Let's Play Ball</h1>
      <div className="w-full flex h-auto">
        <LineUp away roster={this.state.away}/>
        <ScoreBoard inning={this.state.inning}/>
        <LineUp  roster={this.state.home} />
      </div>
      <div className="w-full  border">
        <div className="w-full flex h-64 justify-center mx-auto">
          <div className="w-1/4 text-center self-center">
            <h2 className="text-2xl underline ">At Bat</h2>
            <h2 className="text-4xl">
            {this.state.topInning ? this.state.away[this.state.atBat] : this.state.home[this.state.atBat]}
            </h2>
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
