import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import Main from "./view/main";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
