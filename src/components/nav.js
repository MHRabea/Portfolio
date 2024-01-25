import React, { useState } from "react";
import Logo from "../images/Color-no-Background.png";
import { Link } from "react-scroll";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <div className=" flex flex-col items-center justify-center space-y-5">
      <nav className="h-40 w-screen py-1 flex items-center justify-between max-w-[80rem] px-5">
        <img
          src={Logo}
          alt="logo-img"
          className=" animate-[fadeInY_0.8s_ease-in-out_0.1s] object-cover h-20 w-25"
        />
        <div
          onClick={handleToggleNav}
          className="md:hidden flex items-center justify-center"
        >
          {toggleNav ? (
            <IoCloseOutline
              size={40}
              color="#0ea5e9"
              className={`${
                toggleNav ? "animate-fadeIn" : "animate-fadeIn"
              } animate-[fadeInY_0.9s_ease-in-out] transition duration-75 hover:scale-110 cursor-pointer `}
            />
          ) : (
            <CiMenuFries
              color="#0ea5e9"
              size={40}
              className={`${
                toggleNav ? "animate-fadeIn" : "animate-fadeIn"
              } animate-[fadeInY_0.9s_ease-in-out] transition duration-75 hover:scale-110 cursor-pointer `}
            />
          )}
        </div>
        {/* navBar web view */}
        <div className="hidden md:flex">
          <Link activeClass="active" smooth spy to='brief'>
            <button
              className="animate-[fadeInY_0.8s_ease-in-out_0.1s] cursor-pointer hover:shadow-2xl 
            hover:shadow-sky-500 p-1
              rounded-2xl hover:scale-110 transition hover:ease-in-out bg-transparent m-3
              hover:border-b-2 hover:border-sky-600 duration-75
          "
            >
              Home
            </button>
          </Link>
          <Link activeClass="active" smooth spy to='about'>
            <button
              className="animate-[fadeInY_0.8s_ease-in-out_0.2s] cursor-pointer hover:shadow-2xl 
            hover:shadow-sky-500 p-1
              rounded-2xl hover:scale-110 transition hovr:ease-in-out bg-transparent m-3
              hover:border-b-2 hover:border-sky-600 duration-75
          "
            >
              About
            </button>
          </Link>
          <Link activeClass="active" smooth spy to=''>
            <button
              className="animate-[fadeInY_0.8s_ease-in-out_0.3s] cursor-pointer hover:shadow-2xl 
            hover:shadow-sky-500 p-1
              rounded-2xl hover:scale-110 transition hovr:ease-in-out bg-transparent m-3
              hover:border-b-2 hover:border-sky-600 duration-75
          "
            >
              Portfolio
            </button>
          </Link>
          <Link activeClass="active" smooth spy to=''>
            <button
              className="animate-[fadeInY_0.8s_ease-in-out_0.4s] cursor-pointer hover:shadow-2xl 
            hover:shadow-sky-500 p-1
              rounded-2xl hover:scale-110 transition hovr:ease-in-out bg-transparent m-3
              hover:border-b-2 hover:border-sky-600 duration-75
          "
            >
              Client
            </button>
          </Link>
        </div>
        <button
          className="animate-[fadeInY_0.8s_ease-in-out_0.5s]
             p-2 rounded-2xl transition ease-in-out hover:scale-105 bg-transparent shadow-md 
             hover:shadow-2xl shadow-sky-600 hover:shadow-sky-500 hidden md:flex items-center
             duration-75 
        "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 m-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
            />
          </svg>
          Contact me
        </button>
      </nav>
      {/* navBar mobile view */}
      <div
        className={`flex flex-col items-center justify-center space-y-8 z-20 
    backdrop-blur-[1px] bg-sky-400/10  p-4 w-[5rem] h-[30rem] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl md:hidden fixed right-5 
    top-[15%] ${
      toggleNav
        ? "animate-[expand_1s_ease-in-out]"
        : "animate-[collapse_1s_ease-in-out_forwards]"
    }`}
      >
        {toggleNav ? (
          <>
            <Link activeClass="active" smooth spy to='brief' className=" group/item flex flex-col items-center justify-center space-y-1">
              <GrHomeRounded
                size={25}
                className=" transition  duration-75 ease-in-out cursor-pointer hover:scale-125
      animate-[fadeInX_1.2s_ease-in-out] text-sky-400
      "
              />
              <span className="group/edit invisible group-hover/item:visible cursor-pointer">
                home
              </span>
            </Link>

            <Link activeClass="active" smooth spy to='about' className=" group/item flex flex-col items-center justify-center space-y-1">
              <FaRegUser
                size={25}
                className="transition duration-75 ease-in-out cursor-pointer hover:scale-125
      animate-[fadeInX_1.2s_ease-in-out] text-sky-400
      "
              />
              <span className="group/edit invisible group-hover/item:visible cursor-pointer">
                about
              </span>
            </Link>
            <Link activeClass="active" smooth spy to='' className=" group/item flex flex-col items-center justify-center space-y-1">
              <MdOutlineDocumentScanner
                size={25}
                className="transition duration-75 ease-in-out cursor-pointer hover:scale-125
      animate-[fadeInX_1.2s_ease-in-out] text-sky-400
      "
              />
              <span className="group/edit invisible group-hover/item:visible cursor-pointer">
                portfolio
              </span>
            </Link>
            <Link activeClass="active" smooth spy to='' className=" group/item flex flex-col items-center justify-center space-y-1">
              <BiMessageSquareDetail
                size={25}
                className="transition duration-75 ease-in-out cursor-pointer hover:scale-125
      animate-[fadeInX_1.2s_ease-in-out] text-sky-400
      "
              />
              <span className="group/edit invisible group-hover/item:visible cursor-pointer">
                contact
              </span>
            </Link>
            <div className=" group/item flex flex-col items-center justify-center space-y-1"><MdClose
              size={25}
              onClick={handleToggleNav}
              className="transition ease-in-out hover:scale-125 cursor-pointer duration-75
      animate-[fadeInX_1.2s_ease-in-out] text-sky-400
       "
            /><span className="group/edit invisible group-hover/item:visible cursor-pointer">
                close
              </span>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
