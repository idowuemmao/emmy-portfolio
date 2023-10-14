import React, { useEffect, useRef } from "react";
import "../styles/clockStyle.css";
import { Typewriter } from "react-simple-typewriter";

const Clock = () => {
  const hourHand = useRef(null);
  const minuteHand = useRef(null);
  const secondHand = useRef(null);

  //to run code after the component mounts
  useEffect(() => {
    const intervalId = setInterval(setClock, 1000);
    //cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  });
  function setClock() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (currentDate.getMinutes() + secondRatio) / 60;
    const hoursRatio = (currentDate.getHours() + minuteRatio) / 12;

    setRotation(secondHand.current, secondRatio);
    setRotation(minuteHand.current, minuteRatio);
    setRotation(hourHand.current, hoursRatio);
  }
  const setRotation = (element, rotationRatio) => {
    const rotation = rotationRatio * 360;
    element.style.setProperty("--rotation", rotation);
  };
  return (
    <div className="h-72 absolute flex-col items-center justify-center top-24 right-8 md:right-16 hidden sm:flex">
      <div className="text-gray-800 w-max p-1">
        <Typewriter
          words={["The Time is"]}
          loop={5}
          cursor
          cursorStyle=""
          typeSpeed={350}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </div>
      <div className="w-40 h-40 lg:w-56 lg:h-56 rounded-full border-4 border-[#fc4d5b] clock relative">
        <div className="hand hour" ref={hourHand}></div>
        <div className="hand minute" ref={minuteHand}></div>
        <div className="hand second" ref={secondHand}></div>
        <div className="number number1">1</div>
        <div className="number number2">2</div>
        <div className="number number3">3</div>
        <div className="number number4">4</div>
        <div className="number number5">5</div>
        <div className="number number6">6</div>
        <div className="number number7">7</div>
        <div className="number number8">8</div>
        <div className="number number9">9</div>
        <div className="number number10">10</div>
        <div className="number number11">11</div>
        <div className="number number12">12</div>
      </div>
    </div>
  );
};

export default Clock;
