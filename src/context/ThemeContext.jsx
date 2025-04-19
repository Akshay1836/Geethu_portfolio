import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  theme: 'dark',
  setTheme: () => {},
  toggleTheme: () => {},
  availableThemes: [
    'light', 
    'dark', 
    'cyberpunk', 
    'minimalist', 
    'ocean', 
    'forest', 
    'sunset', 
    'neon',  
    'animated'
  ],
});

export const ThemeProvider = ({ children }) => {
  const availableThemes = [
    
    'dark', 
    'cyberpunk', 
    'minimalist', 
    'ocean', 
    'forest', 
    'sunset', 
    'neon', 
   
  ];
  
  const [theme, setTheme] = useState(() => {
    // Try to get theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    return savedTheme && availableThemes.includes(savedTheme) ? savedTheme : 'dark';
  });

  useEffect(() => {
    // Update data-theme attribute on document body when theme changes
    document.body.setAttribute('data-theme', theme);
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const currentIndex = availableThemes.indexOf(prevTheme);
      const nextIndex = (currentIndex + 1) % availableThemes.length;
      return availableThemes[nextIndex];
    });
  };
  
  // Function to set a specific theme
  const selectTheme = (themeName) => {
    if (availableThemes.includes(themeName)) {
      setTheme(themeName);
    }
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      setTheme: selectTheme, 
      toggleTheme, 
      availableThemes 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};