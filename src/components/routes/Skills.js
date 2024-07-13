import React from "react";
import { useTheme } from "../themeContext";

function Skills() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`container mx-auto p-6 font-playfair ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className={`p-4 rounded shadow ${
            isDarkMode
              ? "bg-gray-600 hover:bg-gray-500"
              : "bg-gray-100 hover:bg-gray-300"
          }`}
        >
          <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
          <ul className="list-disc list-inside">
            <li>Python</li>
            <li>C/C++</li>
            <li>JavaScript</li>
            <li>Dart</li>
          </ul>
        </div>

        <div
          className={`p-4 rounded shadow ${
            isDarkMode
              ? "bg-gray-600 hover:bg-gray-500"
              : "bg-gray-100 hover:bg-gray-300"
          }`}
        >
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <ul className="list-disc list-inside">
            <li>Reinforcement Learning</li>
            <li>Generative AI</li>
            <li>Fairness in AI and ML</li>
            <li>Adversarial Learning</li>
            <li>Transfer Learning</li>
            <li>Statistical Learning Theory</li>
            <li>Operations Research</li>
            <li>Bayesian methods</li>
            <li>DevOps</li>
          </ul>
        </div>

        <div
          className={`p-4 rounded shadow ${
            isDarkMode
              ? "bg-gray-600 hover:bg-gray-500"
              : "bg-gray-100 hover:bg-gray-300"
          }`}
        >
          <h3 className="text-xl font-semibold mb-2">Technologies</h3>
          <ul className="list-disc list-inside">
            <li>Tensorflow</li>
            <li>PyTorch</li>
            <li>AWS</li>
            <li>SQL</li>
            <li>Docker</li>
            <li>Google OR Tools</li>
            <li>Scikit-learn</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
