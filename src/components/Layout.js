import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {
    let headerStyle = {
      color: 'black'
    }
    let navStyle = {
      textDecoration: 'none',
      margin: "0px 8px",
      padding: "5px"
    }
    return(
      <div className="main">
        <header style={headerStyle}>
          <h1>Shoppily</h1>
        </header>
        <nav>
          <ul className='top_nav'>
            <li className="nav_links">
              <NavLink activeClassName="selected" style={navStyle} exact to='/'>Home
              </NavLink>
            </li>
            <li className="nav_links">
              <NavLink activeClassName="selected" style={navStyle} to='/about'>About</NavLink>
            </li>
            <li className="nav_links">
              <NavLink activeClassName="selected" style={navStyle} to='/contact'>Contact Us</NavLink>
            </li>
            <li className="products">
              <div>Products</div>
              <ul className='sub_nav'>
                <li className="sub_nav_links google">
                  <NavLink activeClassName='selected' style={navStyle}
                  to='/google'>Google</NavLink>
                </li>
                <li className="sub_nav_links microsoft">
                  <NavLink activeClassName='selected' style={navStyle}
                  to='/microsoft'>Microsoft</NavLink>
                </li>
                <li className="sub_nav_links apple">
                  <NavLink activeClassName='selected' style={navStyle}
                  to='/apple'>Apple</NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <div className="go_cart">
          <div><i className="material-icons">shopping_cart</i></div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
