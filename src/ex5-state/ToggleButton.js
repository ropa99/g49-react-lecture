import React, { useState } from "react";

const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleModeHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="container-fluid mt-4">
      <nav
        className={`navbar navbar-expand-lg ${
          darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {darkMode ? "DarkMode" : "Light Mode"}
            <img
              src={darkMode ? "/logo-light.png" : "/logo-dark.png"}
              alt="logo"
            />
          </a>
        </div>
      </nav>
      <div className="container">
        <h1>Content</h1>
        <button
          type="button"
          className={`btn ${darkMode ? "btn-dark" : "btn-light"}`}
          onClick={toggleModeHandler}
        >
          Toggle Mode
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
