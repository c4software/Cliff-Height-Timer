import React, {Component} from 'react';

import RaisedButton from 'material-ui/RaisedButton';

class HeightTimer extends Component{
  constructor(props){
    super(props);
    this.state = {running: false, time: 0, m: "0 m", ft: "0 ft"};
  }

  start = () => {
      this.setState({
        start: new Date().getTime(),
        running: !this.state.running
      });
  };

  compute = () => {
      let fallTime = new Date().getTime() - this.state.start;
  		let height = 16*Math.pow((fallTime/1000), 2);
      let numberDigits = 0;
			if(height < 1){
				numberDigits = 1;
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
      <div>
        <h1>{this.state.time}</h1>
        <h3>{this.state.m}</h3>
        <h3>{this.state.ft}</h3>
        <RaisedButton fullWidth={true} secondary={this.state.running} onTouchTap={this.start} label={this.state.running?"Stop":"Start"} />
      </div>
    )
  }
}

export default HeightTimer;
