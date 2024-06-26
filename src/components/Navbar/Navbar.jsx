import React, { useState } from 'react';
import './Navbar.css';
import menu from "../../assets/menuIcon.png";
import close from "../../assets/closeIcon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
      
      <a href="#" className='title'>Portfolio</a>
      <div className='menu'>
        <img 
          src={menuOpen ? close : menu} 
          alt="menu-button" 
          className='menuBtn' 
          onClick={() => setMenuOpen(!menuOpen)} 
        />
        <ul className={`menulist ${menuOpen ? 'menuOpen' : ''}`} onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      
      
    </nav>
  );
};

export default Navbar;
