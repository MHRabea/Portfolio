import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center w-screen max-w-[75rem] min-h-screen font-mono"
    >
      <div className="flex flex-col justify-center items-center p-4 w-[20rem] text-2xl font-mono">
        <span className="text-sky-400">Contact Me</span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10">
      {/* =================> Email <================ */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75, scale: 0.7 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          whileHover={{ scale : 1.05}}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration:0.2,
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
          className="flex flex-col items-center justify-center bg-sky-400 w-[15rem] h-[15rem] rounded-lg 
                        space-y-4 shadow-lg shadow-sky-200"
        >
          <MdOutlineEmail size={60} />
          <h2 className="border-b-2"> Email </h2>
          <h4 className="border-b-2">Eng.mahmoud196@gmail.com</h4>

          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="w-18 h-10 p-2 rounded-lg shadow-lg shadow-custom1 hover:shadow-lg hover:shadow-custom1"
          >
            <a
              href="mailto:eng.mahmoud196@gmail.com"
              target="_blank"
              className="cursor-pointer"
            >
              Send Email
            </a>
          </motion.button>
        </motion.div>
        {/* =================> messenger <================ */}

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75, scale: 0.7 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          whileHover={{ scale : 1.05}}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration:0.2,
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
          className="flex flex-col items-center justify-center bg-sky-400 w-[15rem] h-[15rem] rounded-lg 
                        space-y-4 shadow-lg shadow-sky-200"
        >
          <RiMessengerLine size={60} />
          <h2 className="border-b-2"> Messenger </h2>
          <h4 className="border-b-2">MH Rabea</h4>

          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="w-18 h-10 p-2 rounded-lg shadow-lg shadow-custom1 hover:shadow-lg hover:shadow-custom1"
          >
            <a
              href="https://m.me/mahmoud.rabea.940641"
              target="_blank"
              className="cursor-pointer"
            >
              Send a Message
            </a>
          </motion.button>
        </motion.div>

        {/* =================> whatsapp <================ */}

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75, scale: 0.7 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          whileHover={{ scale : 1.05}}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration:0.2,
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
          className="flex flex-col items-center justify-center bg-sky-400 w-[15rem] h-[15rem] rounded-lg 
                        space-y-4 shadow-lg shadow-sky-200"
        >
          <AiOutlineWhatsApp size={60} />
          <h2 className="border-b-2"> WhatsApp </h2>
          <h4 className="border-b-2">+20-01116305540</h4>

          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="w-18 h-10 p-2 rounded-lg shadow-lg shadow-custom1 hover:shadow-lg hover:shadow-custom1"
          >
            <a
              href="https://wa.me/+2001116305540"
              target="_blank"
              className="cursor-pointer"
            >
              Send a Message
            </a>
          </motion.button>
        </motion.div>

        
      </div>
    </section>
  );
};

export default Contact;
