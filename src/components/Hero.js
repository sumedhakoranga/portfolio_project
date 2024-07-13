import React from "react";
import { useTheme } from "../components/themeContext";
import resume from "../assets/Aniket_Sharma_CV.pdf";
import heroImage from "../assets/Hero.jpeg"

function Hero() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`flex flex-col items-center p-6 sm:p-12 sm:flex-row ${
        isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
      }`}
    >
      <img
        className="rounded-full w-3/4 sm:w-2/4 mb-4 sm:mb-0"
        src={heroImage}
        alt="logo"
      />
      <div className="text-center sm:text-left sm:ml-12 font-playfair">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 text-center w-full">
            Aniket Sharma
          </h1>
          <button
            id="toggle-theme"
            className="text-3xl sm:-mt-12 -mt-2"
            onClick={toggleTheme}
          >
            {isDarkMode ? "☀️" : "☾"}
          </button>
        </div>
        <p className="flex justify-center text-zinc-500">
          <a href={resume} target="_blank" rel="noreferrer">
            Resume
          </a>{" "}
          ┃
          <a href="https://googlescholar.com" target="_blank" rel="noreferrer">
            Google Scholar
          </a>
        </p>
        <p className="text-base sm:text-lg mt-4">
          I'm Aniket from{" "}
          <a
            href="https://en.wikipedia.org/wiki/Delhi"
            rel="noreferrer"
            target="_blank"
            className="text-zinc-400 hover:text-zinc-600"
          >
            Delhi, India
          </a>
          . Currently I am living in{" "}
          <a
            href="https://en.wikipedia.org/wiki/Edmonton"
            rel="noreferrer"
            target="_blank"
            className="text-zinc-400 hover:text-zinc-600"
          >
            Edmonton, AB, Canada
          </a>
          . I am a M.Sc. Computing Science (Thesis) student at the{" "}
          <a
            href="https://www.ualberta.ca/about/index.html"
            rel="noreferrer"
            target="_blank"
            className="text-zinc-400 hover:text-zinc-600"
          >
            University of Alberta
          </a>
          . I have interned at{" "}
          <a
            href="https://www.google.com/"
            rel="noreferrer"
            target="_blank"
            className="text-zinc-400 hover:text-zinc-600"
          >
            Google{" "}
          </a>
          as an Application Engineer, at the{" "}
          <a
            href="https://www.ualberta.ca/about/index.html"
            rel="noreferrer"
            target="_blank"
            className="text-zinc-400 hover:text-zinc-600"
          >
            University of Alberta
          </a>{" "}
          as a Research Intern and at{" "}
          <a
            href="https://www.sprink.online/"
            rel="noreferrer"
            target="_blank"
            className="text-zinc-400 hover:text-zinc-600"
          >
            Sprink
          </a>{" "}
          as an Artificial Intelligence intern. I like to work on cool things.
          That's why I am learning AI. In my free time, I like reading stuff and
          watching Anime or Animations.
          <p className="flex m-2 sm:m-6 justify-center space-x-4">
            <a
              href="https://www.kaggle.com/aniketsharma00411"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.shields.io/badge/-Aniket Sharma-71ade3?style=flat&logo=Kaggle&logoColor=black"
                alt="kaggle"
              />
            </a>
            <a
              href="https://github.com/aniketsharma00411"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.shields.io/badge/-Aniket Sharma-817979?style=flat&logo=GitHub&logoColor=white"
                alt="gitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/aniketsharma00411/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://img.shields.io/badge/-Aniket Sharma-165fa0?style=flat&logo=Linkedin"
                alt="linkedin"
              />
            </a>
            <a
              href="mailto:aniketsharma00411@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.shields.io/badge/-aniketsharma00411%40gmail.com-c85016?style=flat&logo=Gmail&logoColor=white"
                alt="email"
              />
            </a>
          </p>
        </p>
      </div>
    </div>
  );
}

export default Hero;
