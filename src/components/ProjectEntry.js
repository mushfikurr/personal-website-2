import { AnimatePresence, motion } from "framer-motion";
import { SocialIcon, brandColours } from "./Icons";
import { forwardRef, useState } from "react";

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

const Language = (props) => {
  const languageColour = brandColours[props.language];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <p
      className="cursor-pointer transition-colors duration-300 ease-in-out"
      style={{ color: isHovered && languageColour }}
      key={props.language}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {props.language}
    </p>
  );
};

export const ProjectEntry = forwardRef((props, ref) => {
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
      <div className="bg-cod-gray-300 group relative flex" ref={ref}>
        <AnimatePresence>
          <motion.div
            initial={initialAnimBackground}
            exit={{ opacity: 0, y: 0, x: 0 }}
            whileInView={animBackground}
            className="bg-deepblue-200 group-hover:bg-deepblue-400 absolute -z-10 h-full w-full drop-shadow-md transition-colors duration-300 ease-in-out"
          ></motion.div>
          <div className="bg-cod-gray-200 min-w-1/3 flex flex-col items-center justify-center gap-2 p-4 max-sm:hidden">
            <div className="h-auto max-w-full overflow-hidden rounded-sm">
              <img
                className="h-auto max-w-md shadow-inner"
                src="https://picsum.photos/50"
              />
            </div>
            <button className="bg-deepblue-500 hover:bg-deepblue-600 text-cod-gray-100 w-full rounded-sm px-3 py-2 text-xs transition duration-500 ease-in-out">
              View
            </button>
          </div>
          <div className="flex flex-col px-4 py-6">
            <p className="text-cod-gray-800 font-bold">
              {props.title || "project-title"}
            </p>
            <p className="text-xs">
              {props.description || "project-description"}
            </p>

            <div className="mt-4 flex gap-2 text-xs">
              <p className="text-xs">🔨</p>
              {props.techstack.map((techStack) => (
                <TechStack key={techStack} techStack={techStack} />
              ))}
            </div>
            <div className="flex gap-2 text-xs">
              <p className="text-xs">📕</p>
              {props.languages.map((language) => (
                <Language key={language} language={language} />
              ))}
            </div>
          </div>
        </AnimatePresence>
      </div>
    </>
  );
});
