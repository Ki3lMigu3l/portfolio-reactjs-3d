import React, { useState, useEffect } from "react";
import "./Hero.css";
import banner from "../../assets/banner-stacks.png";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "FullStack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Network Analyst and NOC",
    "DevOps",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[index];
      if (isDeleting) {
        setText((prev) => prev.slice(0, prev.length - 1));
        setTypingSpeed(50);
      } else {
        setText((prev) => currentRole.slice(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, typingSpeed]);

  return (
    <div className="hero-main-container">
      <div className="hero-text-container">
        <h1 className="hero-title">I'm Ezequiel Miguel</h1>
        <h1>
          <span className="hero-subtitle">{text}</span>
        </h1>
      </div>
      <img src={banner} alt="Ezequiel Miguel" className="hero-image"/>
    </div>
  );
};

export default Hero;
