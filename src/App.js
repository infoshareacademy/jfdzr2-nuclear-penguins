import React from "react";
import { Login } from "./components/login/Login";

import { HomePage } from "./components/navigation/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
