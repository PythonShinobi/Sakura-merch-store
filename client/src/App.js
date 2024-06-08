// client/src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Hero from "./Hero-Section/Hero";
import TShirts from "./t-shirts/t-shirts";
import Shoes from "./shoes/shoes";
import Pillows from "./pillows/pillow";
import Cases from "./phone-cases/phone-case";
import Mugs from "./mugs/mugs";
import About from "./About/About";
import Contact from "./Contact/Contact";

function App() {
    return (
        <Router>
            <Navbar />
            <Hero />
            <TShirts />
            <Shoes />
            <Pillows />
            <Cases />
            <Mugs />
            <About />
            <Contact />
        </Router>
    );
};

export default App;