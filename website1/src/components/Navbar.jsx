import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHorse,
  faBars,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import Button from "./Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [button, setButton] = useState(true);


useEffect(() => {
  showButton();
}, []);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


const showButton = () => {
  if (window.innerWidth <= 960) {
    setButton(false);
  } else {
    setButton(true);
  }

};

window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <FontAwesomeIcon className="icon-horse" icon={faHorse} onClick={toggleMenu} />
            LA RECUA
          </Link>
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? (
              <FontAwesomeIcon icon={faCircleXmark} style={{color: "#ffffff",}} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
          <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={toggleMenu}>
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={toggleMenu}>
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={toggleMenu}>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={toggleMenu}>
                Learn
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={toggleMenu}>
                Members
              </Link>
            </li>
        
            <li className="nav-item">
              <Link
                to="/whatsapp"
                className="nav-links-mobile"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Contact</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
