import React from 'react';
import {Login} from './components/service/Login';

import {HomePage} from './components/navigation/HomePage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Signup from './components/service/Signup';
import Bartable from './components/bar/Bartable';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/bartable" component={Bartable} />
      </Switch>
    </Router>
  );
}
console.log('start');

export default App;
