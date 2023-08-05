import Header from "../components/Header";
import Projects from "../components/Projects";
import { useRef, useEffect, forwardRef } from "react";
import Page from "./PageLayout";

const Landing = forwardRef((props, ref) => {
  const scrollProjectsIntoView = () => {
    props.aboutRef.current.scrollIntoView();
  };

  return (
    <Page
      setActivePage={props.setActivePage}
      classNames={"flex min-h-screen px-8 sm:px-16 py-12 font-iAMono"}
      ref={ref}
      title="Home"
    >
      <div className="mt-8 flex flex-grow flex-col md:mt-20">
        <div className="flex flex-grow flex-col">
          <div className="flex basis-5/6 flex-col items-center justify-center">
            <div className="flex flex-grow flex-col items-center justify-center">
              <h1 className="text-cod-gray-100 text-center text-2xl font-bold md:text-4xl">
                Hi, I'm <span className="text-deepblue-500">Mushfikur</span>.
              </h1>
              <h3 className="text-cod-gray-300 text-center text-sm md:text-lg">
                A London based web developer looking to make a change 👀
              </h3>
            </div>
            <p className="text-cod-gray-50 pb-3 text-center md:text-lg">
              Recent projects I've worked on
            </p>
          </div>
          <div className="flex basis-3/4 flex-col items-center">
            <Projects />
          </div>
          <div className="mt-8 h-auto">
            {/* Scroll button for bottom of page on screens larger than medium size. */}
            <div
              className="group flex transform-gpu cursor-pointer items-center justify-center"
              onClick={() => {
                scrollProjectsIntoView();
              }}
            >
              <p className="group-hover:text-deepblue-300 text-cod-gray-200 mr-2 hidden text-sm transition duration-300 ease-in-out group-hover:translate-y-1 lg:block">
                Discover my story!
              </p>
              <div className="bg-cod-gray-900 group-hover:bg-deepblue-500 text-cod-gray-200 rounded-full p-3 transition duration-300 ease-in-out group-hover:translate-y-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="text-cod-gray-200 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
});

export default Landing;
