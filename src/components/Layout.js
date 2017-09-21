import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {

    let headerStyle = {
      bakgroundColor: 'black'
    }

    let navStyle = {
      color: 'blue',
      textDecoration: 'none',
      margin: "0px 8px",
      padding: "5px"
    }

    return(
      <div className="main">
        <header>
          <h1>Shoppily</h1>
        </header>
        <nav>
          <NavLink activeClassName="selected" style={navStyle} exact to='/'>Home
          </NavLink>
        </nav>
      </div>

    );
  }
}
