import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/themeContext";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Research from "./components/routes/Research";
import Project from "./components/routes/Project";
import Articles from "./components/routes/Articles";
import Skills from "./components/routes/Skills";


function App() {
  return (
    <>
      <ThemeProvider>
        <div className="App">
          <Hero />
          <Body />
          <Routes>
            <Route path="/Research" element={<Research />} />
            <Route path="/project" element={<Project />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
