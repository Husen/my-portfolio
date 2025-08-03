const Navbar = ({ darkMode, setDarkMode }) => (
  <nav className="bg-white dark:bg-gray-800 shadow px-6 py-4 sticky top-0 z-50">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <span className="font-bold text-lg text-blue-700 dark:text-blue-400">My Portfolio</span>
      <div className="space-x-4 text-sm">
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
  </nav>
);

export default Navbar;
