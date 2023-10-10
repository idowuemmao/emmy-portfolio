import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banners">
        <button className="welcome-btn">Welcome to my Portfolio</button>
        <p className="intro-text">Hello I'm Emmanuel Idowu, a </p>
        <div className="typewriters">
          <Typewriter
            className=""
            words={[
              "ReactJs Developer",
              "TypeScript Developer",
              "JavaScript Developer",
              "NextJs Developer",
            ]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
      </div>
      <p className="about-me">
        A Highly motivated and talented Frontend Engineer with more than 1 year
        Enterprise Level Experience Designing and building highly scalable
        system, across the Technology sectors. Armed with a solid foundation in
        HTML, CSS, JavaScript, Next JS and React JS Framework. Focused on
        customer satisfaction, actively collaborating and eager to learn to
        enhance customer satisfaction in the deliverables of products plugged
        into emerging technologies and industry trends.
      </p>
      <a href="/" className="connect2">
        <p>Let's Connect</p>
        <FaArrowCircleRight />
      </a>
    </div>
  );
};

export default Banner;
