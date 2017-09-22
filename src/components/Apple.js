import React, { Component } from 'react';
import products from '../data/data.js';

export default class Apple extends Component {
  render() {
    let devices = products.Apple.map((device) => {
      return <div key={device.id} className="google_device">
              <img src={device.pic_url} alt="" />
              <div>
                <h3>{device.name}</h3>
                <h5>{device.price}</h5>
                <p>{device.specs}</p>
                <a href="#" className="cart_add">
                <i className="material-icons">add_shopping_cart</i></a>
              </div>
             </div>
    })
    return(
      <div className='Apple'>
        <h1>Apple Page</h1>
      </div>
    );
  }
}
