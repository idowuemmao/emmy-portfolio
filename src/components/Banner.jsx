import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const handleType = (count) => {
    // access word count number
    // console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div className="banner">
      <div>
        <button className="welcome-btn">Welcome to my Portfolio</button>
        <p className="intro-text">Hello I'm Emmanuel Idowu, a </p>
        {/* <span className="typewriter"> */}
        <Typewriter
          className="typewriter"
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
          onLoopDone={handleDone}
          onType={handleType}
        />
        {/* </span> */}
      </div>
    </div>
  );
};

export default Banner;
