import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


import Logo from '../../../static/assets/images/logo2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class NavigationBar extends Component {
    constructor() {
      super();
    } 
    
    render() {
        return (
            <div className="navigation-wrapper">
                <div className="left-side">
                    <div className="nava-link-wrapper">
                        <NavLink exact to="/" className="logo" activeClassName="nava-link-active">
                            <img src={Logo} />
                        </NavLink>
                    </div>
                </div>

                {/* <div className="center-side">
                    <div className="nav-link-wrapper">
                        <a  activeClassName="nav-link-active">
                            <input id="filter" type="text" placeholder="Search" />
                        </a>
                    </div>
                </div> */}

                <div className="right-side">
                    <div className="nav-link-wrapper">
                        <NavLink to="/profile" activeClassName="nav-link-active">
                            <FontAwesomeIcon icon="user"/> Profile
                        </NavLink>
                    </div>
                    {/* <div className="nav-link-wrapper">
                        <NavLink to="/about" activeClassName="nav-link-active">
                         About
                        </NavLink>
                    </div> */}
                    <div className="nav-link-wrapper">
                        <NavLink to="/world" activeClassName="nav-link-active">
                        <FontAwesomeIcon icon="globe-americas"/> World
                        </NavLink>
                    </div> 
                </div>  

            </div>     
        );
    }
};
