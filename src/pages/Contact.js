import { forwardRef } from "react";
import { socialsToRender } from "../components/Socials";
import Page from "./PageLayout";
import { SocialIcon } from "../components/Icons";

const Contact = forwardRef((props, ref) => {
  return (
    <Page
      ref={ref}
      title="Contact"
      classNames={"flex min-h-screen px-8 sm:px-16 py-12 font-iAMono"}
      setActivePage={props.setActivePage}
    >
      <div className={`mt-8 flex flex-grow flex-col items-center md:mt-20`}>
        <div className="flex max-w-prose flex-grow flex-col md:mt-20">
          <div className="max-w-fit">
            <p className="text-deepblue-500 mb-1 text-3xl font-bold lg:text-3xl">
              Contact.
            </p>
            <span className="flex gap-2 text-gray-200 md:hidden">
              {socialsToRender.map((socialName) => (
                <SocialIcon
                  classNames={"h-5 w-5"}
                  key={socialName}
                  socialName={socialName}
                />
              ))}
            </span>
          </div>

          <div className="text-deepblue-500 text-2xl">
            <label className="text-cod-gray-200 w-full pl-1 text-sm md:text-lg">
              Name
            </label>
            <input className="bg-cod-gray-900  hover:bg-cod-gray-800 focus:bg-cod-gray-800 mb-2 mt-1 w-full rounded-md p-3 transition duration-300 ease-in-out focus:outline-none"></input>
            <label className="text-cod-gray-200 pl-1 text-sm md:text-lg">
              Email
            </label>
            <input
              type="email"
              className="bg-cod-gray-900  hover:bg-cod-gray-800 focus:bg-cod-gray-800 mb-2 mt-1 w-full rounded-md p-3 transition duration-300 ease-in-out focus:outline-none"
            ></input>
            <label className="text-cod-gray-200 pl-1 text-sm md:text-lg">
              Message
            </label>
            <textarea
              rows={4}
              className="bg-cod-gray-900 hover:bg-cod-gray-800 focus:bg-cod-gray-800 mb-1 mt-1 w-full rounded-md p-3 text-sm transition duration-300 ease-in-out focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-deepblue-500 hover:bg-deepblue-600 text-cod-gray-100 mb-2 mt-2 rounded-md px-3 py-3 text-sm transition duration-500 ease-in-out"
            >
              Submit
            </button>
          </div>
          <p className="text-cod-gray-50 mt-4 text-sm">
            Alternatively, send me an email at{" "}
            <span
              onClick={(event) => {
                window.open("mailto:mushfikur0@gmail.com", "mail");
                event.preventDefault();
              }}
              className="text-deepblue-300 hover:text-deepblue-500 cursor-pointer transition-colors duration-300 ease-in-out"
            >
              mushfikur0@gmail.com
            </span>
            .
          </p>
        </div>

        {/* <div className="text-cod-gray-50 h-8/12 w-10/12 overflow-auto sm:max-w-prose">
          <div className="mb-4">
            <p className="text-deepblue-500 mb-1 text-xl font-bold md:text-3xl">
              Contact.
            </p>
            <div className="flex space-x-3 md:hidden">
              {socialsToRender.map((social) => {
                return (
                  <SocialIcon
                    classNames={"h-5 w-5"}
                    key={social}
                    socialName={social}
                  />
                );
              })}
            </div>
          </div>

          <label className="text-cod-gray-200 pl-1 text-sm md:text-lg">
            Name
          </label>
          <input className="bg-cod-gray-900  hover:bg-cod-gray-800 focus:bg-cod-gray-800 mb-2 mt-1 w-full rounded-md p-3 transition duration-300 ease-in-out focus:outline-none"></input>
          <label className="text-cod-gray-200 pl-1 text-sm md:text-lg">
            Email
          </label>
          <input
            type="email"
            className="bg-cod-gray-900  hover:bg-cod-gray-800 focus:bg-cod-gray-800 mb-2 mt-1 w-full rounded-md p-3 transition duration-300 ease-in-out focus:outline-none"
          ></input>
          <label className="text-cod-gray-200 pl-1 text-sm md:text-lg">
            Message
          </label>
          <textarea
            rows={4}
            className="bg-cod-gray-900 hover:bg-cod-gray-800 focus:bg-cod-gray-800 mb-1 mt-1  w-full rounded-md p-3 transition duration-300 ease-in-out focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-deepblue-500 hover:bg-deepblue-600 text-cod-gray-100 mb-2 mt-2 rounded-md px-3 py-3 text-sm transition duration-500 ease-in-out"
          >
            Submit
          </button>
          <p className="mt-4 text-sm">
            Alternatively, send me an email at{" "}
            <span
              onClick={(event) => {
                window.open("mailto:mushfikur0@gmail.com", "mail");
                event.preventDefault();
              }}
              className="text-deepblue-300 hover:text-deepblue-500 cursor-pointer transition-colors duration-300 ease-in-out"
            >
              mushfikur0@gmail.com
            </span>{" "}
          </p>
        </div> */}
      </div>
    </Page>
  );
});

export default Contact;
