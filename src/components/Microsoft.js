import React, { Component } from 'react';
import products from '../data/data.js';

export default class Microsoft extends Component {
  render() {
    let devices = products.Microsoft.map((device) => {
      return <div key={device.id} className="google_device">
              <img src={device.pic_url} alt="" />
              <div>
                <h3>{device.name}</h3>
                <h5 className="price">{device.price}</h5>
                <p className="specs">{device.specs}</p>
                <a href="#" className="ms_cart_add cart_add">
                <i className="material-icons">add_shopping_cart</i></a>
              </div>
             </div>
    })
    return(
      <div className='Microsoft'>
        {devices}
      </div>
    );
  }
}
