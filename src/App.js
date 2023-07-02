import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Projects from "./components/Projects";

const pages = ["Home", "Projects", "Contact"];

function App() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <div className="w-screen h-screen bg-darker-gray py-2 px-4 sm:py-12 sm:px-24 font-iAMono">
      <div className="flex flex-col h-full">
        {/* Navbar */}
        <Navbar
          pages={pages}
          activePage={activePage}
          setActivePage={setActivePage}
        />

        <div className="flex-grow flex flex-col">
          <div className="md:h-2/5">
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
              <div className="flex items-end justify-center h-1/5">
                <h2 className="text-gray-100 text-lg text-center">
                  Projects I've worked on
                </h2>
              </div>
              <div className="h-4/5">
                <Projects />
              </div>
            </div>
            <div className="flex items-end justify-center h-2/5">
              <div className="hidden lg:block text-gray-200 bg-lighter-gray hover:bg-deepblue-500 transition ease-in-out hover:translate-y-1 cursor-pointer  duration-300 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-200"
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
  );
}

export default App;
