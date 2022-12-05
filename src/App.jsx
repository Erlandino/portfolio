import React from "react";
import Introduction from "./components/Front-page/Introduction";
import AboutMe from "./components/About_me";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Front-page/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Introduction />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;