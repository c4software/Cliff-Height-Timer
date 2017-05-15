import React, {Component} from 'react';
import "./index.css";

import FloatingActionButton from 'material-ui/FloatingActionButton';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';
import Stop from 'material-ui/svg-icons/av/stop';

class HeightTimer extends Component{
  constructor(props){
    super(props);
    this.state = {
      running: false,
      time: 0,
      m: "0 m",
      ft: "0 ft"
    };
  }

  start = () => {
      this.setState({
        start: new Date().getTime(),
        running: !this.state.running
      });

      if (!this.state.running){
        this.timerId = setInterval(() => {
          this.compute();
        }, 10);
      }else{
        clearInterval(this.timerId);
      }
  };

  compute = () => {
      let fallTime = new Date().getTime() - this.state.start;
  		let height = 16*Math.pow((fallTime/1000), 2);
      let numberDigits = 1;
			if(height < 1){
				numberDigits = 2;
			}

      let fallTimeFormated = (fallTime/1000).toFixed(2)+"s";
      let feetFormated = height.toFixed(numberDigits)+" ft";
      let meterFormated = (height/3.2808).toFixed(numberDigits)+" m";

      this.setState({
        time: fallTimeFormated,
        m: meterFormated,
        ft: feetFormated
      })
  }

  render(){
    return (
      <div style={{paddingTop: "30px"}}>
        <h1>{this.state.time}</h1>
        <h3>{this.state.m}</h3>
        <h3>{this.state.ft}</h3>
        <FloatingActionButton className="fab" secondary={this.state.running} onTouchTap={this.start}>
          {this.state.running?<Stop />:<PlayArrow />}
        </FloatingActionButton>
      </div>
    )
  }
}

export default HeightTimer;
