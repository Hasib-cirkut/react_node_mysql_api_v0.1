import React from 'react';
import './App.css';
import Home from './components/Home'
import Blogs from './components/Blogs'
import AddBlog from './components/AddBlog'
import Nav from './components/NavBar'

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

      <Nav></Nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/addBlog" component={AddBlog} />
        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
