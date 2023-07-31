import { forwardRef } from "react";
import Page from "./PageLayout";

const About = forwardRef((props, ref) => {
  return (
    <Page ref={ref} title="About" setActivePage={props.setActivePage}>
      <div className="font-iAMono h-screen px-4 py-2 sm:px-24 sm:py-12">
        <div className="text-cod-gray-50 flex min-h-full min-w-full items-center justify-center px-8 py-24 lg:px-44">
          <div className="group overflow-auto">
            <p className="text-deepblue-500 mb-1 text-sm font-bold transition-colors duration-300 ease-in-out md:text-lg">
              About me
            </p>
            <p className="font-iAWriterQuattro mb-3 text-sm italic lg:text-2xl">
              In 2011, my family's purchase of our first computer sparked a
              fascination with technology in my young mind.
            </p>
            <p className="text-cod-gray-200 mb-3 text-xs lg:text-lg">
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
            <p className="text-cod-gray-200 mb-3 text-xs lg:text-lg">
              Driven by this newfound interest, I chose Computer Science at
              A-Level and continued my studies at degree level, achieving a
              First-class honours. Throughout my academic journey, I delved
              deeper into development, with a particular fondness for web
              development. I completed courses like{" "}
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
      </div>
    </Page>
  );
});

export default About;
