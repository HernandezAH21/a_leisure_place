import React, { Component } from 'react';

import HomeContainer from "../contents/home-container";
import NavigationBar from "../navbars/home-navbar";


export default class Home extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
      return (
          <div>
                <NavigationBar/>
                <HomeContainer />
          </div>
      )
  }
}