import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import HireMe from "./components/HireMe";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-navy  to-dark-blue ">
      <Navbar />
      <Hero />
      <Skills />
      <HireMe />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
