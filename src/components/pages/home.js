import React, { Component } from 'react';

import HomeContainer from "../contents/home-container";

export default class Home extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
      return (
          <div>
              <HomeContainer />
          </div>
      )
  }
}