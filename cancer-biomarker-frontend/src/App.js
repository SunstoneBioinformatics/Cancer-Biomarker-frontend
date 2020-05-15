import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

import Home from './Home';
import Header from './Header';
import Tool from './Tool';
import Users from  './Users';
import MyJobs from './MyJobs';


export default function App() {

  return (
    <Router>
      <div >
      <Header />
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users username={"Test-user: Pedro Páramo"}/>
          </Route>
          <Route path="/cancer-nn">
            <Tool />
          </Route>
          <Route path="/my-jobs">
            <MyJobs username={"Test-user: Pedro Páramo"} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}
 



function About() {
  return <h2>Work in progress</h2>;
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}