// client/src/shoes/shoes.jsx
import React from "react";

import "./shoe.css";
import shoe1 from "./images/shoe1.jpeg";
import shoe2 from "./images/shoe2.jpeg";
import shoe3 from "./images/shoe3.jpeg";
import shoe4 from "./images/shoe4.jpeg";
import shoe5 from "./images/shoe5.jpeg";
import shoe6 from "./images/shoe6.jpeg";
import shoe7 from "./images/shoe7.jpeg";
import shoe8 from "./images/shoe8.jpeg";
import shoe9 from "./images/shoe9.jpeg";
import shoe10 from "./images/shoe10.jpeg";
import shoe11 from "./images/shoe11.jpeg";
import shoe12 from "./images/shoe12.jpeg";
import shoe13 from "./images/shoe13.jpeg";

const Shoes = () => {
  const shoes = [
    { src: shoe1, alt: "Shirt 1", price: "Ksh 2000" },
    { src: shoe2, alt: "Shirt 2", price: "Ksh 2000" },
    { src: shoe3, alt: "Shirt 3", price: "Ksh 2000" },
    { src: shoe4, alt: "Shirt 4", price: "Ksh 2000" },
    { src: shoe5, alt: "Shirt 5", price: "Ksh 2000" },
    { src: shoe6, alt: "Shirt 6", price: "Ksh 2000" },
    { src: shoe7, alt: "Shirt 7", price: "Ksh 2000" },
    { src: shoe8, alt: "Shirt 8", price: "Ksh 2000" },
    { src: shoe9, alt: "Shirt 9", price: "Ksh 2000" },
    { src: shoe10, alt: "Shirt 10", price: "Ksh 2000" }, 
    { src: shoe11, alt: "Shirt 11", price: "Ksh 2000" }, 
    { src: shoe12, alt: "Shirt 12", price: "Ksh 2000" }, 
    { src: shoe13, alt: "Shirt 13", price: "Ksh 2000" }, 
  ];

    return (
      <section id="shoes">
        <h1 className="heading"><span>Top Selling</span> Shoes</h1>
        <div className="grid">
          {shoes.map((shoe, index) => (
            <div className="item" key={index}>
              <img src={shoe.src} alt={shoe.alt} />
              <p className="price">{shoe.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Shoes;