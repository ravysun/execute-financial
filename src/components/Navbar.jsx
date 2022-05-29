import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

import './Navbar.css';
import logo from './images/logo.png';

function Navbar() {
  // Setting mobile nav
  const [click, setClick] = useState(false);
  const onClick = () => setClick(!click);

  // Change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener('scroll', changeColor);

  // Close menu on click
  const closeMenu = () => setClick(false);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <div className="navbar">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="logo"
        >
          <img src={logo} alt="logo" />
        </Link>

        <div className="humberger" onClick={onClick}>
          {click ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              Htestimonials
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="demo"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              Demo
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
