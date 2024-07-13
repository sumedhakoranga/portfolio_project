import React from "react";
import { useTheme } from "../themeContext";

function Articles() {
  const { isDarkMode } = useTheme();

  const articles = [
    {
      title: "Maintaining multiple versions of Python using Anaconda",
      date: "Feb 2022",
      description:
        "There can be any number of reasons to require different versions of Python and we can do this easily using Anaconda.",
      link: "https://medium.com/@aniketsharma00411/maintaining-multiple-versions-of-python-using-anaconda-10b2618d7352",
    },
    {
      title: "Machine Learning Zoomcamp Updates",
      date: "Sep 2021",
      description:
        "Here I share the progress I make in the Machine Learning Zoomcamp.",
      link: "https://www.aniketsharma.net/articles/machine_learning_zoomcamp/",
    },
    {
      title: "Automatic Strategy Selection in Google OR Tools",
      date: "Aug 2021",
      description:
        "How search strategy is chosen automatically in Google OR Tools Constraint Solver?",
      link: "https://www.aniketsharma.net/articles/automatic_strategy_selection_in_or_tools/",
    },
    {
      title: "How to Create a Chat Room in Python",
      date: "Jun 2020",
      description: "A simple chat room using Python.",
      link: "https://www.aniketsharma.net/articles/how_to_create_a_chat_room_in_python/",
    },
  ];

  return (
    <div
      className={`container mx-auto p-6 font-playfair ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="grid gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md ${
              isDarkMode
                ? "bg-gray-800 text-blue-300"
                : "bg-gray-100 text-blue-600"
            }`}
          >
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold mb-2  hover:underline"
            >
              <h3>{article.title}</h3>
            </a>
            <p
              className={`mb-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } `}
            >
              {article.date}
            </p>
            <p className={`${isDarkMode ? "text-white" : "text-gray-800"}`}>
              {article.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
