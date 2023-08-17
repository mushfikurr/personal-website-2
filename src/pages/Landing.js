import Header from "../components/Header";
import Projects from "../components/Projects";
import { useRef, useState, useEffect, forwardRef } from "react";
import { useInView } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import Page from "./PageLayout";

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

  useEffect(() => {
    if (isInView) {
      for (let i = 0; i < getRandomInt(50, 70); i++) {
        const randomX = getRandomInt(0, ref.current.offsetWidth - 150);
        const randomY = getRandomInt(0, ref.current.offsetHeight - 200);
        const randomSize = getRandomInt(0, 2);
        const randomDuration = getRandomInt(0, 30);
        setStars((prevStars) => [
          ...prevStars,
          {
            x: randomX,
            y: randomY,
            size: randomSize,
            duration: randomDuration,
          },
        ]);
      }
    } else {
      setStars([]);
      console.log("cleared");
    }
  }, [isInView]);

  // useEffect(() => {
  //   console.log(stars);
  // }, [stars]);

  return (
    <Page
      setActivePage={props.setActivePage}
      classNames={"flex min-h-screen px-8 sm:px-16 py-12 font-iAMono"}
      ref={ref}
      title="Home"
    >
      <div className="mt-8 flex flex-grow flex-col sm:mt-20">
        <div className="relative flex flex-grow flex-col items-center justify-center">
          <div id="stars" className="z-0">
            <AnimatePresence>
              {stars.map((star, idx) => (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1.3,
                    transition: {
                      duration: star.duration / 10,
                      ease: "easeInOut",
                    },
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  key={idx}
                  className="glow bg-cod-gray-500 absolute rounded-full object-cover"
                  style={{
                    right: star.x,
                    top: star.y,
                    height: star.size,
                    width: star.size,
                  }}
                />
              ))}
            </AnimatePresence>
          </div>

          <div className="z-50 flex flex-grow flex-col sm:mt-28">
            <div className="flex max-w-prose flex-col gap-4">
              <h1 className="text-cod-gray-50 text-4xl font-bold md:text-6xl">
                I'm{" "}
                <span className="text-deepblue-500 drop-shadow-glow">
                  Mushfikur
                </span>
                .
              </h1>
              <div className="flex flex-col-reverse justify-center gap-4 sm:flex-row">
                <div className="max-w-prose">
                  <p className=" bg-cod-gray-50 text-cod-gray-800 text-md h-fit p-2">
                    A full-stack London-based developer passionate about
                    crafting refined software. Throughout my journey, I enjoy
                    sharing my insights on web development and software-related
                    skills.
                  </p>
                  <p className="bg-cod-gray-50 text-cod-gray-800 h-fit p-2 text-sm">
                    Currently looking for a full-time position. Interested?{" "}
                    <span className="text-deepblue-500">
                      Let's get in touch.
                    </span>
                  </p>
                </div>

                <div className="border-cod-gray-100 flex w-1/3 flex-none flex-col items-center gap-2 border-2">
                  <img
                    src="https://i.imgur.com/1huqS2C.jpg"
                    className="object-cover shadow-inner"
                  ></img>
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
