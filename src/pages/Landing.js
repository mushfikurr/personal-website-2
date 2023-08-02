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
      <div className="font-iAMono text-cod-gray-200 flex h-screen min-h-full flex-col">
        <div class="flex h-2/4 flex-col items-center justify-center pt-20 text-3xl md:pt-32">
          <Header />
          <h5 className="py-1 text-base sm:px-48">
            Recent projects I've worked on
          </h5>
        </div>
        <div className="max-h-1/4 flex flex-grow flex-col items-center">
          <Projects />
        </div>
        <div className="mt-2 h-auto">
          {/* Scroll button for bottom of page on screens larger than medium size. */}
          <div
            className="group flex transform-gpu cursor-pointer items-center justify-center pb-10 sm:pb-12"
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
    </Page>
  );
});

export default Landing;
