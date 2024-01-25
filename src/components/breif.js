import React from "react";
import programmer from "../images/programmer.png";
import logo from "../images/M-Color-no-Background - Copy.png";

const Brief = () => {
  return (
    <section
      id="brief"
      className=" w-screen min-h-screen flex flex-col items-center justify-center max-w-[75rem] px-5 
      overflow-hidden mt-10 "
    >
      <div
        className="animate-[fadeInX_0.8s_ease-in-out_0.1s] z-10 w-full h-full justify-center items-center flex flex-col 
      text-center
      "
      >
        <span className=" text-3xl font-mono md:text-5xl ">Hi, </span>
        <span className="flex text-5xl md:text-7xl font-mono mt-5 mb-5">
          I'm
          <img src={logo} alt="logo" className="w-11 h-11 ml-4 md:size-16" />
          <span className="text-sky-300">
            <span className="animate-[fadeInY_1.5s_ease-in-out_0.2s]">a</span>
            <span className="animate-[fadeInY_1.5s_ease-in-out_0.3s]">h</span>
            <span className="animate-[fadeInY_1.5s_ease-in-out_0.4s]">m</span>
            <span className="animate-[fadeInY_1.5s_ease-in-out_0.5s]">o</span>
            <span className="animate-[fadeInY_1.5s_ease-in-out_0.6s]">u</span>
            <span className="animate-[fadeInY_1.5s_ease-in-out_0.7s]">d</span>
          </span>
        </span>
        <span className="text-2xl font-mono md:text-4xl ">React.js Developer</span>
        <button
          className="p-4 text-2xl shadow-md shadow-sky-600 hover:scale-110 transition
          hover:shadow-2xl hover:shadow-sky-600 duration-75
         rounded-2xl md:text-4xl md:p-4 mt-14
         animate-[fadeInY_0.8s_ease-in-out_0.1s] hover:animate-bounce
         "
        >
          Reach me
        </button>
      </div>
      <div className="animate-[fadeInY_0.8s_ease-in-out_0.1s] justify-center 
      items-center flex flex-col mt-20 rounded-t-full bg-gradient-to-b from-sky-600 to sky-800
      h-96 w-96 sm:w-[80%]
      ">
        <img
          src={programmer}
          alt="programmer"
          className="animate-[fadeInY_0.8s_ease-in-out_0.1s] object-cover
          size-48 sm:mt-20 sm:size-96
           "
        />
      </div>
    </section>
  );
};

export default Brief;
