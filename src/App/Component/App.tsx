import React from 'react';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { ROUTES } from '../../Configuration/routes';
import Nav from '../../UniversalComponents/Navigation/nav';

const history = createBrowserHistory()

export default function App() {
  return (
    <div>
      <div>
        <Router history={history}>
          <Switch>
            <Route path={'*'} component={Nav} />
          </Switch>
        </Router>
      </div>
      <div className="container-fluid">
        <Router history={history}>
          <Switch >
            {ROUTES.map((route, i) =>
              <Route key={i} path={route.path} component={route.component} exact={true} />
            )}
          </Switch>
        </Router>
      </div>
    </div>
  );
}