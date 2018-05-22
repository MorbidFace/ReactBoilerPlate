import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../../features/home/HomePage';
import Test from '../../features/testarea/Test';
import ModalManager from '../../features/modals/ModalManager';

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
            </Switch>
          )}
        />
      </div>
    );
  }
}

export default App;
