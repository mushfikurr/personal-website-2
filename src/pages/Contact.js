import { forwardRef } from "react";
import { socialsToRender } from "../components/Socials";
import Page from "./PageLayout";
import { SocialIcon } from "../components/Icons";
import { motion } from "framer-motion";

const Contact = forwardRef((props, ref) => {
  const allContactAnim = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const contactFieldAnim = {
    hidden: { opacity: 0.1, scaleX: 0.2 },
    show: {
      opacity: 1,
      scaleX: 1,
      type: "spring",
      stiffness: 100,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <Page
      ref={ref}
      title="Contact"
      classNames={
        "flex min-h-screen px-8 sm:px-16 py-12 font-iAMono justify-center "
      }
      setActivePage={props.setActivePage}
    >
      <div
        className={`mt-8 flex max-w-lg flex-grow flex-col max-sm:ml-0 md:mt-20`}
      >
        <div className="flex flex-grow flex-col md:mt-20">
          <div>
            <p className="text-deepblue-500 mb-4 ml-[4px] text-4xl font-bold">
              Contact.
            </p>
            <span className="ml-[8px] flex gap-2 text-gray-200 md:hidden">
              {socialsToRender.map((socialName) => (
                <SocialIcon
                  classNames={"h-5 w-5"}
                  key={socialName}
                  socialName={socialName}
                />
              ))}
            </span>
          </div>

          <motion.form
            variants={allContactAnim}
            initial="hidden"
            whileInView="show"
            className="text-cod-gray-900 m-1 text-2xl"
            action="https://formsubmit.co/mushfikur0@gmail.com"
            method="POST"
          >
            <label className="text-cod-gray-200 w-full pl-1 text-sm md:text-lg">
              Name
            </label>
            <div className="w-full">
              <motion.input
                variants={contactFieldAnim}
                name="name"
                required
                className="bg-cod-gray-300 hover:bg-cod-gray-400 focus:bg-deepblue-300 md:text-md  mb-2 mt-1 w-full origin-left rounded-sm p-3 text-sm transition duration-300 ease-in-out focus:outline-none"
              ></motion.input>
            </div>

            <label className="text-cod-gray-200 w-full pl-1 text-sm md:text-lg">
              Email
            </label>
            <div className="w-full">
              <motion.input
                type="email"
                name="email"
                required
                variants={contactFieldAnim}
                className="bg-cod-gray-300 hover:bg-cod-gray-400 focus:bg-deepblue-300 md:text-md mb-2 mt-1 w-full origin-left rounded-sm p-3 text-sm transition duration-300 ease-in-out focus:outline-none"
              ></motion.input>
            </div>

            <label className="text-cod-gray-200 w-full pl-1 text-sm md:text-lg">
              Message
            </label>
            <div className="w-full">
              <motion.textarea
                rows={4}
                required
                name="message"
                variants={contactFieldAnim}
                className="bg-cod-gray-300 hover:bg-cod-gray-400 focus:bg-deepblue-300 md:text-md  mb-1 mt-1 w-full origin-left rounded-sm p-3 text-sm transition duration-300 ease-in-out focus:outline-none"
              ></motion.textarea>
            </div>

            <button
              type="submit"
              className="bg-deepblue-500 hover:bg-deepblue-600 text-cod-gray-100 mb-2 mt-2 rounded-sm px-4 py-3 text-sm transition duration-500 ease-in-out"
            >
              Submit
            </button>
          </motion.form>
          <p className="text-cod-gray-50 mt-4 text-sm">
            Alternatively, send me an email at{" "}
            <span
              onClick={(event) => {
                window.open("mailto:mushfikur0@gmail.com", "mail");
                event.preventDefault();
              }}
              className="text-deepblue-300 hover:text-deepblue-500 cursor-pointer transition-colors duration-300 ease-in-out"
            >
              mushfikur0@gmail.com
            </span>
            .
          </p>
        </div>
      </div>
    </Page>
  );
});

export default Contact;
