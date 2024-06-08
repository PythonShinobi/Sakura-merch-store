// client/src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Hero from "./Hero-Section/Hero";
import TShirts from "./t-shirts/t-shirts";
import Shoes from "./shoes/shoes";
import Pillows from "./pillows/pillow";
import Cases from "./phone-cases/phone-case";

function App() {
    return (
        <Router>
            <Navbar />
            <Hero />
            <TShirts />
            <Shoes />
            <Pillows />
            <Cases />
        </Router>
    );
};

export default App;