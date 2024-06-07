// client/src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Hero from "./Hero-Section/Hero";

function App() {
    return (
        <Router>
            <Navbar />
            <Hero />
        </Router>
    );
};

export default App;