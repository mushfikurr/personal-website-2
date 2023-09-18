import { useState, useCallback, useEffect, forwardRef } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import Page from "./PageLayout";
import { useDeviceDetection } from "../Hooks";

const Landing = forwardRef((props, ref) => {
  const scrollProjectsIntoView = () => {
    props.aboutRef.current.scrollIntoView();
  };

  const isInView = useInView(ref, { amount: 0.6 });
  const [stars, setStars] = useState([]);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomFloat = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const device = useDeviceDetection();

  const fillStarsEvenly = useCallback(() => {
    if (device === "Mobile") return [];
    const numRows = 7; // Number of rows in the grid
    const numCols = 7; // Number of columns in the grid
    const stepX = window.innerWidth / numCols;
    const stepY = window.innerHeight / numRows;

    /**
     * Grid system which allows a more evenly spaced random generation of stars
     */
    const stars = [];

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const randomX = col * stepX + getRandomFloat(-stepX / 2, stepX / 2);
        const randomY = row * stepY + getRandomFloat(-stepY / 2, stepY / 2);
        const randomSize = getRandomInt(1, 6);
        const randomDuration = getRandomInt(0, 30);
        stars.push({
          x: Math.max(0, Math.min(window.innerWidth - 50, randomX)),
          y: Math.max(0, Math.min(window.innerHeight - 50, randomY)),
          size: randomSize,
          duration: randomDuration,
        });
      }
    }

    return stars;
  }, []);

  /**
   * Generate stars while landing page is in view
   */
  useEffect(() => {
    if (device === "Mobile") return;
    if (isInView) {
      setStars(fillStarsEvenly);
    } else {
      setStars([]);
    }
  }, [isInView, fillStarsEvenly]);

  /**
   * When the page is resized the stars need to be regenerated to fit the boundaries of the new window size.
   */
  useEffect(() => {
    const handleWindowResize = debounce(() => {
      setStars([]);
      setStars(fillStarsEvenly());
    }, 300);

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [fillStarsEvenly]);

  return (
    <Page
      setActivePage={props.setActivePage}
      classNames={"flex min-h-screen px-8 sm:px-16 py-12 font-iAMono"}
      ref={ref}
      title="Home"
    >
      <div className="mt-8 flex flex-grow flex-col items-center justify-center sm:mt-20">
        <div className="relative flex w-full flex-grow flex-col">
          <div id="stars" className="z-0">
            {device !== "Mobile" && (
              <AnimatePresence>
                {stars.map((star, idx) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        duration: (star.duration * 2) / 10,
                        ease: "easeInOut",
                      },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                      transition: {
                        duration: (star.duration * 2) / 30,
                        ease: "easeInOut",
                      },
                    }}
                    key={idx}
                    className=" bg-cod-gray-400 drop-shadow-glow absolute object-cover"
                    style={{
                      right: star.x,
                      top: star.y,
                      height: star.size,
                      width: star.size,
                    }}
                  />
                ))}
              </AnimatePresence>
            )}
          </div>

          <div className="z-10 flex flex-grow flex-col items-center sm:mt-28">
            <div className="flex max-w-prose flex-col gap-4">
              <h1 className="text-cod-gray-50 text-4xl font-bold md:text-6xl">
                I'm{" "}
                <span className="text-deepblue-500 border-deepblue-500">
                  Mushfikur Rahman
                </span>
                .
              </h1>
              <div className="flex flex-col-reverse justify-center gap-4 sm:flex-row">
                <div className="max-w-prose">
                  <p className=" bg-cod-gray-200 text-cod-gray-800 text-md h-fit p-2">
                    A full-stack London-based developer passionate about
                    crafting refined software. Throughout my journey, I enjoy
                    sharing my insights on web development and software-related
                    skills.
                  </p>
                  <p className="bg-cod-gray-200 text-cod-gray-800 h-fit p-2 text-sm">
                    📌 I'm currently looking for full-time work. Interested?{" "}
                    <span className="text-deepblue-500">
                      Let's get in touch.
                    </span>
                  </p>
                </div>

                <div className="border-cod-gray-200 relative flex w-1/3 flex-none flex-col gap-2 border-2">
                  <img
                    src="https://i.imgur.com/1huqS2C.jpg"
                    className="flex-grow object-cover shadow-inner"
                  ></img>
                  <div className="absolute bg-gray-200 px-1 text-xs max-sm:hidden">
                    🌍 Türkiye, Antalya
                  </div>
                </div>
              </div>
            </div>

            {/* <p className="text-cod-gray-50 pb-3 text-center md:text-lg">
              Recent projects I've worked on
            </p> */}
          </div>
          {/* <div className="flex basis-3/4 flex-col items-center">
            <Projects />
          </div> */}
          <div className="mt-8 h-auto">
            <div
              className="group flex transform-gpu cursor-pointer items-center justify-center"
              onClick={() => {
                scrollProjectsIntoView();
              }}
            >
              <p className="group-hover:text-deepblue-300 text-cod-gray-200 mr-2 hidden text-center text-sm transition duration-300 ease-in-out group-hover:translate-y-1 lg:block">
                View my projects
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
