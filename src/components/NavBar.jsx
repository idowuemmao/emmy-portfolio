import React, { useState } from "react";
import logo from "../images/logo.png";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LiaFacebookF } from "react-icons/lia";
import { AiOutlineMenu } from "react-icons/ai";
import "../styles/navbar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="img" className="App__logo" />
      <div className="navbar__right">
        <ul className="nav__links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Skills</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
        </ul>
        <div className="nav__socials">
          <a href="/">
            <FaInstagram />
          </a>
          <a href="/">
            <FaGithub />
          </a>
          <a href="/">
            <FaTwitter />
          </a>
          <a href="/">
            <FaLinkedinIn />
          </a>
          <a href="/">
            <LiaFacebookF />
          </a>
        </div>
        <button href="/" className="connect">
          Let's Connect
        </button>
      </div>
      {isOpen && (
        <div className="nav__right2">
          <ul className="nav__links2">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Skills</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
          </ul>
          <div className="nav__socials2">
            <a href="/">
              <FaInstagram />
            </a>
            <a href="/">
              <FaGithub />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
            <a href="/">
              <FaLinkedinIn />
            </a>
            <a href="/">
              <LiaFacebookF />
            </a>
          </div>
          <button href="/" className="connect">
            Let's Connect
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

/* <nav className="navbar">
      <img src={logo} alt="logo" className="App__logo" />
      <div className="navbar__right">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Skills</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
        <div className="nav-icons">
          <FaLinkedinIn className="icons" />
          <LiaFacebookF className="icons" />
          <FaInstagram className="icons" />
          <FaTwitter className="icons" />
          <FaGithub className="icons" />
        </div>
        <button className="connect">Let's Connect</button>
      </div>
      <button onClick={toggleMenu} className="nav-btn">
        <AiOutlineMenu />
      </button>
      {isOpen && (
        <div className="navbar2 ">
            <div className="navbar__right2">
              <ul className="nav__links">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Skills</a>
                </li>
                <li>
                  <a href="/">Projects</a>
                </li>
              </ul>
              <div className="nav-icons">
                <FaLinkedinIn className="icons" />
                <LiaFacebookF className="icons" />
                <FaInstagram className="icons" />
                <FaTwitter className="icons" />
                <FaGithub className="icons" />
              </div>
              <button className="connect">Let's Connect</button>
            </div>
            <div>
              <button
                onClick={toggleMenu}
                className="text-accent hover:text-accent focus:text-accent focus:outline-none"
              >
                <AiOutlineMenu />
              </button>
            </div>
          </div>
      )}
    </nav> */
