import Logo from "../images/final logom-011.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
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

  return (
    <footer
      className="w-screen h-[10rem] min-h-[20rem] bg-sky-500 lg:h-[10rem] lg:min-h-[10rem]  
     px-7 py-1 flex items-center justify-center"
    >
      <div className=" flex flex-col items-center justify-center space-y-5 max-w-[80rem] lg:flex-row lg:space-x-[15rem]">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75, scale: 0.7 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
          className="w-[7rem] h-[7rem] bg-sky-950 flex items-center justify-center rounded-full"
        >
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
            className=" object-cover h-20 w-25"
          />
        </motion.div>

        <div className="flex">
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
                  className="text-sky-100 cursor-pointer p-2 bg-transparent m-3 hover:border-b-2 
                  hover:border-sky-100
                    "
                >
                  {item.text}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75, scale: 0.7 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
          className="flex flex-col items-center justify-center space-y-2"
        >
          <h4 className="text-sm text-gray-300">
            &copy; Mahmoud Saad. All rights reserved.
          </h4>

          <motion.div className="flex items-center justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a href="https://www.linkedin.com/in/mahmoud-rabea-5b7875285/">
                <BsLinkedin size={20} />
              </a>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a href="https://github.com/MHRabea/">
                <FaGithub size={20} />
              </a>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a href="https://www.upwork.com/freelancers/~01f2915771002f816a">
                <SiUpwork size={20} />
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
