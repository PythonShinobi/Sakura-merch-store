// client/src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Hero from "./Hero-Section/Hero";
import TShirts from "./t-shirts/t-shirts";
import Shoes from "./shoes/shoes";

function App() {
    return (
        <Router>
            <Navbar />
            <Hero />
            <TShirts />
            <Shoes />
        </Router>
    );
};

export default App;