import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import AnimatedHeader from "./components/AnimatedHeader";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div>
      <AnimatedHeader />
      <main className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
