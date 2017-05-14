import React from 'react';
import {HashRouter as Router,  Route} from 'react-router-dom';

import Home from './views/home';
import MyAppBar from "./components/MyAppBar";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Route de l’application
const routes = (
	<Router>
		<MuiThemeProvider>
			<div className='h100'>
					<MyAppBar />
					<div className="h100 container">
						<Route exact path="/" component={Home} />
					</div>
			</div>
		</MuiThemeProvider>
	</Router>
);

export default routes;
