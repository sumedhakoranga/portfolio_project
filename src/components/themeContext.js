import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("bg-gray-700", "text-white");
      document.body.classList.remove("bg-white", "text-gray-900");
    } else {
      document.body.classList.add("bg-white", "text-gray-900");
      document.body.classList.remove("bg-gray-700", "text-white");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
