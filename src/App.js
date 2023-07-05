import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Projects from "./components/Projects";

const pages = ["Home", "Projects", "Contact"];

function App() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <div className="bg-darker-gray font-iAMono h-screen w-screen px-4 py-2 sm:px-24 sm:py-12">
      <div className="flex h-full flex-col">
        {/* Navbar */}
        <Navbar
          pages={pages}
          activePage={activePage}
          setActivePage={setActivePage}
        />

        <div className="flex flex-grow flex-col">
          <div className="lg:h-2/5">
            <div className="flex h-full w-full">
              {/* Social Widget */}
              <Socials />

              {/* Header */}
              <Header />
            </div>
          </div>

          {/* Projects */}
          <div className="flex-grow">
            <div className="h-3/5">
              {/* Project title */}
              <div className="flex h-1/5 items-end justify-center">
                <h2 className="text-center text-lg text-gray-100">
                  Projects I've worked on
                </h2>
              </div>
              <div className="h-4/5">
                <Projects />
              </div>
            </div>
            {/* Scroll button for bottom of page on screens larger than medium size. */}
            <div className="flex h-2/5 items-end justify-center">
              <div className="group hidden transform-gpu cursor-pointer items-center py-4 md:flex">
                <p className="group-hover:text-deepblue-100 mr-2 h-full w-full text-xs text-gray-200 transition duration-300 ease-in-out group-hover:translate-y-1">
                  See more!
                </p>
                <div className="bg-lighter-gray group-hover:bg-deepblue-500 rounded-full p-3 text-gray-200 transition duration-300 ease-in-out group-hover:translate-y-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4 text-gray-200"
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
  );
}

export default App;
