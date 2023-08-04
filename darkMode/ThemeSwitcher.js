"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonFill } from "react-icons/bs";
import { BsCloudSun } from "react-icons/bs";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? "light" : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeToggle = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <div >
      <input
        type="checkbox"
        className="checkbox  "
        id="checkbox"
        checked={currentTheme === "dark"}
        onChange={handleThemeToggle}
      />
      <label htmlFor="checkbox" className="checkbox-label ">
        {currentTheme === "dark" ? <BsFillMoonFill /> : <BsCloudSun size={20} className="absolute  right-0 text-white" /> }
      
        <span className="ball"></span>
      </label>

    </div>
  );


};

export default ThemeSwitcher;
