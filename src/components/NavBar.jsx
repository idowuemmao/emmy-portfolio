import React, { useState } from "react";
import logo from "../images/logo.png";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LiaFacebookF } from "react-icons/lia";
import { AiOutlineMenu } from "react-icons/ai";
import { TiTimes } from "react-icons/ti";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(true);
  const toggleMenuShow = () => {
    if (isOpen) {
      setIsOpen(false);
      setIsClose(true);
    }
  };
  const toggleMenuHide = () => {
    if (isClose) {
      setIsClose(false);
      setIsOpen(true);
    }
  };

  return (
    <nav className="block mb-10 py-4 justify-between bg-gray-900 w-full px-10 md:px-20 z-50 ">
      <div className="flex justify-between items-center ">
        <img src={logo} alt="img" className="w-10 md:mr-auto  cursor-pointer" />
        <div className="sm:flex gap-4 items-center opacity-60 text-sm hidden">
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
          <div className="gap-4 text-sm hidden md:flex">
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
            className="p-4 bg-black mb-10 text-white cursor-pointer border-[1px] shadow-lg opacity-80"
          >
            Let's Connect
          </button>
        </div>
        <div>
          <AiOutlineMenu
            onClick={toggleMenuHide}
            className={`${isClose ? "sm:hidden flex text-xl" : "hidden"}`}
          />
          <TiTimes
            className={`${isOpen ? "sm:hidden flex text-xl" : "hidden"}`}
            onClick={toggleMenuShow}
          />
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden flex flex-col w-full py-4 -z-50 h-fit gap-8 items-center ">
          <ul className="flex flex-col text-lg gap-4 items-center ">
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
          <div className="flex justify-around w-full">
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
          <button
            href="/"
            className="bg-yellow-800 p-2 shadow-lg rounded-xl px-8"
          >
            Let's Connect
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
