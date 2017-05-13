import React from 'react';
import {
  HashRouter as Router,
  Route,
	Link
} from 'react-router-dom'

import Home from './views/home';

// Route de l’application
const routes = (
	<Router>
		<div>
				<div className="text-center pad10">
					<Link to="/">Home</Link> | <Link to="/list">List</Link>
				</div>
				<Route exact path="/" component={Home} />
		</div>
	</Router>
);

export default routes;
