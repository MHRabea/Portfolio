import React, { useState, useEffect } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";


const CarouselP1 = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEnlarged, setIsEnlarged] = useState(false);
 
  const toggleReview = () => {
    setIsEnlarged(!isEnlarged);
  };

  const handleClose = () => {
    setIsEnlarged(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const slideTo = (index) => {
    setCurrentIndex(index);
  };

  
  useEffect(() => {
    let intervalId;

    if (!isEnlarged) {
      intervalId = setInterval(nextSlide, interval);
    }

    return () => {
      clearInterval(intervalId);
    };
  });
  return (
    <div className="relative w-96 h-[15rem] rounded-lg px-2 flex items-center justify-center flex-col">
      {/* enlarged image */}
      {isEnlarged && (
        <AnimatePresence>
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            onClick={handleClose}
            className="fixed inset-0 flex flex-col items-center 
            justify-center z-40 px-5 py-5 bg-sky-500/5 
            backdrop-blur-md"
          >
            <motion.div
              className="w-[40rem] h-[40rem] max-w-full max-h-full z-50
               md:w-[50rem] md:h-[50rem] lg:w-[70rem] lg:h-[70rem
               overflow-hidden "
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <motion.img
                key="image"
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="object-contain w-full h-full cursor-pointer z-40"
              />
            </motion.div>
            {currentIndex === 0 && (
              <p className="font-mono text-xl text-sky-200">
                Modern & Responsive Design
              </p>
            )}
            {currentIndex === 1 && (
              <p className="font-mono text-xl text-sky-200">React & Comment</p>
            )}
            {currentIndex === 2 && (
              <p className="font-mono text-xl text-sky-200">Review Images</p>
            )}
            {currentIndex === 3 && (
              <p className="font-mono text-xl text-sky-200">Profile Page</p>
            )}
            {currentIndex === 4 && (
              <p className="font-mono text-xl text-sky-200">Add a Post</p>
            )}
            {currentIndex === 5 && (
              <p className="font-mono text-xl text-sky-200">
                follow and Unfollow others
              </p>
            )}
            {currentIndex === 6 && (
              <p className="font-mono text-xl text-sky-200">Sign in</p>
            )}
            {currentIndex === 7 && (
              <p className="font-mono text-xl text-sky-200">Sign Up</p>
            )}
          </motion.div>
        </AnimatePresence>
      )}

      {/* normal image  */}

      <div
        className={`relative h-96 overflow-hidden rounded-lg justify-center items-center flex`}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "block" : "hidden"
            }  transition animate-fadeIn duration-500 ease-in-out z-0 border-2 rounded-lg`}
            onClick={toggleReview}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-auto rounded-md cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* <!-- Slider indicators --> */}

      <div className="absolute z-30 flex -translate-x-1/2 bottom-1 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((image, index) => (
          <button
            type="button"
            key={index}
            className={`bg-sky-400 w-3 h-3 rounded-full transition ease-in-out duration-400 hover:scale-125
             hover:bg-sky-200 ${
               index === currentIndex && "bg-sky-100 scale-125"
             }`}
            onClick={() => slideTo(index)}
          ></button>
        ))}
      </div>

      {/* <!-- Slider controls --> */}

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer
         group focus:outline-none"
        onClick={prevSlide}
      >
        <IoIosArrowDropleftCircle
          className="hover:scale-125 transition ease-in-out"
          size={30}
        />
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer
         group focus:outline-none"
        onClick={nextSlide}
      >
        <IoIosArrowDroprightCircle
          size={30}
          className="hover:scale-125 transition ease-in-out"
        />
      </button>
    </div>
  );
};

export default CarouselP1;
