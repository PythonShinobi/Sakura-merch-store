//client/src/pillows/pillow.jsx
import React from "react";

import "./pillow.css";
import pillow1 from "./images/pillow1.jpeg";
import pillow2 from "./images/pillow2 (1).jpeg";
import pillow3 from "./images/pillow3 (3).jpeg";
import pillow4 from "./images/pillow4 (2).jpeg";
import pillow5 from "./images/pillow5 (4).jpeg";
import pillow6 from "./images/pillow6.jpg";
import pillow7 from "./images/pillow7.jpg";
import pillow8 from "./images/pillow8.jpg";

const Pillows = () => {
    const pillows = [
        { src: pillow1, alt: "Shirt 1", price: "Ksh 1500" },
        { src: pillow2, alt: "Shirt 2", price: "Ksh 1500" },
        { src: pillow3, alt: "Shirt 3", price: "Ksh 1500" },
        { src: pillow4, alt: "Shirt 4", price: "Ksh 1500" },
        { src: pillow5, alt: "Shirt 5", price: "Ksh 1500" },
        { src: pillow6, alt: "Shirt 6", price: "Ksh 1500" },
        { src: pillow7, alt: "Shirt 7", price: "Ksh 1500" },
        { src: pillow8, alt: "Shirt 8", price: "Ksh 1500" },
    ];

    return (
        <section id="pillows">
          <h1 className="heading"><span>Plushy</span> Pillows</h1>
          <div className="grid">
            {pillows.map((pillow, index) => (
              <div className="item" key={index}>
                <img src={pillow.src} alt={pillow.alt} />
                <p className="price">{pillow.price}</p>
              </div>
            ))}
          </div>
        </section>
      );
};

export default Pillows;