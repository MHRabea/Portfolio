import { useState } from "react";
import CarouselP2 from "../carousel/carouselP2";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const ProjectCard2 = ({ images }) => {
  const [expanded , setExpanded] = useState(false);


  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const details = [
    {
      text: "Develeped Using React.js, TailwindCss and FireBase",
      icon: <IoCheckmarkDoneSharp className="mr-2" />,
    },
    {
      text: "Responsive & Modern Design",
      icon: <IoCheckmarkDoneSharp className="mr-2" />,
    },
    {
      text: "Upload Images to the Gallery",
      icon: <IoCheckmarkDoneSharp className="mr-2" />,
    },
    {
      text: "Smooth Animations ",
      icon: <IoCheckmarkDoneSharp className="mr-2" />,
    },
    {
      text: "Review Images",
      icon: <IoCheckmarkDoneSharp className="mr-2" />,
    },
  ];
  const menuVars = {
    initial: {
      height: 0,
      opacity: 0,
    },
    animate: {
      height: "17rem",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75, scale: 0.7 },
          visible: { opacity: 1, y: 0, scale: 1 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
        className="flex items-center justify-center flex-col space-y-3"
      >
        <CarouselP2 images={images} />
        <div className=" flex flex-col items-center justify-center w-96 max-w-80">
          <p className="text-lg font-mono text-sky-200">Gallery App</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          className="flex items-center justify-center cursor-pointer hover:border-b-2 mb-1 text-sky-400"
          onClick={handleExpand}
        >
          <span className="pr-2">Details</span>

          <motion.div
            animate={{
              rotate: expanded ? 180 : 0,
            }}
            className="mt-1"
            transition={{
              duration: 0.8,
            }}
          >
            <MdKeyboardDoubleArrowDown />
          </motion.div>
        </motion.button>
        <AnimatePresence>
          {expanded && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex rounded-lg items-center justify-center w-[23rem] bg-transparent origin-top"
            >
              <motion.div className="flex flex-col items-start justify-center h-full space-y-3 w-full px-3">
                {details.map((item, index) => {
                  return (
                    <div key={index} className="overflow-hidden">
                      <motion.div
                        key={index}
                        initial={{
                          opacity: 0,
                          translateX: -50,
                        }}
                        animate={{ opacity: 1, translateX: 0 }}
                        exit={{ opacity: 0, translateX: -50 }}
                        transition={{ duration: 0.3, delay: index * 0.2 }}
                        className="flex items-center justify-center text-sky-200"
                      >
                       {item.icon} {item.text}
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button 
        whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        className="w-18 h-10  bg-sky-400 rounded-lg hover:shadow-lg hover:shadow-sky-300">
          <a href="https://github.com/MHRabea/My-Gallery.git"   target="_blank" className="inline-block w-full h-full p-2">
            Source Code
          </a>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ProjectCard2;
