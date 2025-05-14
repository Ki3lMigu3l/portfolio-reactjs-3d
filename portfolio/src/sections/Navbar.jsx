import React, { useEffect, useState } from "react";
import menu from "/assets/menu.svg";
import close from "/assets/close.svg";
import logo from "/assets/logo.png";
import { navLinks } from "../constants";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: { opacity: 0, filter: "blur(8px)", y: -10 },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const NavItems = () => {
  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-5 relative z-20">
      {navLinks.map((item) => (
        <li key={item.id} className="links transition-colors">
          <a href={item.href} onClick={() => {}}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={headerVariants}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled
          ? "bg-black/95 md:backdrop-blur-sm md:bg-black/70  text-white shadow-md py-1"
          : "bg-transparent text-white py-0"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-4 mx-auto sm:px-10 px-4">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-7 h-7 rounded-full overflow-hidden shadow-lg"
            />
            <a href="/" className="logo">
              Ezcoder
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none md:hidden flex"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? close : menu}
              alt="toggle"
              className="w-6 h-6 cursor-pointer"
            />
          </button>
          <nav className="md:flex hidden">
            <NavItems />
          </nav>

          <div className="md:flex hidden">
            <button className="btn-contact ">Contact Me</button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        className={`absolute left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto md:hidden block ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
