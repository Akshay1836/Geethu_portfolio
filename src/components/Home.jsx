// Home.jsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { useInView } from "react-intersection-observer";
import pdf from "../pdf/resume.pdf";
import heroData from "./data/hero.json";
import '../styles/Home.css';

const Home = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.6
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 1.2, duration: 0.3 }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 25px rgba(var(--accent-color-rgb), 0.4)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };



  const scrollDownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: [0, 1, 0],
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: 2,
      }
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="hero-backdrop"></div>
      <motion.div
        ref={ref}
        className="container home-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="home-content">
          <div className="home-left">
            {/* <motion.h2 className="greeting" variants={itemVariants}>
              {heroData.greeting}
            </motion.h2> */}
            <motion.h1 className="name" variants={itemVariants}>
              {heroData.name}
            </motion.h1>
            <motion.div className="title-wrapper" variants={itemVariants}>
              <TypeAnimation
                sequence={heroData.titles.map(title => [title, 2000]).flat()}
                wrapper="span"
                className="job-title"
                cursor={true}
                repeat={Infinity}
              />
            </motion.div>
            
            <motion.p className="bio" variants={itemVariants}>
              {heroData.bio}
            </motion.p>
            
            <motion.div className="btn-container" variants={itemVariants}>
              <motion.a
                href={pdf}
                download
                className="btn primary-btn"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <i className="fas fa-download"></i> Download Resume
              </motion.a>
              
              <motion.a
                href="#contact"
                className="btn secondary-btn"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Contact Me
              </motion.a>
            </motion.div>
            
            
          </div>
          
          <motion.div 
            className="home-right"
            variants={imageVariants}
          >
            <div className="image-container">
              <div className="hex-mask">
                <img src={heroData.image} alt="Profile" className="profile-image" />
              </div>
              <div className="circle-bg"></div>
              <div className="circle-orbit"></div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-down" 
          variants={scrollDownVariants}
          animate="visible"
        >
          <i className="fas fa-chevron-down"></i>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;