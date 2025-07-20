// src/components/Darkmode/DarkMode.jsx
import React, { useEffect, useState } from "react";
import sun from "./Sun.svg";
import moon from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.body.setAttribute("data-theme", storedTheme); // ✅ FIXED
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.setAttribute("data-theme", newTheme); // ✅ FIXED
  };

  return (
    <div
      className="fixed top-4 right-4 z-50 bg-gray-100 dark:bg-gray-800 p-2 rounded-full shadow-md cursor-pointer"
      onClick={toggleTheme}
      title="Toggle theme"
    >
      <img
        src={theme === "light" ? sun : moon}
        alt="toggle icon"
        className="w-6 h-6"
      />
    </div>
  );
};

export default DarkMode;
