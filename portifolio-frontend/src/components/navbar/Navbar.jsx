import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <h1 className='logo'><span>Ez</span>Coder</h1>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Projects</li>
            <li>Contacts</li>
            <li>About Me</li>
        </ul>
    </div>
  )
}


export default Navbar
