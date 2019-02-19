import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login"
import Home from "./Home"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faSpinner)

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/login/" component={Login} />
    </div>
  </Router>
);

export default AppRouter;
