import React from "react";
import '../styles/Footer.css';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="container footer" >
      
      <p className="copyright">
        &copy; {currentYear} Geethu P Uday. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;