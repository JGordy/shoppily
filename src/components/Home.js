import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return(
      <div className='Home'>
        <div>
          <img src={require("../images/home/Goog_family.png")} alt=""/>
          <Link className="shop_google" to='/google'>Shop Google Products</Link>
        </div>
        <div>
          <img
          src={require('../images/home/MS_family.png')} alt=""/>
          <Link className="shop_ms" to='/microsoft'>Shop Microsoft Products</Link>
        </div>
        <div>
          <img src={require('../images/home/Apple_family.png')} alt=""/>
          <Link className="shop_apple" to='/apple'>Shop Apple Products</Link>
        </div>
      </div>
    );
  }
}
