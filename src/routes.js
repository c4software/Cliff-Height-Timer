import React from 'react';
import {HashRouter as Router,  Route} from 'react-router-dom';

import Home from './views/home';
import MyAppBar from "./components/MyAppBar";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Route de l’application
const routes = (
	<Router>
		<MuiThemeProvider>
			<div>
					<MyAppBar />
					<Route exact path="/" component={Home} />
			</div>
		</MuiThemeProvider>
	</Router>
);

export default routes;
