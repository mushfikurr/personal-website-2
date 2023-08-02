import { forwardRef } from "react";
import { socialsToRender } from "../components/Socials";
import Page from "./PageLayout";
import { SocialIcon } from "../components/Icons";

// TODO:
// Make responsive []

const Contact = forwardRef((props, ref) => {
  return (
    <Page ref={ref} title="Contact" setActivePage={props.setActivePage}>
      <div className="font-iAMono flex min-h-screen flex-col items-center justify-center overflow-auto px-8 pt-8 md:pt-40">
        <div className="text-cod-gray-50 h-8/12 w-10/12 overflow-auto sm:max-w-prose">
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
        </div>
      </div>
    </Page>
  );
});

export default Contact;
