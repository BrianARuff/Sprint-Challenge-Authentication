import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Jokes from "./components/Jokes";

ReactDOM.render(
  <Router>
    <React.Fragment>
      <div style={{border: '1px solid black', padding: '20px'}}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/jokes">Jokes</Link>
        <Link to="/logout">Logout</Link>
      </div>
      <Route exact path="/" render={props => <App {...props} />} />
      <Route path="/jokes" render={props => <Jokes {...props} />} />
    </React.Fragment>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
