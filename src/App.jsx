// App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';

// Import Framer Motion
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading resources
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <ThemeProvider>
      <div className="app-container">
        <AnimatedBackground />
        <Navbar />
        <main className="main-content">
          <AnimatePresence mode="wait">
            {loading ? (
              <div className="loader-container">
                <div className="loader"></div>
              </div>
            ) : (
              <>
                <Home />
                <About />
                <Experience />
                <Skills />
                <Education />
                {/* <Projects /> */}
                <Contact />
              </>
            )}
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
