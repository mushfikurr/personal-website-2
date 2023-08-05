import { SocialIcon } from "./Icons";
import { motion } from "framer-motion";

export const socialsToRender = ["github", "twitter", "linkedin", "discord"];

export default function Socials() {
  const allSocialsAnimProps = {
    hidden: { height: 0, opacity: 0 },
    show: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
        ease: "easeInOut",
      },
    },
  };

  const socialAnimProps = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      variants={allSocialsAnimProps}
      initial="hidden"
      animate="show"
      layout
      className="bg-cod-gray-900 invisible fixed z-50 flex w-16 max-w-md justify-center rounded-full bg-opacity-90 py-6 text-white backdrop-blur-lg sm:mx-24 sm:my-36 lg:visible"
    >
      <ul className="flex h-full w-10 flex-col items-center space-y-4">
        {socialsToRender.map((social) => {
          return (
            <motion.li
              key={social}
              variants={socialAnimProps}
              className="hover:text-deepblue-500 transition-colors duration-300 hover:cursor-pointer"
            >
              <SocialIcon socialName={social} />
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}
