// client/src/Footer/Footer.jsx
import React from "react";
import { FaTiktok, FaTwitter, FaReddit } from 'react-icons/fa';

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.tiktok.com/@_mangapanels" target="_blank" rel="noopener noreferrer" className="tiktok">
          <FaTiktok size={20} />
        </a>
        <a href="https://twitter.com/PythonShinobi" target="_blank" rel="noopener noreferrer" className="twitter">
          <FaTwitter size={20} />
        </a>
        <a href="https://www.reddit.com/user/thebadestuchiha1234/" target="_blank" rel="noopener noreferrer" className="reddit">
          <FaReddit size={20} />
        </a>
      </div>
      <p>&copy; 2024 Sakura. All rights reserved.</p>
    </footer>
  );
};

export default Footer;