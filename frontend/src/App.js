import React from 'react';
import './App.css';
import Home from './components/Home'
import Blogs from './components/Blogs'
import Blog from './components/Blog'
import AddBlog from './components/AddBlog'

import LoginPage from './components/LoginPage'
import Logout from './components/Logout'



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Register from './components/Register';
import TempNav from './components/TempNav';

function App() {

  return (
    
    <div className="App">

      
      
      <Router>

      

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/addBlog" component={AddBlog} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/tempNav" component={TempNav} />
          <Route exact path="/blogs/:id" component={Blog} />

        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
