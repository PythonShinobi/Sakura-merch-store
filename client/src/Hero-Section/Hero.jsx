//client/src/Hero-Section/Hero.jsx
import React from "react";

import "./Hero.css";
import sakuraImage from "./bg-image/bg.jpeg"

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-text">
          <img src={sakuraImage} alt="Sakura Haruno Image" className="hero-image" />
          <div className="overlay">
            <h1>Check Out The Merch</h1>
            <a href="#t-shirts" className="btn">View Collection</a>
          </div>
      </div>
    </section>
  );
};

export default Hero;
