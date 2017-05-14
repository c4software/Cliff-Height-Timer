import React, {Component} from 'react';

import RaisedButton from 'material-ui/RaisedButton';

class HeightTimer extends Component{
  constructor(props){
    super(props)
    this.state = {running: false};
  }

  start = () => {
      this.setState({running: !this.state.running});
  };

  render(){
    return (
      <div>
        <RaisedButton fullWidth={true} secondary={this.state.running} onTouchTap={this.start} label={this.state.running?"Stop":"Start"} />
      </div>
    )
  }
}

export default HeightTimer;
