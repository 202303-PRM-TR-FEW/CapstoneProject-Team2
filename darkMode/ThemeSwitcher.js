"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import DayNightToggle from "react-day-and-night-toggle";

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

  return (
    <div>
      <div>
        {currentTheme === "dark" ? (
          <DayNightToggle
            size={29}
            checked={true}
            onChange={() => setTheme("light")}
            shadows={false}
          />
        ) : (
          <DayNightToggle
            size={29}
            checked={false}
            onChange={() => setTheme("dark")}
            shadows={false}
          />
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
