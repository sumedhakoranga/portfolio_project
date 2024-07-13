import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  const handleClick = (path) => {
    setSelected(path);
  };

  return (
    <div className="w-full text-gray flex flex-col font-playfair text-sm sm:text-xl">
      <nav className="flex-1">
        <ul className="flex justify-around border-b-2 border-gray-300">
          <li
            className={`px-4 py-2 hover:text-gray-300 ${
              selected === "/research" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            <Link to="/research" onClick={() => handleClick("/research")}>
              Research
            </Link>
          </li>
          <li
            className={`px-4 py-2 hover:text-gray-300 ${
              selected === "/project" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            <Link to="/project" onClick={() => handleClick("/project")}>
              Project
            </Link>
          </li>
          <li
            className={`px-4 py-2 hover:text-gray-300 ${
              selected === "/articles" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            <Link to="/articles" onClick={() => handleClick("/articles")}>
              Articles
            </Link>
          </li>
          <li
            className={`px-4 py-2 hover:text-gray-300 ${
              selected === "/skills" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            <Link to="/skills" onClick={() => handleClick("/skills")}>
              Skills
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
