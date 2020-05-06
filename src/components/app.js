import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Home from "./pages/home";
// import About from "./pages/about";
import Profile from "./pages/profile";
import World from "./pages/world";
import Create from "./pages/create";
import Icons from "./contents/icons";


export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();

  }

  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={Profile} />
              {/* <Route path="/about" component={About} /> */}
              <Route path="/world" component={World} />
              <Route path="/create" component={Create} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
