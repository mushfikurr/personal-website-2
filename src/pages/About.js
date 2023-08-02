import { forwardRef } from "react";
import Page from "./PageLayout";
import { Book } from "../components/Icons";

const About = forwardRef((props, ref) => {
  return (
    <Page ref={ref} title="About" setActivePage={props.setActivePage}>
      <div className="font-iAMono flex flex-col items-center overflow-auto px-8 pt-20 md:pt-32 lg:pt-40">
        <div className="h-8/12 flex w-10/12 flex-col justify-center overflow-auto sm:max-w-prose">
          <p className="text-deepblue-500 mb-1 text-xl font-bold lg:text-3xl">
            About.
          </p>

          <p className="font-iAWriterQuattro text-cod-gray-50 mb-3 text-sm italic lg:text-xl">
            In 2011, my family's purchase of our first computer sparked a
            fascination with technology in my young mind.
          </p>
          <p className="text-cod-gray-200 mb-2 text-xs lg:text-lg">
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
          <p className="text-cod-gray-200 mb-2 text-xs lg:text-lg">
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
          <p className="text-cod-gray-200 text-xs lg:text-lg">
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
