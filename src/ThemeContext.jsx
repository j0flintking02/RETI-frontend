// // ThemeContext.js

// import React, { createContext, useState, useEffect } from "react";

// // Create a context
// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     // Check localStorage or default to light mode
//     const savedTheme = localStorage.getItem("isDarkMode");
//     if (savedTheme) {
//       setIsDarkMode(JSON.parse(savedTheme));
//     } else {
//       setIsDarkMode(false); // default to light mode
//     }
//   }, []);

//   useEffect(() => {
//     // Update the theme in the body when isDarkMode changes
//     if (isDarkMode) {
//       document.body.classList.add("dark");
//       localStorage.setItem("isDarkMode", true); // Save the theme to localStorage
//     } else {
//       document.body.classList.remove("dark");
//       localStorage.setItem("isDarkMode", false); // Save the theme to localStorage
//     }
//   }, [isDarkMode]);

//   // Toggle function to switch between dark and light mode
//   const toggleTheme = () => {
//     setIsDarkMode((prev) => !prev);
//   };

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
import React, { createContext, useState, useEffect } from "react";

// Create a context to manage the theme state
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Set initial state based on localStorage or default to light mode
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );

  // Toggle the theme and save it to localStorage
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("isDarkMode", newMode); // Save the preference
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
