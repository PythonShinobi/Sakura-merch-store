// client/src/t-shirts/t-shirts.jsx
import React from "react";

import "./t-shirts.css";
import shirt1 from "./images/shirt1.jpeg";
import shirt2 from "./images/shirt2.jpeg";
import shirt3 from "./images/shirt3.jpeg";
import shirt4 from "./images/shirt4.jpeg";
import shirt5 from "./images/shirt5.jpeg";
import shirt6 from "./images/shirt6.jpeg";
import shirt7 from "./images/shirt7.jpeg";
import shirt8 from "./images/shirt8.jpeg";
import shirt9 from "./images/shirt9.jpeg";
import shirt10 from "./images/shirt10.jpeg";
import shirt11 from "./images/shirt11.jpeg";
import shirt12 from "./images/shirt12.jpeg";

const TShirts = () => {
    const shirts = [
      { src: shirt1, alt: "Shirt 1", price: "Ksh 1000" },
      { src: shirt2, alt: "Shirt 2", price: "Ksh 1000" },
      { src: shirt3, alt: "Shirt 3", price: "Ksh 1000" },
      { src: shirt4, alt: "Shirt 4", price: "Ksh 1000" },
      { src: shirt5, alt: "Shirt 5", price: "Ksh 1000" },
      { src: shirt6, alt: "Shirt 6", price: "Ksh 1000" },
      { src: shirt7, alt: "Shirt 7", price: "Ksh 1000" },
      { src: shirt8, alt: "Shirt 8", price: "Ksh 1000" },
      { src: shirt9, alt: "Shirt 9", price: "Ksh 1000" },
      { src: shirt10, alt: "Shirt 10", price: "Ksh 1000" },
      { src: shirt11, alt: "Shirt 10", price: "Ksh 1000" },
      { src: shirt12, alt: "Shirt 10", price: "Ksh 1000" },
    ];

    return (
      <section id="t-shirts">
        <h1 className="heading"><span>Trending</span> T-shirts </h1> 
        <div className="grid">
          {shirts.map((shirt, index) => (
            <div className="item" key={index}>
              <img src={shirt.src} alt={shirt.alt} />
              <p className="price">{shirt.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
}

export default TShirts;