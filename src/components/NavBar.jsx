import React, { useState } from "react";
import logo from "../images/profile1.jpg";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { TiTimes } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";

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
    <nav className="sticky top-0 py-4 bg-tertiary w-full px-10 md:px-20 z-50 ">
      <div className="flex justify-between items-center ">
        <a href="/" className="w-12 max-h-16 mr-auto cursor-pointer">
          <img
            src={logo}
            alt="img"
            href="/"
            className="rounded-full border-2"
          />
        </a>
        <div className="sm:flex gap-4 items-center text-sm hidden">
          <ul className="flex gap-4 list-none">
            <li>
              <a href="/" className=" text-shading hover:text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className=" text-shading hover:text-secondary">
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className=" text-shading hover:text-secondary"
              >
                Projects
              </a>
            </li>
          </ul>
          <div className="gap-4 text-sm hidden md:flex items-center">
            <a
              href="https://github.com/idowuemmao"
              className=" text-shading hover:text-secondary"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/emmygreatmusic"
              className=" text-shading hover:text-secondary"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/in/emmanuel-idowu-973626249"
              className=" text-shading hover:text-secondary"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://idowuemmao@gmail.com"
              className=" text-shading hover:text-secondary"
            >
              <IoMdMail />
            </a>
          </div>
          <button className="bg-primary p-4 shadow-lg text-secondary hover:bg-secondary hover:text-primary rounded-xl px-8">
            <a href="#connect"> Let's Connect</a>
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
        <div className="sm:hidden flex flex-col w-full py-4 -z-50 h-fit gap-8 items-center">
          <ul className="flex flex-col text-lg gap-4 items-center ">
            <li>
              <a href="/" className="text-shading hover:text-secondary">
                Home
              </a>
            </li>
            <li>
              <a
                onClick={toggleMenuShow}
                href="#skills"
                className="text-shading hover:text-secondary"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                onClick={toggleMenuShow}
                href="#projects"
                className="text-shading hover:text-secondary"
              >
                Projects
              </a>
            </li>
          </ul>
          <div className="flex justify-around w-full">
            <a
              onClick={toggleMenuShow}
              href="https://github.com/idowuemmao"
              className=" text-shading hover:text-secondary"
            >
              <FaGithub />
            </a>
            <a
              onClick={toggleMenuShow}
              href="https://twitter.com/emmygreatmusic"
              className=" text-shading hover:text-secondary"
            >
              <FaTwitter />
            </a>
            <a
              onClick={toggleMenuShow}
              href="https://linkedin.com/in/emmanuel-idowu-973626249"
              className=" text-shading hover:text-secondary"
            >
              <FaLinkedinIn />
            </a>
            <a
              onClick={toggleMenuShow}
              href="https://idowuemmao@gmail.com"
              className=" text-shading hover:text-secondary"
            >
              <IoMdMail />
            </a>
          </div>
          <button className="bg-primary p-2 shadow-lg rounded-xl px-8 text-secondary hover:bg-secondary hover:text-primary">
            <a onClick={toggleMenuShow} href="#connect">
              Let's Connect
            </a>
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
