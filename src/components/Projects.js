import { PopoverIcon, ChevronDown, ChevronUp } from "./Icons";
import { useState, useRef, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allProjects = [
  {
    title: "🎥 joiner",
    description:
      "An online video collaboration application allowing users to cut, merge, and compile video together.",
    languages: ["javascript", "html", "css"],
    techstack: ["react", "electron", "tailwind", "nodejs", "socketio"],
  },
  {
    title: "💡 govee-controller",
    description: "A web app for controlling Govee smart devices!",
    languages: ["javascript", "html", "css"],
    techstack: ["react", "material"],
  },
  {
    title: "🖋️ personal-website",
    description: "My personal portfolio website built with React and Tailwind.",
    languages: ["javascript", "html", "css"],
    techstack: ["react", "tailwind"],
  },
];

/**
 * Each project component, where each component is collapsible.
 * Collapse works by setting the maxHeight to the content's height + the offset of the padding.
 * Offset is hardcoded for now but is equal to theme.spacing(4) * 3
 */

const ProjectCollapsable = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef();
  const titleRef = useRef();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const renderIcon = (socialName) => {
    return (
      <span className="flex-initial">
        <PopoverIcon
          socialName={socialName}
          preferredPositions={["bottom", "top", "right", "left"]}
          classNames={
            "h-4 w-4 cursor-pointer text-cod-gray-200 transition duration-300 ease-in-out hover:text-deepblue-500"
          }
        />
      </span>
    );
  };

  const renderChevron = () => {
    const classNames = `${
      isOpen
        ? "text-deepblue-500 group-hover:text-deepblue-500"
        : "text-cod-gray-50 group-hover:text-deepblue-300"
    } transition duration-300 ease-in-out h-3 w-3`;
    return isOpen ? (
      <ChevronUp classNames={classNames} />
    ) : (
      <ChevronDown classNames={classNames} />
    );
  };

  const projectTitleClassnames = `${
    isOpen
      ? "text-deepblue-500 group-hover:text-deepblue-500"
      : "text-cod-gray-50 group-hover:text-deepblue-300"
  }  flex-grow text-sm font-medium transition-colors duration-300 ease-in-out`;

  const projectCardClassnames = `bg-cod-gray-900 group transform-gpu rounded-xl px-4 py-4 text-sm transition-all duration-500 ease-in-out hover:cursor-pointer hover:drop-shadow-xl overflow-hidden`;

  return (
    <div
      className={projectCardClassnames}
      style={{ maxHeight: isOpen ? contentRef.current.offsetHeight + 48 : 50 }}
      onClick={() => {
        handleClick();
      }}
      ref={ref}
    >
      <div className="flex flex-col">
        {/* Title that is always shown */}
        <div
          ref={titleRef}
          className="flex flex-grow items-center overflow-hidden text-ellipsis"
        >
          <p className={projectTitleClassnames}>
            {props.title || "project-title"}
          </p>
          {renderChevron()}
        </div>
        {/* Collapsable content (the content that is toggleable) */}
        <div ref={contentRef}>
          {/* Project description */}
          <div className="text-cod-gray-200 pt-4 text-xs">
            <p>
              {props.description ||
                "Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum \
            sit dolor amet."}
            </p>
          </div>
          {/* Project languages/tech used. */}
          <div className="flex">
            <div className="flex flex-grow space-x-4">
              {/* Languages */}
              <div className="flex h-full items-center space-x-1 overflow-hidden">
                {props.languages?.map((language) => {
                  return renderIcon(language);
                })}
              </div>
              {/* Tech stack (Framworks, etc) */}
              <div className="flex h-full items-center space-x-1 overflow-hidden">
                {props.techstack?.map((techstack) => {
                  return renderIcon(techstack);
                })}
              </div>
            </div>
            {/* Bottom right of the project container, has a button. */}
            <div>
              <button className="bg-darkgray hover:bg-deepblue-500 h-full rounded-md px-3 py-2 text-xs transition-colors">
                <span className="text-cod-gray-200 flex space-x-1">
                  <p>Open</p>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

/**
 * Display all projects in a grid structure.
 */
export default function Projects() {
  const allProjectsAnimProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: "easeInOut",
      },
    },
  };

  const projectAnimProps = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const MotionProjectCollapsable = motion(ProjectCollapsable);

  return (
    <div className="sm:block md:px-32 lg:px-64">
      <motion.div
        variants={allProjectsAnimProps}
        initial="hidden"
        animate="show"
        className="h-full select-none space-y-4 lg:grid lg:h-auto lg:grid-cols-3 lg:justify-center lg:gap-x-8 lg:gap-y-4 lg:space-y-0"
      >
        {allProjects.map((project, i) => (
          <MotionProjectCollapsable
            variants={projectAnimProps}
            key={project.title}
            {...project}
          />
        ))}
      </motion.div>
    </div>
  );
}
