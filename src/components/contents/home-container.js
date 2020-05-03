import React, { Component } from "react";
import Typist from 'react-typist';

export default class HomeContainer extends Component {

  render() {
    return (
        <div className="page-container">
            <div className="information-text">
                <div className="first-text">
                    <Typist>
                        Welcome to "A Leisure Place"
                        <Typist.Delay ms={100} />
                        <br />
                        <Typist.Delay ms={100} />
                        build your own site, your own space with                       
                        <br />
                        <Typist.Delay ms={100} />
                        all the things you like
                        <br />
                        <Typist.Delay ms={100} />
                        songs or playlists,
                        <br />
                        <Typist.Delay ms={100} />
                        favorite online video games,
                        <br />
                        <Typist.Delay ms={100} />
                        favorite episode of your series,
                        <br />
                        <Typist.Delay ms={100} />
                        favorite movie,
                        <br />
                        <Typist.Delay ms={100} />
                        photos and selfies,
                        <br />
                        <Typist.Delay ms={100} />
                        whatever you need,
                        <br />
                        <Typist.Delay ms={100} />
                        fast and everything in one place ..
                        <br />
                        <Typist.Delay ms={100} />
                        Click here to build your own leisure place.
                        <br />
                    </Typist>
                </div>
            </div>

            <div className="login-wrapper">
                <form className="format-wrapper">
                    <div className="login-group">
                        <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        />
                    </div>

                    <div className="login-group">
                        <input
                        type="password"
                        name="password"
                        placeholder="Your password"
                        />
                    </div>

                    <button className="btn" type="submit">
                        Login
                    </button>
                </form>
            </div>
      </div>
    );
  }
}