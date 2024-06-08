//client/src/mugs/mugs.jsx
import React from "react";

import "./mugs.css";
import mug1 from "./images/mug1.jpeg"
import mug2 from "./images/mug2.jpeg"
import mug3 from "./images/mug3.jpeg"
import mug4 from "./images/mug4.jpeg"
import mug5 from "./images/mug5.jpeg"
import mug6 from "./images/mug6.jpeg"
import mug7 from "./images/mug7.jpeg"
import mug8 from "./images/mug8.jpeg"
import mug9 from "./images/mug9.jpeg"
import mug10 from "./images/mug10.jpeg"

const Mugs = () => {
    const mugs = [
        { src: mug1, alt: "mug 1", price: "Ksh 800" },
        { src: mug2, alt: "mug 2", price: "Ksh 800" },
        { src: mug3, alt: "mug 3", price: "Ksh 800" },
        { src: mug4, alt: "mug 4", price: "Ksh 800" },
        { src: mug5, alt: "mug 5", price: "Ksh 800" },    
        { src: mug6, alt: "mug 6", price: "Ksh 800" },    
        { src: mug7, alt: "mug 7", price: "Ksh 800" },
        { src: mug8, alt: "mug 8", price: "Ksh 800" },    
        { src: mug9, alt: "mug 9", price: "Ksh 800" },    
        { src: mug10, alt: "mug 10", price: "Ksh 800" },
    ];

    return (
      <section id="mugs">
        <h1 className="heading"><span>Best Selling</span> Mugs</h1>
        <div className="grid">
          {mugs.map((mug, index) => (
            <div className="item" key={index}>
              <img src={mug.src} alt={mug.alt} />
              <p className="price">{mug.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Mugs;