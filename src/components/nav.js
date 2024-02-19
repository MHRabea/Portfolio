import { useState } from "react";
import Logo from "../images/final logom-011.png";
import { Link } from "react-scroll";
import { MdClose } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { TbMessageCircleCheck } from "react-icons/tb";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };
  const navigationsWeb = [
    {
      text: "Home",
      id: "brief",
    },
    {
      text: "About",
      id: "about",
    },
    {
      text: "Portfolio",
      id: "portfolio",
    },
    {
      text: "Contact",
      id: "contact",
    },
  ];

  const navigationMob = [
    {
      text: "Home",
      icon: <GrHomeRounded size={25} className="cursor-pointer text-sky-400" />,
      id: "brief",
      delay: 0.5,
    },
    {
      text: "About",
      icon: <FaRegUser size={25} className="cursor-pointer text-sky-400" />,
      id: "about",
      delay: 0.6,
    },
    {
      text: "Portfolio",
      icon: (
        <MdOutlineDocumentScanner
          size={25}
          className="cursor-pointer text-sky-400"
        />
      ),
      id: "portfolio",
      delay: 0.7,
    },
    {
      text: "Contact",
      icon: (
        <BiMessageSquareDetail
          size={25}
          className="cursor-pointer text-sky-400"
        />
      ),
      id: "contact",
      delay: 0.8,
    },
  ];

  const navVars = {
    hidden: { height: 0 },
    expand: {
      opacity: 1,
      height: "30rem",
      transition: { duration: 0.6, delay: 0.2 },
    },
    exit: {
      height: 0,
      transition: {
        duration: 0.3,
        delay: 0.8,
      },
    },
  };

  return (
    <div className=" flex flex-col items-center justify-center space-y-5">
      <nav className="h-40 w-screen py-1 flex items-center justify-between max-w-[80rem] px-7">
        {/* Logo Img */}

        <motion.img
          variants={{
            hidden: { opacity: 0, y: -70 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="show"
          transition={{
            duration: 0.7,
          }}
          src={Logo}
          alt="logo-img"
          className=" animate-[fadeInY_0.8s_ease-in-out_0.1s] object-cover h-20 w-25"
        />

        {/* ====================> menu Button <================== */}

        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          onClick={handleToggleNav}
          className="md:hidden flex flex-col items-end justify-center space-y-1"
          animate={toggleNav ? "open" : "closed"}
        >
          <motion.span
            className="h-[0.10rem] w-7 rounded-2xl bg-sky-400"
            variants={{
              closed: { opacity: 1, rotate: "0deg" },
              open: { opacity: 1, rotate: "-45deg" },
            }}
          ></motion.span>
          <motion.span
            className="h-[0.10rem] w-7 rounded-2xl bg-sky-400"
            variants={{
              closed: { opacity: 1, rotate: "0deg", y: 0 },
              open: { opacity: 1, rotate: "45deg", y: -5 },
            }}
          ></motion.span>
          <motion.span
            className="h-[0.10rem] w-7 rounded-2xl bg-sky-400"
            variants={{
              closed: { opacity: 1, rotate: "0deg", y: 0 },
              open: { opacity: 0, rotate: "0deg", y: 5 },
            }}
          ></motion.span>
        </motion.button>

        {/* =========================== > navBar web view < ============================= */}
        <div className="hidden md:flex ">
          {navigationsWeb.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: -70 },
                show: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="show"
              transition={{
                duration: 0.6,
                delay: index * 0.3,
              }}
            >
              <Link activeClass="active" smooth spy to={item.id}>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  className="text-sky-400 cursor-pointer p-2 bg-transparent m-3 hover:border-b-2 
                  hover:border-sky-300
                  "
                >
                  {item.text}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          className="ease-in-out bg-transparent hidden md:flex items-center "
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
              <TbMessageCircleCheck size={30} />
              <h4>Contact me</h4>
            </Link>
          </motion.div>
        </motion.button>
      </nav>

      {/* ==============================> navBar mobile view <==============================*/}
      <AnimatePresence>
        {toggleNav && (
          <motion.div
            variants={navVars}
            initial="hidden"
            animate="expand"
            exit="exit"
            className={`flex  items-center justify-center z-20 backdrop-blur-[3px] bg-sky-400/20 w-[5rem] 
            h-[30rem] rounded-tl-3xl rounded-bl-3xl md:hidden fixed right-0 origin-top top-[20%]`}
          >
            <motion.div
              className="h-full w-full flex flex-col items-center justify-center space-y-5 
            overflow-hidden
            "
            >
              {navigationMob.map((item, index) => (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  className="overflow-hidden"
                >
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      translateX: -50,
                    }}
                    animate={{ opacity: 1, translateX: 0 }}
                    exit={{ opacity: 0, translateX: -50 }}
                    transition={{ duration: 0.3, delay: item.delay }}
                    className="flex items-center justify-center overflow-hidden"
                  >
                    <Link
                      activeClass="active"
                      smooth
                      spy
                      to={item.id}
                      className="group/item flex flex-col items-center justify-center space-y-1"
                    >
                      {item.icon}
                      <span className="group/edit invisible group-hover/item:visible cursor-pointer">
                        {item.text}
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    translateX: -50,
                  }}
                  animate={{ opacity: 1, translateX: 0 }}
                  exit={{ opacity: 0, translateX: -50 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                  className="group/item flex flex-col items-center justify-center space-y-1 overflow-hidden"
                >
                  <MdClose
                    size={25}
                    onClick={handleToggleNav}
                    className="cursor-pointer text-sky-400"
                  />
                  <span className="group/edit invisible group-hover/item:visible cursor-pointer">
                    close
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
