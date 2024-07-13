import React from "react";
import { useTheme } from "../components/themeContext";

function Footer() {
  const { isDarkMode } = useTheme();
  return (
    <footer
      className={`container mx-auto p-6 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-around items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p className="text-lg font-semibold">Aniket Sharma</p>
          <p className="text-sm">aniketsharma00411@gmail.com</p>
        </div>
        <div className="text-center">
          <p className="text-sm mb-4">Connect with me!!!</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/aniketsharma/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              LinkedIn
            </a>
            <a
              href="https://www.kaggle.com/aniketsharma00411"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-600"
            >
              Kaggle
            </a>
            <a
              href="https://github.com/aniketsharma00411"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600"
            >
              GitHub
            </a>
            <a
              href="mailto:aniketsharma00411@gmail.com"
              className="text-red-400 hover:text-red-600"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
