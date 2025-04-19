import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import '../styles/Contact.css';
const Contact = () => {
  return ( 
    <>
      <div className="container contact" id="contact">
        {/* <h1>CONTACT ME</h1> */}
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/__gee__thu__/" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          {/* <a href="https://www.facebook.com/babu.gupta.75033" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a> */}
          {/* <a href="https://github.com/ShivamG1979" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a> */}
          <a href="https://www.linkedin.com/in/geethu-p-uday/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          
          
          <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=geethuudayanan@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="items"
        >
          <SiGmail className="icons" />
        </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
