import React from "react";
import { useTheme } from "../themeContext";
import pixelifyImage from "../../assets/pixelify.png";
import signLanguageImage from "../../assets/sign_language_to_text_translation.png";
import signatureForgeryImage from "../../assets/signatureforgery.png";
import wikihowImage from "../../assets/wikihowunofficialapi.png";
import matrixImage from "../../assets/matrix-project.png";
import alphaImage from "../../assets/alpha-project.png";
import instituteManagementImage from "../../assets/dbs-project.png";
import techfestImage from "../../assets/webkriti-project.png";

function Projects() {
  const { isDarkMode } = useTheme();

  const projects = [
    {
      title: "Pixelify",
      description:
        "I did this project for the Information Security Systems course in a team of four. I worked on designing and writing the cipher algorithms for encryption and working with and converting the Base64 image inputs.",
      apiLink: "https://github.com/aniketsharma00411/pixelify-api",
      websiteLink: "https://github.com/aniketsharma00411/pixelify",
      technologies: ["CRYPTOGRAPHY", "CIPHER ALGORITHMS", "FIREBASE"],
      image: pixelifyImage,
    },
    {
      title: "Sign Language to Text Translator",
      description:
        "I made this project as part of my 3 credit Summer Minor Project for my Bachelor's. The best model is an ensemble of Convolutional Neural Networks trained on Bootstrap Aggregated data.",
      link: "https://github.com/aniketsharma00411/sign-language-to-text-translator",
      technologies: [
        "BOOTSTRAP AGGREGATION",
        "ENSEMBLE MODELS",
        "TRANSFER LEARNING",
        "TENSORFLOW",
        "KERAS",
        "PYTHON",
      ],
      image: signLanguageImage,
    },
    {
      title: "Signature Forgery Detection with One-shot Learning",
      description:
        "This project made using Keras uses Convolutional Neural Network and Siamese Neural Network to detect Forged signatures with the accuracy of ~99%. The model was trained on signatures of 50 people and works for new people without retraining the model.",
      link: "https://github.com/aniketsharma00411/one-shot-signature-forgery-detection",
      technologies: ["SIAMESE NEURAL NETWORK", "TENSORFLOW", "KERAS", "PYTHON"],
      image: signatureForgeryImage,
    },
    {
      title: "wikiHowUnofficialAPI - API to extract data from wikiHow",
      description:
        "For one of my future Data Science projects I needed an API to collect data from wikiHow but there was nothing available. So, I created this Python package which uses Beautiful Soup to scrap information from wikiHow's website. The package generates random articles, collects all information regarding a given article and also searches wikiHow.",
      projectLink: "https://pypi.org/project/wikihowunofficialapi/",
      sourceCode: "https://github.com/vigilant-umbrella/wikiHowUnofficialAPI",
      technologies: ["BEAUTIFULSOAP", "PYTHON"],
      image: wikihowImage,
    },
    {
      title: "Matrix - Linear Algebra library for C++",
      description:
        "While working on alpha project it was difficult to find an easy-to-use Scientific Computing library in C++. So, I designed this Matrix library. The latest released version of the library is version 1.0.0.",
      link: "https://github.com/mlcpp/Matrix",
      technologies: ["C++", "GOOGLE TEST", "GOOGLE BENCHMARK"],
      image: matrixImage,
    },
    {
      title: "alpha - C++ implementation of scikit-learn",
      description:
        "I worked on this in a team of two with one of my colleagues. This is our submission for our Object Oriented Programming Language class project. The aim of this project is to design an easy-to-use Machine Learning library for C++, like scikit-learn for Python.",
      link: "https://github.com/mlcpp/alpha",
      technologies: ["C++"],
      image: alphaImage,
    },
    {
      title: "Institute Management System",
      description:
        "I worked on this with two of my colleagues. I designed the back-end of the application using Node.js and the Database using MySQL. This app has 4 portals: student, faculty, admin and senior admin. It displays details in a beautiful and descriptive manner and allows admins to edit data in a easy and secure way. We made this for our Database Management class. This turned out better than what we expected.",
      projectLink: "https://institute-management.herokuapp.com/",
      sourceCode: "https://github.com/aniketsharma00411/DBS",
      technologies: ["MYSQL", "JAVASCRIPT", "NODE.JS", "HTML5", "CSS3"],
      image: instituteManagementImage,
    },
    {
      title: "TechFest Website - My Submission for WebKriti 2020",
      description:
        "I designed this with the help of my friend who helped in the front-end design. I used HTML5 and CSS3 for the front-end, Node.js for back-end and MySQL for the Database. This is a fully functional light-weight website which provides an easy to use interface to check and register for events.",
      projectLink: "https://webkriti-techfest.herokuapp.com/",
      sourceCode: "https://github.com/aniketsharma00411/WebKriti",
      technologies: ["MYSQL", "JAVASCRIPT", "NODE.JS", "HTML5", "CSS3"],
      image: techfestImage,
    },
  ];

  const otherProjects = [
    {
      title: "Employee Future Predictor",
      link: "https://github.com/aniketsharma00411/employee_future_prediction",
    },
    {
      title: "MBA Placement Predictor",
      link: "https://github.com/aniketsharma00411/mba_placement_prediction",
    },
    {
      title: "US Election 2020 Prediction using Sentiment Analysis",
    },
    {
      title: "Fake News Detection",
      link: "https://github.com/aniketsharma00411/Fake-News-Detection-Model",
    },
    { title: "Contact Book" },
    { title: "Hangman Game" },
    { title: "Mad Libs Game" },
    { title: "Number Guessing Game" },
    { title: "Tic-tac-toe" },
    { title: "On-Screen Keyboard" },
    { title: "Text Adventure Game" },
    { title: "Railway Reservation System" },
  ];
  return (
    <div
      className={`container mx-auto p-6 font-playfair ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md flex flex-col sm:flex-row ${
              isDarkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full sm:w-1/4 rounded-lg mb-4 sm:mb-0 sm:mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-2">{project.description}</p>
              {project.apiLink && (
                <p className="text-blue-300 hover:underline">
                  <a
                    href={project.apiLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    API Link
                  </a>
                </p>
              )}
              {project.websiteLink && (
                <p className="text-blue-300 hover:underline">
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website Link
                  </a>
                </p>
              )}
              {project.projectLink && (
                <p className="text-blue-300 hover:underline">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Link
                  </a>
                </p>
              )}
              {project.link && (
                <p className="text-blue-300 hover:underline">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Link
                  </a>
                </p>
              )}
              {project.sourceCode && (
                <p className="text-blue-300 hover:underline">
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </p>
              )}
              <div className="flex flex-wrap mt-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div
          className={`p-4 rounded-lg shadow-md flex ${
            isDarkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <div>
            <h3 className="text-xl font-semibold mb-2">Other Projects</h3>
            <ul className="list-disc list-inside">
              {otherProjects.map((project, index) => (
                <li key={index} className="mb-2">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
