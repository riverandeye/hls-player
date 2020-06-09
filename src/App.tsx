import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Main from "./view/main";
import Layout from "./component/layout";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
    </Router>
  );
}

export default App;
