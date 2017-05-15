import React from 'react';
import {HashRouter as Router,  Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './views/home';
import About from './views/about';

import MyAppBar from "./components/MyAppBar";

// Route de l’application
const routes = (
	<Router>
		<MuiThemeProvider>
			<div className='h100'>
					<MyAppBar />
					<div className="h100 container">
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
					</div>
			</div>
		</MuiThemeProvider>
	</Router>
);

export default routes;
