import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from './ThemeToggle';
import '../styles/Navbar.css';
// Import your logo images - adjust paths as needed
import logoLight from '/assets/G.png';
import logoDark from '/assets/G.png';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const [activeLink, setActiveLink] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else { 
        setScrolled(false);
      }
      
      // Update active link based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setActiveLink(sectionId);
    
    const section = document.getElementById(sectionId);
    
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    
    setIsMobileMenuOpen(false);
  };

  const navbarVariants = {
    hidden: {
      y: -100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
        staggerDirection: 1
      }
    }
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: -20
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  // Choose logo based on theme
  const logoSrc = theme === 'dark' ? logoDark : logoLight;

  return (
    <motion.nav 
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar-container">
        <motion.div 
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#home" onClick={(e) => scrollToSection(e, "home")}>
            <img src={logoSrc} alt="Portfolio Logo" className="logo-image" />
            <span className="logo-text">Portfolio</span>
          </a>
        </motion.div>
        
        <div className="navbar-right">
          <div className="desktop-menu">
            {["home", "about", "experience", "skills", "education", "contact"].map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                className={`nav-item ${activeLink === section ? "active" : ""}`}
                onClick={(e) => scrollToSection(e, section)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            ))}
            
            <ThemeToggle />
          </div>
          
          {/* <motion.button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <div className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </motion.button> */}
        </div>
      </div>
      
      {/* <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {["home", "about", "experience", "skills", "education", "projects", "contact"].map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                className={`mobile-nav-item ${activeLink === section ? "active" : ""}`}
                onClick={(e) => scrollToSection(e, section)}
                variants={menuItemVariants}
                whileTap={{ scale: 0.95 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            ))}
            
            <motion.div variants={menuItemVariants} className="mobile-theme-toggle">
              <ThemeToggle />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </motion.nav>
  );
};

export default Navbar;