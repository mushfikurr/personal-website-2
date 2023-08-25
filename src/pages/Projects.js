import { forwardRef, useState, useRef } from "react";
import Page from "./PageLayout";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectEntry } from "../components/ProjectEntry";

const Projects = forwardRef((props, ref) => {
  const allProjects = [
    {
      title: "videocollab",
      description:
        "A video collaboration desktop application allowing users to join together to cut, merge, and compile video together in real time.",
      languages: ["javascript", "html", "css"],
      techstack: ["react", "electron", "tailwind", "nodejs", "socketio"],
      link: "https://github.com/mushfikurr/videocollab",
    },
    {
      title: "govee-controller",
      description:
        "A web app that allows the controlling of Govee smart devices! Featuring a sleek and intuitive interface to control aspects such as light and custom features such as music syncing.",
      languages: ["javascript", "html", "css"],
      techstack: ["react", "material"],
      link: "https://github.com/mushfikurr/govee-controller",
    },
    {
      title: "personal-website",
      description:
        "My single-page personal portfolio website built with React and Tailwind. ",
      languages: ["javascript", "html", "css"],
      techstack: ["react", "tailwind"],
      link: "https://github.com/mushfikurr/personal-website-2",
    },
    {
      title: "edu-social-media",
      description:
        "A fully implemented proof of concept education-oriented social media. Built in Python using mainly Flask, this was my first foray into creating a complex web application and putting my knowledge into practice.",
      languages: ["python", "html", "css", "javascript", "sql"],
      techstack: ["flask", "mysql", "jquery", "sqlalchemy"],
      link: "https://github.com/mushfikurr/edu-social-media",
    },
  ];

  const [expanded, setExpanded] = useState(false);
  const elemToScrollTo = useRef();

  return (
    <Page
      ref={ref}
      title="Projects"
      classNames={
        "min-w-screen font-iAMono flex min-h-screen px-8 sm:px-16 py-12"
      }
      setActivePage={props.setActivePage}
    >
      <div className={`mt-8 flex flex-grow flex-col items-center sm:mt-20`}>
        <div className="mb-8 flex w-full max-w-lg flex-grow flex-col">
          <h1 className="text-deepblue-500 mb-4 text-4xl font-bold max-sm:ml-0">
            Projects.
          </h1>
          <div className="z-10 mb-0 flex flex-grow flex-col justify-center gap-12">
            <div className="flex flex-col gap-12">
              {allProjects.slice(0, 3).map((project) => (
                <ProjectEntry
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  techstack={project.techstack}
                  languages={project.languages}
                  link={project.link}
                />
              ))}
            </div>
            <AnimatePresence>
              <motion.div
                className="flex flex-col gap-12"
                initial={false}
                animate={
                  expanded
                    ? {
                        height: "auto",
                        opacity: 1,
                        display: "flex",
                        transition: {
                          height: {
                            duration: 0.4,
                          },
                          opacity: {
                            duration: 0.25,
                            delay: 0.15,
                          },
                        },
                      }
                    : {
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: {
                            duration: 0.4,
                          },
                          opacity: {
                            duration: 0.25,
                          },
                        },
                        transitionEnd: {
                          display: "none",
                        },
                      }
                }
              >
                {allProjects
                  .slice(3)
                  ?.map((project, i) =>
                    i === allProjects.length - 1 ? (
                      <ProjectEntry
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        techstack={project.techstack}
                        languages={project.languages}
                        ref={elemToScrollTo}
                      />
                    ) : (
                      <ProjectEntry
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        techstack={project.techstack}
                        languages={project.languages}
                      />
                    )
                  )}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-8 flex w-full justify-center">
            <button
              type="submit"
              onClick={() => {
                setExpanded(!expanded);
                elemToScrollTo.current?.scrollIntoView();
                console.log(elemToScrollTo.current);
              }}
              className="bg-deepblue-500 hover:bg-deepblue-600 text-cod-gray-100 mb-2 mt-2 rounded-sm px-4 py-3 text-sm transition duration-500 ease-in-out"
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
});

export default Projects;
