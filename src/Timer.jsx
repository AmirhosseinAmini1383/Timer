import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"
var interval;
export class Timer extends React.Component {
  constructor(){
    super();
    this.state={
      hour:0,
      minute:0,
      second:0,
      isStart:false,
    }
  }
  StartInterval=()=>{
    if(this.state.isStart==false){
      this.setState({
        isStart:true,
      });
        interval=setInterval(() => {
          this.setState({
            second:this.state.second+1
          })
          if(this.state.second==60){
            this.setState({
              second:0,
              minute:this.state.minute+1,
            })
            if(this.state.minute==60){
              this.setState({
                minute:0,
                hour:this.state.hour+1,
              })
            }
          }
        }, 1000);
    }
  }

  StopInterval=()=>{
    this.setState({
      isStart:false,
    })
    clearInterval(interval);
  }

  ResetInterval=()=>{
    this.StopInterval();
    this.setState({
      hour:0,
      minute:0,
      second:0,
    })
  }

  render() {
    let hour = this.state.hour;
    let minute = this.state.minute;
    let second = this.state.second;
    return (  
        <div>
          <div className="timer">
            <div className="div-timer">
              <span className="timerzero hour1">{hour>9 ? hour : `0`+hour}</span>
              <span className="timer-label hour2">HOUR</span>
            </div>
            <div className="div-timer">
              <span className="timerzero minute1">{minute>9 ? minute : `0`+minute}</span>
              <span className="timer-label minute2">MINUTE</span>
            </div>
            <div className="div-timer">
              <span className="timerzero second1">{second>9 ? second : `0`+second}</span>
              <span className="timer-label second2">SECOUND</span>
            </div>
          </div> 
          <div className="btnContainer">
            <button className="btn Start" onClick={this.StartInterval}>START</button>
            <button className="btn Stop" onClick={this.StopInterval}>STOP</button>
            <button className="btn Reset" onClick={this.ResetInterval}>RESET</button>
            <button className="btn Text">TEXT</button>
            <button className="btn Mood">DARK / LIGHT</button>
          </div>
        </div>
    );
  }
}