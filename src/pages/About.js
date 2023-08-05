import { forwardRef } from "react";
import Page from "./PageLayout";
import { Book } from "../components/Icons";

const About = forwardRef((props, ref) => {
  const heightValueSmPlus =
    "calc(100vw-(theme(spacing.20) + theme(spacing.12)))";
  const heightValue = "calc(100vw-(theme(spacing.20)))";
  return (
    <Page
      ref={ref}
      title="About"
      classNames={
        "min-w-screen font-iAMono flex min-h-screen px-8 sm:px-16 py-12"
      }
      setActivePage={props.setActivePage}
    >
      <div className={`mt-8 flex flex-grow flex-col items-center md:mt-20`}>
        <div className="flex max-w-prose flex-grow flex-col justify-center">
          <p className="text-deepblue-500 mb-2 text-3xl font-bold lg:text-3xl">
            About.
          </p>

          <p className="font-iAWriterQuattro text-cod-gray-50 text-md mb-2 italic lg:text-xl">
            In 2011, my family's purchase of our first computer sparked a
            fascination with technology in my young mind.
          </p>
          <p className="text-cod-gray-200 text-md lg:text-md mb-1">
            My web journey commenced then, as I spent countless hours browsing
            and gradually nurturing my curiosity about how it all worked. My
            first foray into programming began with creating modifications for
            the popular video game,{" "}
            <span className="text-deepblue-300 hover:text-deepblue-500 cursor-pointer transition-colors duration-300 ease-in-out">
              Minecraft
            </span>
            . Although I lacked a complete understanding of the fundamentals,
            the satisfaction of seeing others interact with something I had
            programmed fueled my passion.
          </p>
          <p className="text-cod-gray-200 text-md lg:text-md mb-1">
            Driven by this newfound interest, I chose Computer Science at
            A-Level and continued my studies at degree level, achieving a
            First-class honours. Throughout my academic journey, I delved deeper
            into development, with a particular fondness for web development. I
            completed courses like{" "}
            <span className="text-deepblue-300 hover:text-deepblue-500 cursor-pointer transition-colors duration-300 ease-in-out">
              Fullstack Open
            </span>
            , immersed myself in documentation, and crafted various personal
            projects to solidify my learning.
          </p>
          <p className="text-cod-gray-200 text-md lg:text-md">
            Now I aim to gain professional experience to put my skills into
            practice, helping companies craft great experiences. If you are
            interested in joining this journey with me,{" "}
            <span className="text-deepblue-300 hover:text-deepblue-500 cursor-pointer transition-colors duration-300 ease-in-out">
              let's get in touch
            </span>
            !
          </p>
        </div>
      </div>
    </Page>
  );
});

export default About;
