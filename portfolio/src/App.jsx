import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <main className="max-w-7xl mx-auto">
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
