import React, { Component } from 'react'

import Profilebar from "../navbars/profile-navbar";

export default class Profile extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
      return (
          <div>
                <Profilebar/>
          </div>
      )
  }
}