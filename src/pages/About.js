import { forwardRef } from "react";
import Page from "./PageLayout";
import { Book, ChevronLeft, ChevronRight } from "../components/Icons";
import Projects from "../components/Projects";
import ProjectEntry from "../components/projects/ProjectEntry";

const About = forwardRef((props, ref) => {
  const allProjects = [
    {
      title: "joiner",
      description:
        "An video collaboration desktop application allowing users to join together to cut, merge, and compile video together in real time.",
      languages: ["javascript", "html", "css"],
      techstack: ["react", "electron", "tailwind", "nodejs", "socketio"],
    },
    {
      title: "govee-controller",
      description:
        "A web app that allows the controlling of Govee smart devices! Featuring a sleek and intuitive interface to control aspects such as light and custom features such as music syncing.",
      languages: ["javascript", "html", "css"],
      techstack: ["react", "material"],
    },
    {
      title: "personal-website",
      description:
        "My single-page personal portfolio website built with React and Tailwind.",
      languages: ["javascript", "html", "css"],
      techstack: ["react", "tailwind"],
    },
  ];

  return (
    <Page
      ref={ref}
      title="About"
      classNames={
        "min-w-screen font-iAMono flex min-h-screen px-8 sm:px-16 py-12"
      }
      setActivePage={props.setActivePage}
    >
      <div className={`mt-8 flex flex-grow flex-col items-center sm:mt-20`}>
        <div className="mb-8 flex w-full max-w-prose flex-grow flex-col">
          <h1 className="text-deepblue-500 mb-4 text-4xl font-bold">
            Projects.
          </h1>
          <div className="flex flex-grow gap-12">
            {/* Icon Left */}
            <div className="flex items-center justify-center">
              <div className="group flex transform-gpu cursor-pointer items-center justify-center">
                <div className="bg-cod-gray-900 group-hover:bg-deepblue-500 text-cod-gray-200 rounded-full p-3 transition duration-300 ease-in-out group-hover:-translate-x-1">
                  <ChevronLeft classNames="text-cod-gray-50 h-4 w-4" />
                </div>
              </div>
            </div>
            {/* END Icon Left */}
            <div className="z-10 flex w-full flex-col gap-12">
              {allProjects.map((project) => (
                <ProjectEntry
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  techstack={project.techstack}
                  languages={project.languages}
                />
              ))}
            </div>
            {/* Icon Right */}
            <div className="flex items-center justify-center">
              <div className="group flex transform-gpu cursor-pointer items-center justify-center">
                <div className="bg-cod-gray-900 group-hover:bg-deepblue-500 text-cod-gray-200 rounded-full p-3 transition duration-300 ease-in-out group-hover:translate-x-1">
                  <ChevronRight classNames="text-cod-gray-50 h-4 w-4" />
                </div>
              </div>
            </div>
            {/* END Icon Right */}
          </div>
        </div>
      </div>
    </Page>
  );
});

export default About;
