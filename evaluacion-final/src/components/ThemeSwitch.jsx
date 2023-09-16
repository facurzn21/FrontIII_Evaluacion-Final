import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import './ThemeSwitch.css';

const ThemeSwitch = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div onClick={toggleTheme} className="theme-switch">
      {darkMode ? "Modo Claro" : "Modo Oscuro"}
    </div>
  );
};

export default ThemeSwitch;
