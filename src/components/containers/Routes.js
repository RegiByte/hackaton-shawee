import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import Cursos from '../pages/Cursos';

function Routes(props) {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact={true} component={Home} />
				<Route path='/about' exact={true} component={About} />
				<Route path='/cursos' exact={true} component={Cursos} />
				<Route path='*' component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
