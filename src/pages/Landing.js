import Header from "../components/Header";
import Projects from "../components/Projects";
import { useRef, useEffect, forwardRef } from "react";
import Page from "./PageLayout";

const Landing = forwardRef((props, ref) => {
  const scrollProjectsIntoView = () => {
    props.aboutRef.current.scrollIntoView();
  };

  return (
    <Page setActivePage={props.setActivePage} ref={ref} title="Home">
      <div className="font-iAMono h-screen px-8 py-2 sm:px-24 sm:py-12">
        <div className="flex h-full flex-col">
          <div className="flex flex-grow flex-col">
            {/* Header */}
            <div className="md:h-2/5">
              <div className="flex h-full w-full">
                <Header />
              </div>
            </div>

            <div className="flex-grow">
              {/* Projects */}
              <div className="h-4/5">
                {/* Project title */}
                <div className="flex h-1/5 items-end justify-center">
                  <h2 className="text-cod-gray-100 mb-2 text-center text-lg font-medium">
                    Projects I've worked on
                  </h2>
                </div>

                <div className="h-4/5">
                  <Projects />
                </div>
              </div>

              {/* Scroll button for bottom of page on screens larger than medium size. */}
              <div className="flex h-1/6 items-end justify-end lg:justify-center">
                <div
                  className="group flex transform-gpu cursor-pointer items-center py-4"
                  onClick={() => {
                    scrollProjectsIntoView();
                  }}
                >
                  <p className="group-hover:text-deepblue-100 text-cod-gray-200 mr-2 hidden h-full w-full text-xs transition duration-300 ease-in-out group-hover:translate-y-1 lg:block">
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
        </div>
      </div>
    </Page>
  );
});

export default Landing;
