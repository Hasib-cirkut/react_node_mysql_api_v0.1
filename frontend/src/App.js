import React from 'react';
import './App.css';
import Home from './components/Home'
import Blogs from './components/Blogs'
import AddBlog from './components/AddBlog'
import Nav from './components/NavBar'
import LoginPage from './components/LoginPage'
import Logout from './components/Logout'
import {isLoggedIn} from './components/Auth'


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
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={Logout} />
        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
