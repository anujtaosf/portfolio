import React, { useState, useEffect } from 'react';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle;
