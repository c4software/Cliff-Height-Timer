import {Route, HashRouter as Router} from 'react-router-dom';

import About from './views/about';
import Home from './views/home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAppBar from "./components/MyAppBar";
import React from 'react';
import theme from "./theme";

// Route de l’application
const routes = (
	<Router>
		<MuiThemeProvider muiTheme={theme}>
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
