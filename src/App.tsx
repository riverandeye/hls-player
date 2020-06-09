import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import Main from "./view/main";
import Watch from "./view/watch";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/watch/:streamerId" exact component={Watch} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
