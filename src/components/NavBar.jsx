import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LiaFacebookF } from "react-icons/lia";

const NavBar = () => {
  // const [activeLink, setActiveLink] = useState("home");

  //to detect if the user has scrolled and change the color of the background
  // const [scroll, setScroll] = useState(false);
  //the useEffect will be triggered if the scroll starts
  // useEffect(() => {
  //   const onScroll = () => {
  //     if (window.scrollY > 50) {
  //       setScroll(true);
  //     } else {
  //       setScroll(false);
  //     }
  //   };
  //   window.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);
  return (
    // <header className={scroll ? "scroll" : "navbar"}>
    <header className="navbar" >
      <img src={logo} alt="logo" className="App__logo" />
      <div className="navbar__right">
        <ul className="nav__links">
          <li>Home</li>
          <li>Skills</li>
          <li>Projects</li>
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
    </header>
  );
};

export default NavBar;
