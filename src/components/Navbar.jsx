import { useState } from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <span className="font-bold text-lg text-blue-700 dark:text-blue-400">
          My Portfolio
        </span>

        {/* Hamburger (mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
            ☰
          </button>
        </div>

        {/* Nav Links */}
        <div className={`md:flex items-center space-x-4 text-sm hidden`}>
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-300">About</a>
          <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-300">Skills</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-300">Projects</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-300">Contact</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-xs"
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2 text-sm text-center">
          <a href="#about" className="block hover:text-blue-600 dark:hover:text-blue-300">About</a>
          <a href="#skills" className="block hover:text-blue-600 dark:hover:text-blue-300">Skills</a>
          <a href="#projects" className="block hover:text-blue-600 dark:hover:text-blue-300">Projects</a>
          <a href="#contact" className="block hover:text-blue-600 dark:hover:text-blue-300">Contact</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-2 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-xs"
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
