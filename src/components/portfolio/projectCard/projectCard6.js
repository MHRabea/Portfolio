import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { TbSourceCode } from "react-icons/tb";

import CarouselP6 from "../carousel/carouselP6";

const ProjectCard6 = ({ images }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const details = [
    {
      text: "دار صيد الخاطر للنشر والتوزيع - Said El-Khater",
      icon: <IoCheckmarkDoneSharp className="mr-2" size={20} />,
    },
    {
      text: "Develeped Using React.js,TailwindCss and Framer Motion for front-end",
      icon: <IoCheckmarkDoneSharp className="mr-2" size={20} />,
    },
    {
      text: "firebase , firebase cloud-functions , firestore , storage , authentication and php for back-end and database",
      icon: <IoCheckmarkDoneSharp className="mr-2" size={20} />,
    },
    {
      text: "Extensive Book Collection: Discover a variety of genres, authors, and titles to satisfy every reader's taste.",
      icon: <IoCheckmarkDoneSharp className="mr-2" size={20} />,
    },
    {
      text: "Search: Easily find specific books using my powerful search option.",
      icon: <IoCheckmarkDoneSharp className="mr-2" size={20} />,
    },
    {
      text: "Add Books to Your Cart: Browse a wide selection of books and add them to your cart with just a click.",
      icon: <IoCheckmarkDoneSharp className="mr-2" size={20} />,
    },
    {
      text: "Send Orders via Email: Submit your contact information and book orders through our seamless email system, ensuring you get the books you love.",
      icon: <IoCheckmarkDoneSharp className="mr-2" size={20} />,
    },
    {
      text: "Responsive Design: Enjoy a smooth and consistent experience across all devices, from desktops to mobile phones.",
      icon: <IoCheckmarkDoneSharp className="mr-2" size={20} />,
    },
    {
      text: "Modern and Intuitive UI: Navigate effortlessly through our clean and visually appealing interface, designed with user experience in mind.",
      icon: <IoCheckmarkDoneSharp className="mr-2" size={20} />,
    },
  ];
  const menuVars = {
    initial: {
      height: 0,
      opacity: 0,
    },
    animate: {
      height: "40rem",
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
        <CarouselP6 images={images} />
        <div className=" flex flex-col items-center justify-center w-96 max-w-80">
          <p className="text-lg font-mono text-sky-200">Book-Library</p>
          <p className="text-lg font-mono text-sky-200">موقع صيد الخاطر</p>
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
                        <div>{item.icon}</div>
                        <div>{item.text}</div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-center space-x-5">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            className="w-18 h-10 bg-sky-400 rounded-lg hover:shadow-lg hover:shadow-sky-300"
          >
            <a
              href="https://github.com/MHRabea/book-library"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center space-x-2 w-full h-full p-2"
            >
              <p>Source Code</p> <TbSourceCode size={20} />
            </a>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            className="w-18 h-10 bg-sky-400 rounded-lg hover:shadow-lg hover:shadow-sky-300"
          >
            <a
              href="https://booksbooking.com/"
              target="_blank"
              rel="noreferrer"
              className="w-full h-full p-2 flex items-center justify-center space-x-2"
            >
              <p>Visit</p> <IoRocketOutline size={20} />
            </a>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard6;
