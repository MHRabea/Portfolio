import React from "react";
import programmer from "../images/programmer.png";
import logo from "../images/final logom-01 M2.png";
import { motion} from "framer-motion";
import { Link } from "react-scroll";

const Brief = () => {

  const letters = [
    {
      letter: "a",
    },
    {
      letter: "h",
    },
    {
      letter: "m",
    },
    {
      letter: "o",
    },
    {
      letter: "u",
    },
    {
      letter: "d",
    },
  ]

  return (
    <section
      id="brief"
      className=" w-screen min-h-screen flex flex-col items-center justify-center max-w-[75rem] px-5 
      overflow-hidden mt-10 "
    >
      <div
        className="animate-[fadeInX_0.8s_ease-in-out_0.1s] z-0 w-full h-full justify-center items-center flex flex-col 
      text-center
      "
      >
        <span className=" text-3xl font-mono md:text-5xl ">Hi, </span>
        <span className="flex text-5xl md:text-7xl font-mono mt-5 mb-5">
          I'm
          <img src={logo} alt="logo" className="w-11 h-11 ml-4 md:size-16"/>
          {letters.map((item , index) => (
            <motion.span
            key={index}
            variants={{
              initial: {scale: 0},
              animate: {scale: 1},
            }}
            initial ='initial'
            animate = 'animate'
            transition={{
              duration: 0.8,
              delay: index * 0.3,
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
             className="text-sky-300">{item.letter}</motion.span>
          ))}
        </span>
        <span className="text-2xl font-mono md:text-4xl ">Frontend Developer</span>


        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          className="ease-in-out bg-transparent items-center mt-10 text-2xl border-b-2 "
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -70 },
              show: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="show"
            transition={{
              duration: 0.6,
              delay: 1.2,
            }}
            className="p-2 ease-in-out bg-transparent items-center hover:border-b-2 border-sky-300
              text-sky-400"
          >
            <Link activeClass="active" smooth spy to='contact' className="flex items-center justify-center space-x-2">
              <h4>Reach me</h4>
            </Link>
          </motion.div>
        </motion.button>


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
