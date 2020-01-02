import React from 'react';
import './App.css';
import Users from './components/Users'
import User from './components/User'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route exact path="/" component={Users}>
            <Users></Users>
          </Route>

          <Route exact path ="/:userid" component={User}></Route>
        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
