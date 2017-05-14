import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

import Menu from "material-ui/svg-icons/navigation/menu";
import IconButton from 'material-ui/IconButton';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import {cyan500} from 'material-ui/styles/colors';

import "./index.css";

class MyAppBar extends Component{
  constructor(props) {
      super(props);
      this.state = {open: false};
  };

  handleToggle = () => {
      this.setState({open: !this.state.open});
  };

  go = (action) => {
      location.hash = action;
      this.setState({open: false});
  };

  render(){
    return (
      <div>
        <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
            <div style={{height: "64px", backgroundColor: cyan500}} />
            <MenuItem onTouchTap={() => this.go("/about")}>About</MenuItem>
        </Drawer>
        <AppBar
            className="appBar"
            title="Cliff Height Timer"
            onTitleTouchTap={() => this.go("/")}
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementLeft={<IconButton><Menu /></IconButton>}
        />
      </div>
    )
  }
}

export default MyAppBar
