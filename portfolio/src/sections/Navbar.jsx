import React, { useEffect, useState } from "react";
import menu from "/assets/menu.svg";
import close from "/assets/close.svg";
import logo from "/assets/logo.png";
import { navLinks } from "../constants";

const NavItems = () => {
  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
      {navLinks.map((item) => (
        <li
          key={item.id}
          className="text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5"
        >
          <a
            href={item.href}
            className="text-lg md:text-base hover:text-white transition-colors"
            onClick={() => {}}
          >
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
    <header
      id="home"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 text-white shadow-md py-2"
          : "bg-transparent text-white py-1"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-4 mx-auto sm:px-10 px-4">
          <div className="flex items-center gap-2 ">
            <img
              src={logo}
              alt="Logo"
              className="w-9 h-9 rounded-full overflow-hidden shadow-lg"
            />
            <a
              href="/"
              className="text-neutral-200 font-semibold text-lg hover:text-white transition-colors hidden md:block"
            >
              Ezcoder
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? close : menu}
              alt="toggle"
              className="w-6 h-6 cursor-pointer"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Mobile */}
      <div
        className={`absolute left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
