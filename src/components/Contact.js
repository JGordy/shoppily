import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return(
      <div className='Contact'>
        <div className="social">
          <h4>Follow us on Social Media</h4>
          <div className="social_links">
            <div><i className="fa fa-facebook-square" aria-hidden="true"></i><span className="social_span">Facebook</span></div>
            <div><i className="fa fa-twitter-square" aria-hidden="true"></i><span className="social_span">Twitter</span></div>
            <div><i className="fa fa-instagram" aria-hidden="true"></i><span className="social_span">Instagram</span></div>
            <div><img src="https://www.google.com/search?q=instagram+logo&rlz=1C5CHFA_enUS742US743&source=lnms&tbm=isch&sa=X&ved=0ahUKEwilp5bIhbrWAhWIMyYKHWbqAnIQ_AUICigB&biw=1244&bih=629#imgrc=B1mxnjLnIfSk1M:" alt=""/></div>
          </div>
        </div>
        <div className="email_link">
          <h4>Email Us</h4>
          <textarea placeholder="how may we help?"></textarea>
          <div><i className="fa fa-envelope" aria-hidden="true"></i></div>
        </div>
      </div>
    );
  }
}
