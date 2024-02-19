import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iu5yjv5",
        "template_zi1zzyb",
        form.current,
        "f2_EKvkGxnLm8p3js"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center w-screen max-w-[75rem] min-h-screen font-mono"
    >
      <div className="flex flex-col justify-center items-center p-4 w-[20rem] text-2xl font-mono mb-5 border-b-2">
        <span className="text-sky-400">Contact Me</span>
      </div>
      {/* =================> Contacts-Start <============= */}
      <div className="flex flex-wrap items-center justify-center gap-10">
        {/* =================> Email-Start <================ */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75, scale: 0.7 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          whileHover={{ scale: 1.05 }}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
          className="flex flex-col items-center justify-center bg-sky-400 w-[20rem] h-[15rem] rounded-lg 
                        space-y-4 shadow-lg shadow-sky-200"
        >
          <MdOutlineEmail size={60} />
          <h2 className="border-b-2"> Email </h2>
          <h4 className="border-b-2">Eng.mahmoud196@gmail.com</h4>

          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="w-18 h-10 rounded-lg shadow-lg shadow-custom1 hover:shadow-lg hover:shadow-custom1"
          >
            <a
              href="mailto:eng.mahmoud196@gmail.com"
              rel="noreferrer"
              target="_blank"
              className="cursor-pointer inline-block w-full h-full p-2"
            >
              Send Email
            </a>
          </motion.button>
        </motion.div>
        {/* ===========> Email-End <=============== */}

        {/* ===========> Messenger-Start <=============== */}

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75, scale: 0.7 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          whileHover={{ scale: 1.05 }}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
          className="flex flex-col items-center justify-center bg-sky-400 w-[20rem] h-[15rem] rounded-lg 
                        space-y-4 shadow-lg shadow-sky-200"
        >
          <RiMessengerLine size={60} />
          <h2 className="border-b-2"> Messenger </h2>
          <h4 className="border-b-2">MH Rabea</h4>

          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="w-18 h-10 rounded-lg shadow-lg shadow-custom1 hover:shadow-lg hover:shadow-custom1"
          >
            <a
              href="https://m.me/mahmoud.rabea.940641"
              rel="noreferrer"
              target="_blank"
              className="cursor-pointer inline-block w-full h-full p-2"
            >
              Send a Message
            </a>
          </motion.button>
        </motion.div>
        {/* ===========> Messenger-End <=============== */}

        {/* ===========> Whatsapp-start <============== */}

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75, scale: 0.7 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          whileHover={{ scale: 1.05 }}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
          className="flex flex-col items-center justify-center bg-sky-400 w-[20rem] h-[15rem] rounded-lg 
                        space-y-4 shadow-lg shadow-sky-200"
        >
          <AiOutlineWhatsApp size={60} />
          <h2 className="border-b-2"> WhatsApp </h2>
          <h4 className="border-b-2">+20-01116305540</h4>

          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="w-18 h-10  rounded-lg shadow-lg shadow-custom1 hover:shadow-lg hover:shadow-custom1"
          >
            <a
              href="https://wa.me/+2001116305540"
              rel="noreferrer"
              target="_blank"
              className="cursor-pointer inline-block w-full h-full p-2"
            >
              Send a Message
            </a>
          </motion.button>
        </motion.div>
        {/* ===========> Whatsapp-End <================= */}
      </div>
      {/* ===========> Contacts-End <================= */}

      {/* ===========> direct Email Section - Start <= */}

      <div className="flex flex-wrap gap-2 items-center justify-center py-10 mt-5">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-wrap items-center justify-center gap-10"
        >
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
            className="flex flex-col items-center justify-center space-y-10"
          >
            <motion.input
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              required
              className="h-[3rem] w-[20rem] rounded-xl p-2 bg-transparent  border-2 border-sky-200
               placeholder-gray-300 focus:outline-none focus:placeholder-transparent
              "
            />
            <motion.input
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              type="email"
              name="email"
              placeholder="Enter your Email"
              required
              className="h-[3rem] w-[20rem] rounded-xl p-2 bg-transparent  border-2 border-sky-200
               placeholder-gray-300 focus:outline-none focus:placeholder-transparent"
            />
          </motion.div>
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
          >
            <motion.textarea
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              name="message"
              id=""
              cols="35"
              rows="10"
              placeholder="Your message"
              className="rounded-xl p-2 lg:w-[30rem] border-2 border-sky-200 placeholder-gray-300 focus:outline-none 
            bg-transparent focus:placeholder-transparent"
              required
            ></motion.textarea>
          </motion.div>

          <motion.button
            variants={{
              hidden: { opacity: 0, y: 75, scale: 0.7 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            type="submit"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="w-18 h-10 p-2 rounded-lg shadow-sm border-2 border-sky-200
           "
          >
            Send a Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
