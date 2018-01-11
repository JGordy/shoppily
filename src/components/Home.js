import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0
    }
  }

  showSlides = () => {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      // console.log("slides: ", slides);
      let dots = document.getElementsByClassName("dot");
      // console.log("dot: ", dots);
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
      }
      this.state.slideIndex++;
      if (this.state.slideIndex > slides.length) {this.state.slideIndex = 1}
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.state.slideIndex-1].style.display = "block";
      dots[this.state.slideIndex-1].className += " active";
      // setTimeout(this.showSlides, 2000); // Change image every 2 seconds
  }

  componentDidMount() {
    let slides = document.getElementsByClassName("mySlides");
    console.log(slides);
    slides[2].style.display = "block";
    this.interval = setInterval(this.showSlides, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }


  render() {
    return(
      <div className='Home slideshow-container'>
        <div className="mySlides fade">
          <img src={require("../images/home/Goog_family.png")} alt="#"/>
          <Link className="shop_google" to='/shoppily/google'>Shop Google Products</Link>
        </div>
        <div className="mySlides fade">
          <img
          src={require('../images/home/MS_family.png')} alt="#"/>
          <Link className="shop_ms" to='/shoppily/microsoft'>Shop Microsoft Products</Link>
        </div>
        <div className="mySlides fade">
          <img src={require('../images/home/Apple_family.png')} alt="#"/>
          <Link className="shop_apple" to='/shoppily/apple'>Shop Apple Products</Link>
        </div>

        <div id='dot-container'>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

      </div>
    );
  }
}
