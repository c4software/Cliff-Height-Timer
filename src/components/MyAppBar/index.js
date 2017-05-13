import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

import Menu from "material-ui/svg-icons/navigation/menu";
import IconButton from 'material-ui/IconButton';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import "./index.css";

class MyAppBar extends Component{
  constructor(props) {
      super(props);
      this.state = {open: false};
  }

  handleToggle = () => {
      this.setState({open: !this.state.open});
  };

  render(){
    iconElementLeft = <IconButton onTouchTap={this.handleToggle}><Menu /></IconButton>;
    return (
      <div>
        <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
            <MenuItem onTouchTap={() => this.go("/apropos")}>À Propos</MenuItem>
        </Drawer>
        <AppBar
            className="appBar"
            title="Cliff Height Timer"
            iconElementLeft={iconElementLeft}
        />
      </div>
    )
  }
}

export default MyAppBar
