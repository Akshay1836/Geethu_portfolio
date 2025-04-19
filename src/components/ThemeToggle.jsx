import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FiSun, FiMoon, FiZap } from 'react-icons/fi';
import '../styles/ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme, setTheme, availableThemes } = useContext(ThemeContext);
  
  // Animation types available
  const animationTypes = ['bubbles', 'grid', 'particles', 'waves', 'stars'];
  
  const toggleAnimationType = () => {
    if (theme === 'animated') {
      // Get current animation type
      const currentType = localStorage.getItem('animationBackgroundType') || 'bubbles';
      const currentIndex = animationTypes.indexOf(currentType);
      const nextIndex = (currentIndex + 1) % animationTypes.length;
      const newType = animationTypes[nextIndex];
      
      // Save new animation type
      localStorage.setItem('animationBackgroundType', newType);
      
      // Force re-render of animation by briefly switching theme
      setTheme('dark');
      setTimeout(() => setTheme('animated'), 50);
    } else {
      // If not in animated theme, switch to animated
      setTheme('animated');
    }
  };
  
  const isDarkTheme = ['dark', 'ocean', 'cyberpunk', 'sunset', 'neon', 'animated', 'forest'].includes(theme);
  const isAnimated = theme === 'animated';

  return (
    <div className="theme-toggle-container">
      {/* Dark/Light theme toggle */}
      <div className="toggle-wrapper theme-mode">
        <input
          type="checkbox"
          id="theme-toggle"
          className="theme-toggle"
          checked={isDarkTheme}
          onChange={toggleTheme}
          aria-label={`Switch to ${isDarkTheme ? 'light' : 'dark'} mode`}
        />
        <label htmlFor="theme-toggle" className={`theme-toggle-label mode-toggle ${isDarkTheme ? 'active' : ''}`}>
          <span className="toggle-icon-wrapper light">
            <FiSun className="toggle-icon" />
          </span>
          <div className="toggle-ball">
            {isDarkTheme ? <FiMoon className="toggle-icon" /> : <FiSun className="toggle-icon" />}
          </div>
          <span className="toggle-icon-wrapper dark">
            <FiMoon className="toggle-icon" />
          </span>
        </label>
      </div>

      {/* Enhanced Animation Changer toggle */}
      <div className="toggle-wrapper animation-toggle">
        <input
          type="checkbox"
          id="animated-toggle"
          className="theme-toggle"
          checked={isAnimated}
          onChange={toggleAnimationType}
          aria-label="Change animation type"
        />
        {/* <label htmlFor="animated-toggle" className={`animation-toggle-label ${isAnimated ? 'active' : ''}`}>
          <div className="animation-track">
            <FiZap className="animation-icon" />
            <span className="animation-text">
              {isAnimated ? localStorage.getItem('animationBackgroundType') || 'bubbles' : 'Anim'}
            </span>
            <div className="animation-sparkles">
              <div className="sparkle sparkle-1"></div>
              <div className="sparkle sparkle-2"></div>
              <div className="sparkle sparkle-3"></div>
            </div>
          </div>
        </label> */}
      </div>
    </div>
  );
};

export default ThemeToggle;