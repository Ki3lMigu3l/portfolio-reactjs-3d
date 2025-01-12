import React, { useState } from 'react'
import './Navbar.css'
import "@fortawesome/fontawesome-free/css/all.min.css";



const Navbar = () =>  {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
        <h1 className='logo'><span>Ez</span>Coder</h1>
        <div className="hamburguer" onClick={toggleMenu}>
          <i className='fas fa-bars'></i>
        </div>
        <ul  className={`nav-menu ${menuOpen ? "open" : ""}`}>
            <li>Home</li>
            <li>Projects</li>
            <li>Contacts</li>
            <li>About Me</li>
        </ul>
    </div>
  )
}


export default Navbar
