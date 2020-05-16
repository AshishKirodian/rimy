import React from 'react';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { ROUTES } from '../../Configuration/routes';

const history = createBrowserHistory()

export default function App() {
  return (
    <div className="container-fluid">
      <Router history={history}>
        <Switch >
          {ROUTES.map((route, i) =>
            <Route key={i} path={route.path} component={route.component} exact={true} />
          )}
        </Switch>
      </Router>
    </div>
  );
}