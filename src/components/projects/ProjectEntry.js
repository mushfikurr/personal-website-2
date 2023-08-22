import { AnimatePresence, motion } from "framer-motion";
import { SocialIcon, brandColours } from "../Icons";
import { useState } from "react";

const TechStack = (props) => {
  const techStackColor = brandColours[props.techStack];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <p
      className="cursor-pointer transition-colors duration-300 ease-in-out"
      style={{ color: isHovered && techStackColor }}
      key={props.techStack}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {props.techStack}
    </p>
  );
};

export default function ProjectEntry(props) {
  const initialAnimBackground = { opacity: 0, y: 0, x: 0 };
  const animBackground = {
    opacity: 0.6,
    y: 16,
    x: 16,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 40,
      ease: "easeInOut",
    },
  };

  const allSocialsAnimProps = {
    hidden: { height: 0, opacity: 0 },
    show: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.8,
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
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <>
      <div className="bg-cod-gray-300 relative flex flex-1">
        <AnimatePresence>
          <motion.div
            initial={initialAnimBackground}
            exit={initialAnimBackground}
            whileInView={animBackground}
            className="bg-deepblue-200 absolute -z-10 h-full w-full drop-shadow-md"
          ></motion.div>
          <div className="bg-cod-gray-200 flex flex-col items-center gap-2 p-4">
            <div className="h-32 w-32 overflow-hidden">
              <img
                className=" h-full w-full shadow-inner"
                src="https://picsum.photos/200"
              />
            </div>
            <button className="bg-deepblue-500 text-cod-gray-50 w-full px-3 py-2 text-xs">
              View on Github
            </button>
          </div>
          <div className="flex flex-grow flex-col px-4 py-6">
            <p className="text-strong text-cod-gray-800">
              {props.title || "project-title"}
            </p>
            <p className="flex-grow text-xs">
              {props.description || "project-description"}
            </p>
            <p className="text-xs">Built with:</p>
            <div className="flex gap-2 text-xs">
              {props.techstack.map((techStack) => (
                <TechStack key={techStack} techStack={techStack} />
              ))}
            </div>
          </div>
        </AnimatePresence>
        <div className=""></div>
      </div>
    </>
  );
}
