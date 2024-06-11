// client/src/Contact/Contact.jsx
import React, { useState } from "react";
import axios from "axios";

import "./Contact.css";
import config from "../config";

const Contact = () => {
  // Store the state of the form data.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.backendURL}/send-email`, formData);
      alert(response.data);      
      setFormData({       // Clear the form fields
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("There was an error sending the email!", error);
    }
  };
  
  return (
    <section id="contact">
      <h1 className="heading"><span>Contact</span> us</h1>
      <div className="contact-container">
        <div className="map-container">        
        <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.2318786211672!2d36.79463679999999!3d-1.2107672999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3d454886e4ab%3A0xc48e63a813496999!2sTwo%20Rivers!5e0!3m2!1sen!2ske!4v1717074885498!5m2!1sen!2ske"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" name="name" className="box" value={formData.name} onChange={handleChange} />
            <input type="email" placeholder="email" name="email" className="box" value={formData.email} onChange={handleChange} />
            <textarea name="message" placeholder="message" className="box" id="" cols="30" rows="10" value={formData.message} onChange={handleChange}></textarea>
            <button type="submit">Send Message</button>
          </form>          
        </div>
      </div>
    </section>
  );
};

export default Contact;
