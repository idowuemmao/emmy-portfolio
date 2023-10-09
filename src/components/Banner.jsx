import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="banner">
      <div>
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
    </div>
  );
};

export default Banner;
