import React from "react";
import { Link } from "react-router-dom";

import "./Hero_test.css";
import IMG from "../../assets/main5.jpg";

const Hero_test = () => {
  return (
    <div className="hero-container">
      {/* <div className="hero-header">
            <h1><a href="#">RENTAL</a></h1>
            <div className="hero-nav">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">BOOKS</a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#">CART</a></li>
                    <li><a href="#">LOGIN</a></li>
                </ul>
            </div>
        </div> */}
      <div className="hero-img">
        <div className="hero-back"></div>
        <img src={IMG}></img>
      </div>
      <div className="hero-desc">
        <h2>BOOK RENTAL FOR ME</h2>
        <p>
          Read a book for you through our rental.<br></br>
          You can see yourself more grown by reading.
        </p>
          <Link to="/products">WATCH BOOKS</Link>
      </div>
    </div>
  );
};

export default Hero_test;
