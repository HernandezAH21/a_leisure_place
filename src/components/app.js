import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import NavigationBar from "./contents/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";
import World from "./pages/world";

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationBar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/about" component={About} />
              <Route path="/world" component={World} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
