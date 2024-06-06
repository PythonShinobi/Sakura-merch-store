// client/src/Navbar/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // Function to toggle the visibility of the menu.
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Function to close the menu on mobile devices.
  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
        setShowMenu(false);
    }
  };

  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // This setup helps in dynamically tracking which section is currently active based on its visibility.
  useEffect(() => {
    // Select all sections in the document.
    const sections = document.querySelectorAll("section");

    // Define options for the IntersectionObserver.
    const options = {
        root: null, // Use the viewport as the container
        rootMargin: "0px", // No margin around the root
        threshold: 0.6, // Trigger callback when 60% of the section is visible
    };

    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver((entries) => {
      // Iterate over each entry (section) being observed
      entries.forEach((entry) => {
        // Check if the section is currently intersecting (visible)
        if (entry.isIntersecting) {
          // Update the active section state with the current section's ID
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe each section
    sections.forEach((section) => {
      observer.observe(section);
    });
  
    // Cleanup function to unobserve sections when component unmounts
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };

  }, []);

  // An event listener to detect clicks outside of the navigation menu.
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the click event target is not within the navigation menu 
      //  set showMenu state to false.
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowMenu(false);
        setShowDropdown(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="logo">Sakura</div>
        <nav ref={navRef}>
          <div className={`nav-menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
            <ul>
              <li>
                <a href="#home" className={`nav-link ${activeSection === "home" ? "active-link" : ""}`} onClick={closeMenuOnMobile}>
                  Home
                </a>
              </li>
              <li className="dropdown">
                <a href="#merch" className={`nav-link ${activeSection === "merch" ? "active-link" : ""}`} onClick={toggleDropdown}>
                  Merch
                </a>
                {showDropdown && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#t-shirts" onClick={toggleDropdown}>Shirts</a>
                    </li>
                    <li>
                      <a href="#shoes" onClick={toggleDropdown}>Shoes</a>
                    </li>
                    <li>
                      <a href="#pillows" onClick={toggleDropdown}>Pillows</a>
                    </li>
                    <li>
                      <a href="#phone-cases" onClick={toggleDropdown}>Cases</a>
                    </li>
                    <li>
                      <a href="#phone-cases" onClick={toggleDropdown}>Mugs</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#about" className={`nav-link ${activeSection === "about" ? "active-link" : ""}`} onClick={closeMenuOnMobile}>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className={`nav-link ${activeSection === "contact" ? "active-link" : ""}`} onClick={closeMenuOnMobile}>
                  Contact
                </a>
              </li>
            </ul>
            <div className="nav-close" id="nav-close" onClick={toggleMenu}><IoClose /></div>
          </div>

          <div className="nav-toggle" id="nav-toggle" onClick={toggleMenu}><IoMenu /></div>  
        </nav>
  </header>
  );
};

export default Navbar;