import React, { useState } from "react";
import logo from "../images/logo.png";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LiaFacebookF } from "react-icons/lia";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center p-4">
      <img src={logo} alt="img" className="w-10 mr-auto cursor-pointer" />
      <div className="flex gap-4 items-center opacity-60 text-sm">
        <ul className="flex gap-4 list-none">
          <li>
            <a href="/" className=" text-gray-300 hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/" className=" text-gray-300 hover:text-white">
              Skills
            </a>
          </li>
          <li>
            <a href="/" className=" text-gray-300 hover:text-white">
              Projects
            </a>
          </li>
        </ul>
        <div className="flex gap-4 text-sm">
          <a href="/" className=" text-gray-300 hover:text-white">
            <FaInstagram />
          </a>
          <a href="/" className=" text-gray-300 hover:text-white">
            <FaGithub />
          </a>
          <a href="/" className=" text-gray-300 hover:text-white">
            <FaTwitter />
          </a>
          <a href="/" className=" text-gray-300 hover:text-white">
            <FaLinkedinIn />
          </a>
          <a href="/" className=" text-gray-300 hover:text-white">
            <LiaFacebookF />
          </a>
        </div>
        <button
          href="/"
          className="p-4 bg-black text-white cursor-pointer border-[1px] shadow-lg opacity-80"
        >
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
          <button href="/" className="">
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
