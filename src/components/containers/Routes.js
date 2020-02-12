import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

function Routes(props) {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact={true} component={Home} />
				<Route path='*' component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
