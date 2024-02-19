import { SiCss3 } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { IoIosGitBranch } from "react-icons/io";
import { BsPatchCheckFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { FiFramer } from "react-icons/fi";

const About = () => {
  const services = [
    {
      text: "React.js Developement",
    },
    {
      text: "Responsive Design",
    },
    {
      text: "Version Control",
    },
    {
      text: "Custom Components",
    },
    {
      text: "Frontend Architecture",
    },
    {
      text: "State Management",
    },
    {
      text: "Integration With Backend",
    },
    {
      text: "Testing",
    },
    {
      text: "Single Page Developement",
    },
    {
      text: "Maintenance and Support",
    },
  ];

  const rightSideSkills = [
    {
      skill: "Fire Base",
      level: "Experienced",
      size: 40,
      icon: <IoLogoFirebase size={40} className="text-sky-400" />,
    },
    {
      skill: "Html",
      level: "Experienced",
      size: 45,
      icon: <FaHtml5 size={45} className="text-sky-400" />,
    },
    {
      skill: "Css",
      level: "Experienced",
      size: 38,
      icon: <SiCss3 size={38} className="text-sky-400" />,
    },
    {
      skill: "Git",
      level: "Experienced",
      size: 35,
      icon: <IoIosGitBranch size={35} className="text-sky-400" />,
    },
  ];

  const leftSideSkills = [
    {
      skill: "React.js",
      level: "Experienced",
      size: 40,
      icon: <FaReact size={40} className="text-sky-400" />,
    },
    {
      skill: "JavaScript",
      level: "Experienced",
      size: 45,
      icon: <TbBrandJavascript size={45} className="text-sky-400" />,
    },
    {
      skill: "Tailwind CSS",
      level: "Experienced",
      size: 38,
      icon: <SiTailwindcss size={38} className="text-sky-400" />,
    },
    {
      skill: "Framer",
      level: "Experienced",
      size: 40,
      icon: <FiFramer size={40} className="text-sky-400" />,
    },
    
   
  ];

  const vars = {
    initial: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    animate: {
      opacity: 1,
      height: "40rem",
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center mt-24 w-screen min-h-screen
                 max-w-[75rem] space-y-5 origin-top
                 "
    >
      <div
        className="text-2xl text-sky-400 font-mono flex justify-center
                   items-center w-[15rem]  h-20 mb-10 animate-fadeInY origin-top border-b-2
                   "
      >
        About me
      </div>

      <div>
        <motion.div
          className="w-screen flex flex-col lg:flex-row items-center
                     justify-center max-w-[75rem] sm:max-w-[75rem] px-10 overflow-hidden lg:space-x-20
                     lg:space-y-0 origin-top"
                     >
          {/* Skills */}
          <AnimatePresence>
            <motion.div
              variants={vars}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="flex flex-col justify-center items-center lg:basis-1/4
                         bg-gradient-to-b from-sky-600 rounded-xl  lg:rounded-tl-2xl
                         lg:rounded-bl-2xl w-96 order-2 lg:order-none mb-12 lg:mb-0 sm:w-[80%] font-mono
                         h-[40rem] relative overflow-hidden origin-top border-r-2 border-l-2 
                         "
            >
              <motion.div
                initial={{ opacity: 0, translateY: -50 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                }}
                whileInView={{
                  opacity: 1,
                  translateY: 0,
                }}
                className="mb-5 absolute top-0 flex items-center justify-center
                          bg-sky-300 text-black w-full h-20 rounded-b-full text-2xl origin-top"
              >
                skills
              </motion.div>
              {/* columns mobile view */}
              <motion.div
                variants={{
                  initial: { opacity: 0, y: "-30vh" },
                  show: { opacity: 1, y: 0 },
                }}
                initial="initial"
                whileInView="show"
                transition={{
                  duration: 0.6,
                }}
                className="flex flex-row lg:flex-col items-center space-x-2
                           sm:space-x-20 md:space-x-40 lg:space-x-0 lg:mt-10 "
              >
                {/* column left mobile view */}
                <div className="space-y-10 lg:space-y-2 overflow-hidden">
                  {leftSideSkills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.7,
                      }}
                      className=" flex items-center justify-center space-x-5 border-b-2"
                    >
                      {skill.icon}
                      <div className="flex flex-col items-center justify-center">
                        <span className="text-lg font-bold">{skill.skill}</span>
                        <span className="text-sky-400">{skill.level}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* column right mobile view */}
                <div className="space-y-10 lg:space-y-2 overflow-hidden">
                  {rightSideSkills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.7,
                      }}
                      className="flex items-center justify-center space-x-5 border-b-2"
                    >
                      {skill.icon}
                      <div className="flex flex-col items-center justify-center">
                        <span className="text-lg font-bold">{skill.skill}</span>
                        <span className="text-sky-400">{skill.level}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* get to know me */}

          <AnimatePresence>
            <motion.div
              variants={vars}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="flex flex-col justify-center items-center lg:basis-1/2
                         bg-gradient-to-b from-sky-600 rounded-xl  w-96 order-1
                         lg:order-none mb-10 lg:mb-0 sm:w-[80%] font-mono h-[40rem] text-center px-5
                         relative overflow-hidden origin-top border-r-2 border-l-2
                         "
            >
              <motion.div
                initial={{ opacity: 0, translateY: -50 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                }}
                whileInView={{
                  opacity: 1,
                  translateY: 0,
                }}
                className="mb-5 absolute top-0 flex items-center justify-center
                          bg-sky-300 w-full h-20 rounded-b-full text-black text-2xl"
              >
                Get To Know Me
              </motion.div>

              <motion.div
                variants={{
                  initial: { opacity: 0, y: "-30vh" },
                  show: { opacity: 1, y: 0 },
                }}
                initial="initial"
                whileInView="show"
                transition={{
                  duration: 0.6,
                }}
              >
                <motion.p
                  initial={{ opacity: 0, translateX: -50 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                  }}
                  className="font-medium text-xl"
                >
                  I'm a passionate and highly skilled React.js Developer <br />
                  with a flair for crafting seamless and engagin user
                  experiences, Leveraging a solid foundation in frontend
                  technologies, I bring creativity and dedication to every
                  project, ensuring robust , modern , responsive , lightning
                  fast and user-friendly web applications.
                </motion.p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Services */}

          <AnimatePresence>
            <motion.div
              variants={vars}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="flex flex-col justify-center items-center lg:basis-1/4
                         bg-gradient-to-b from-sky-600 rounded-xl lg:rounded-tr-2xl
                         lg:rounded-br-2xl w-96 order-3 lg:order-none mb-5 lg:mb-0 sm:w-[80%] font-mono
                         h-[40rem] relative overflow-hidden space-y-10 hover:bg-transparent border-r-2 border-l-2
                         "
            >
              {/* title */}
              <motion.div
                initial={{ opacity: 0, translateY: -50 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                }}
                whileInView={{
                  opacity: 1,
                  translateY: 0,
                }}
                className="flex items-center justify-center absolute top-0
                           rounded-b-full w-full h-20 bg-sky-300 text-black text-2xl"
              >
                Services
              </motion.div>
              {/* menu */}
              <motion.div
                variants={{
                  initial: { opacity: 0, y: "-30vh" },
                  show: { opacity: 1, y: 0 },
                }}
                initial="initial"
                whileInView="show"
                transition={{
                  duration: 0.6,
                }}
              >
                <div className="flex items-start  justify-center flex-col  text-center space-y-5 px-2 overflow-hidden">

                  {/* menu items */}
                  {services.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.3,
                      }}
                      className=" flex items-center justify-center lg:mb-1"
                    >
                      <BsPatchCheckFill size={23} className="text-sky-400" />
                      <div className="ml-3 text-lg lg:text-[12px] text-center border-b-2">
                        {item.text}
                      </div>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
