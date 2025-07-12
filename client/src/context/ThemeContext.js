 // src/context/ThemeContext.js
import { createContext, useState } from "react";
import { darkTheme, lightTheme } from "../utils/Theme";

export const ThemeContext = createContext();

export const ThemeProviderCustom = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
