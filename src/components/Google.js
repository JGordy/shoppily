import React, { Component } from 'react';
import products from '../data/data.js';

export default class Google extends Component {

  render() {
    console.log(products.Google);
    let devices = products.Google.map((device) => {
      return <div key={device.id} className="google_device">
              <img src={device.pic_url} alt="" />
              <div>
                <h3>{device.name}</h3>
                <h5 className="price">{device.price}</h5>
                <p className="specs">{device.specs}</p>
                <div className="google_cart_add cart_add">
                <i className="material-icons">add_shopping_cart</i></div>
              </div>
            </div>
    })
    return(
      <div className='Google'>
        {devices}
      </div>
    );
  }
}
