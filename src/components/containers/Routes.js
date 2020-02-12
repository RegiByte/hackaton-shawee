import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import NotFound from '../pages/NotFound';

function MyHome() {
  return (
    <div>
      My Home
      <Link to='/sobre'>Go About</Link>
    </div>
  );
}

function Routes(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={MyHome} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
