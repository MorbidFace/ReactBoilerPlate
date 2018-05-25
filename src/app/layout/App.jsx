import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../../features/home/HomePage';
import Test from '../../features/testarea/Test';
import ModalManager from '../../features/modals/ModalManager';
import NotFoundPage from '../../features/notFound/NotFoundPage';

class App extends Component {
  render() {
    return (
      <div>
        <ModalManager />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <Switch>
              <Route path="/test" component={Test} />
              <Route component={NotFoundPage} />
            </Switch>
          )}
        />
      </div>
    );
  }
}

export default App;
