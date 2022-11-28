import React from "react";
import Introduction from "./components/Introduction";
import AboutMe from "./components/About_me";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
