import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return(
      <div className='Home'>
        <div>
          <img src={require("../images/home/Goog_family.png")} alt=""/>
        </div>
        <div>
          <img
          src={require('../images/home/MS_family.png')} alt=""/>
        </div>
        <div>
          <img src={require('../images/home/Apple_family.png')} alt=""/>
        </div>
      </div>
    );
  }
}
