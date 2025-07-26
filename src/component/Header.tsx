import React, { useState } from "react";
import "../style/Header.css";
import { RxHamburgerMenu } from "react-icons/rx";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">My Port<span>folio</span></div>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
         <RxHamburgerMenu className= "menu-icon" />
      </div>
    </header>
  );
};

export default Header