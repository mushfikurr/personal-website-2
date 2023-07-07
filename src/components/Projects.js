import { PopoverIcon } from "./Icons";

const allProjects = [
  {
    title: "joiner",
    description:
      "An online video collaboration application allowing users to cut, merge, and compile video together synchronously.",
    languages: ["javascript", "html", "css"],
    techstack: ["react", "electron", "tailwind", "nodejs", "socketio"],
  },
  {
    title: "govee-controller",
    description: "A React web app for controlling Govee smart devices!",
    languages: ["javascript", "html", "css"],
    techstack: ["react", "material"],
  },
  {},
];

function Project(props) {
  const renderIcon = (socialName) => {
    return (
      <span className="flex-initial">
        <PopoverIcon
          socialName={socialName}
          preferredPositions={["bottom", "top", "right", "left"]}
          classNames={
            "h-4 w-4 cursor-pointer text-gray-200 transition-colors duration-300 ease-in-out hover:text-deepblue-500"
          }
        />
      </span>
    );
  };

  return (
    <div className="bg-lighter-gray transform-gpu rounded-xl px-6 py-4 text-sm transition duration-300 ease-in-out hover:drop-shadow-xl">
      <div className="mb-2 flex h-full w-full flex-col">
        <div className="flex-grow">
          <p className="font-medium ">{props.title || "project-title"}</p>
          <p className="max-w-prose text-xs text-gray-400">
            {props.description ||
              "Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum \
            sit dolor amet."}
          </p>
        </div>
        <div className="align-end flex justify-end">
          <div className="flex flex-grow space-x-4">
            {/* Languages */}
            <div className="flex h-full items-center space-x-1 overflow-x-auto">
              {props.languages?.map((language) => {
                return renderIcon(language);
              })}
            </div>
            {/* Tech stack (Framworks, etc) */}
            <div className="flex h-full items-center space-x-1 overflow-x-auto">
              {props.techstack?.map((techstack) => {
                return renderIcon(techstack);
              })}
            </div>
          </div>
          <div>
            <button className="bg-darkgray hover:bg-deepblue-500 h-full rounded-md px-3 py-2 text-xs transition-colors">
              <span className="flex space-x-1 text-gray-200">
                {/* {openIcon()} */}
                <p>Open</p>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="h-full w-full px-20 py-4 text-gray-100">
      <div className="grid gap-8 lg:grid-cols-3">
        {allProjects.map((project) => (
          <Project {...project} />
        ))}
      </div>
    </div>
  );
}
