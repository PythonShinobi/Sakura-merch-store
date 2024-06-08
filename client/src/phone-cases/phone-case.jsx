//client/src/phone-cases/phone-case.jsx
import React from "react";

import "./phone-case.css";
import case1 from "./images/phone-case1 (1).jpeg";
import case2 from "./images/phone-case2(2).jpeg";
import case3 from "./images/phone-case3 (3).jpeg";
import case4 from "./images/phone-case4 (4).jpeg";
import case5 from "./images/phone-case5 (5).jpeg";
import case7 from "./images/phone-case7 (7).jpeg";
import case8 from "./images/phone-case8 (8).jpeg";
import case10 from "./images/phone-case10 (10).jpeg";
import case11 from "./images/phone-case11 (11).jpeg";
import case12 from "./images/phone-case12 (12).jpeg";
import case13 from "./images/phone-case13 (13).jpeg";

const Cases = () => {
  const cases = [
    { src: case1, alt: "Shirt 1", price: "Ksh 800" },
    { src: case2, alt: "Shirt 2", price: "Ksh 800" },
    { src: case3, alt: "Shirt 3", price: "Ksh 800" },
    { src: case4, alt: "Shirt 4", price: "Ksh 800" },
    { src: case5, alt: "Shirt 5", price: "Ksh 800" },    
    { src: case7, alt: "Shirt 7", price: "Ksh 800" },
    { src: case8, alt: "Shirt 8", price: "Ksh 800" },    
    { src: case10, alt: "Shirt 10", price: "Ksh 800" },
    { src: case11, alt: "Shirt 11", price: "Ksh 800" },
    { src: case12, alt: "Shirt 12", price: "Ksh 800" },
    { src: case13, alt: "Shirt 13", price: "Ksh 800" },
  ];

  return (
    <section id="phone-cases">
      <h1 className="heading"><span>Premium</span> Phone cases</h1>
      <div className="grid">
        {cases.map((phone_case, index) => (
          <div className="item" key={index}>
            <img src={phone_case.src} alt={phone_case.alt} />
            <p className="price">{phone_case.price}</p>
          </div>
        ))}
      </div>
    </section>
    );
};

export default Cases;