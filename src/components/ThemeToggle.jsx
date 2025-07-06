import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-1.5 bg-gray-200 dark:bg-gray-700 rounded-full transition-all text-sm text-gray-800 dark:text-white hover:scale-105"
    >
      {theme === "light" ? (
        <>
          <MoonIcon className="h-4 w-4" />
          Dark
        </>
      ) : (
        <>
          <SunIcon className="h-4 w-4" />
          Light
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
