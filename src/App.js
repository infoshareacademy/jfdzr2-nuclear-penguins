import React from 'react';
import {Login} from './components/service/Login';

import {HomePage} from './components/navigation/HomePage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Signup from './components/service/Signup';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
