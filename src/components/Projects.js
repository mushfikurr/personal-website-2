import { PopoverIcon, ChevronDown, ChevronUp } from "./Icons";
import { useState, useRef } from "react";

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

function ProjectCollapsable(props) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef();

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
      isOpen ? "text-deepblue-500" : "text-cod-gray-50"
    } transition duration-300 ease-in-out group-hover:text-deepblue-200 h-3 w-3`;
    return isOpen ? (
      <ChevronUp classNames={classNames} />
    ) : (
      <ChevronDown classNames={classNames} />
    );
  };

  const projectTitleClassnames = `${
    isOpen ? "text-deepblue-500" : "text-cod-gray-50"
  } group-hover:text-deepblue-200 flex-grow text-sm font-medium transition duration-300 ease-in-out`;

  const projectCardClassnames = `bg-cod-gray-900 group transform-gpu rounded-xl px-4 py-4 text-sm transition-all duration-500 ease-in-out hover:cursor-pointer hover:drop-shadow-xl overflow-hidden`;

  return (
    <div
      className={projectCardClassnames}
      style={{ maxHeight: isOpen ? contentRef.current.offsetHeight + 48 : 50 }}
      onClick={() => {
        handleClick();
      }}
    >
      <div className="flex flex-col">
        {/* Title that is always shown */}
        <div className="flex flex-grow items-center overflow-hidden text-ellipsis">
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
}

/**
 * Display all projects in a grid structure.
 */
export default function Projects() {
  return (
    <div className="flex h-full w-full justify-center px-20 pt-2 sm:block">
      <div className="h-full select-none space-y-4 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        {allProjects.map((project) => (
          <ProjectCollapsable key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
