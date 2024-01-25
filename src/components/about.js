import React from "react";
import { SiCss3 } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center mt-24 w-screen min-h-screen
      max-w-[75rem] space-y-5
    "
    >
      <div
        className="text-2xl text-black font-mono flex justify-center
      items-center bg-sky-300 w-[24rem] sm:w-[34rem] md:w-[42rem] lg:w-[28rem] h-20
      rounded-full mb-10
      "
      >
        About me
      </div>
      <div
        className="w-screen flex flex-col lg:flex-row items-center
    justify-center max-w-[75rem] sm:max-w-[75rem] px-10 overflow-hidden lg:space-x-20
     lg:space-y-0"
      >
        <div
          className="flex flex-col justify-center items-center lg:basis-1/4
      bg-gradient-to-b from-sky-600 to-sky-900 rounded-xl  lg:rounded-tl-2xl
      lg:rounded-bl-2xl w-96 order-2 lg:order-none mb-12 lg:mb-0 sm:w-[80%] font-mono
      h-[40rem] relative overflow-hidden
      "
        >
          <div
            className="mb-5 absolute top-0 flex items-center justify-center
           bg-sky-300 text-black w-full h-20 rounded-b-full text-2xl"
          >
            skills
          </div>
          {/* columns mobile view */}
          <div className="flex flex-row lg:flex-col items-center justify-between space-x-5
           sm:space-x-20 md:space-x-40 lg:space-x-0 lg:mt-10">
            {/* column left mobile view */}
            <div className="space-y-10 lg:space-y-2">
              <div className="flex items-center justify-center space-x-5 border-b-2">
                <FaHtml5 size={45} className="text-sky-400" />
                <div className="flex flex-col items-center justify-center">
                  <span className="text-lg font-bold">Html</span>
                  <span className="text-sky-400">Experienced</span>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-5 border-b-2">
                <SiCss3 size={38} className="text-sky-400" />
                <div className="flex flex-col items-center justify-center">
                  <span className="text-lg font-bold">Css</span>
                  <span className="text-sky-400">Experienced</span>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-5 border-b-2">
                <TbBrandJavascript size={45} className="text-sky-400" />
                <div className="flex flex-col items-center justify-center">
                  <span className="text-lg font-bold">JavaScript</span>
                  <span className="text-sky-400">Experienced</span>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-5 border-b-2">
                <FaReact size={40} className="text-sky-400" />
                <div className="flex flex-col items-center justify-center">
                  <span className="text-lg font-bold">React</span>
                  <span className="text-sky-400">Experienced</span>
                </div>
              </div>
            </div>
            {/* column right mobile view */}
            <div className="space-y-10 lg:space-y-2">
              <div className="flex items-center justify-center space-x-5 border-b-2">
                <FaBootstrap size={40} className="text-sky-400" />
                <div className="flex flex-col items-center justify-center">
                  <span className="text-lg font-bold">Bootstrap</span>
                  <span className="text-sky-400">Experienced</span>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-5 border-b-2">
                <IoLogoFirebase size={40} className="text-sky-400" />
                <div className="flex flex-col items-center justify-center">
                  <span className="text-lg font-bold">Fire Base</span>
                  <span className="text-sky-400">Experienced</span>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 border-b-2">
                <SiTailwindcss size={38} className="text-sky-400" />
                <div className="flex flex-col items-center justify-center">
                  <span className="text-lg font-bold">TailwindCSS</span>
                  <span className="text-sky-400">Experienced</span>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-5 border-b-2">
                <FaSass size={40} className="text-sky-400" />
                <div className="flex flex-col items-center justify-center">
                  <span className="text-lg font-bold">sass</span>
                  <span className="text-sky-400">Experienced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center lg:basis-1/2
      bg-gradient-to-b from-sky-600 to-sky-900 rounded-xl lg:rounded-[11rem] w-96 order-1
      lg:order-none mb-10 lg:mb-0 sm:w-[80%] font-mono h-[40rem] text-center px-5
      relative overflow-hidden
      "
        >
          <div
            className="mb-5 absolute top-0 flex items-center justify-center
           bg-sky-300 w-full h-20 rounded-b-full text-black text-2xl"
          >
            Get To Know Me
          </div>

          <p className="font-medium text-xl">
            I'm a passionate and highly skilled React.js Developer <br />
            with a flair for crafting seamless and engagin user experiences,
            Leveraging a solid foundation in frontend technologies, I bring
            creativity and dedication to every project, ensuring robust , modern
            , responsive , lightning fast and user-friendly web applications.
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center lg:basis-1/4
      bg-gradient-to-b from-sky-600 to-sky-900 rounded-xl lg:rounded-tr-2xl
      lg:rounded-br-2xl w-96 order-3 lg:order-none mb-5 lg:mb-0 sm:w-[80%] font-mono
      h-[40rem] relative overflow-hidden
      "
        > 
        {/* title */}
          <div
            className="flex items-center justify-center absolute top-0
          rounded-b-full w-full h-20 bg-sky-300 text-black text-2xl"
          >
            Services
          </div>
        {/* menu */}
          <div>
          <div className="flex items-center justify-center ">
          <BsPatchCheckFill />
          <div>React.js Developement</div>
          </div>
          <div>Responsive Design</div>
          <div>Frontend Architecture</div>
          <div>State Management</div>
          <div>Integration With Backend</div>
          <div>Code Reviews And Optimization</div>
          <div>Testing</div>
          <div>Documentaion</div>
          <div>Continuous Deployment</div>
          <div>Continuous Integration</div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default About;
