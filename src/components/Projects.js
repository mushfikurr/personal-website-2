import { Icon } from "./Icons";

const allProjects = [
  {
    title: "joiner",
    description:
      "An online video collaboration platform allowing users to cut, merge, and compile video together synchronously.",
    languages: ["javascript", "html", "css"],
    stack: ["react", "electron", "tailwind", "nodejs", "socketio"],
  },
  {
    title: "joiner",
    description:
      "An online video collaboration platform allowing users to cut, merge, and compile video together synchronously.",
    languages: ["javascript", "html", "css"],
    stack: ["react", "electron", "tailwind", "nodejs", "socketio"],
  },
  {},
];

function Project(props) {
  const renderIcon = (socialName) => {
    return (
      <span className="">
        <Icon
          socialName={socialName}
          classNames={
            "h-4 w-4 cursor-pointer text-gray-200 transition-colors duration-300 ease-in-out hover:text-deepblue-500"
          }
        />
      </span>
    );
  };

  return (
    <div className="transform-gpu rounded-xl bg-lighter-gray px-6 py-4 text-sm transition-shadow duration-300 ease-in-out hover:drop-shadow-xl">
      <div className="mb-2 flex h-full w-full flex-col">
        <div className="flex-grow">
          <p className="font-medium ">{props.title || "project-title"}</p>
          <p className="max-w-prose text-xs text-gray-400">
            {props.description ||
              "Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum \
            sit dolor amet."}
          </p>
        </div>
        <div className="align-end flex w-full justify-end">
          <div className="flex flex-grow space-x-4">
            {/* Languages */}
            <div className="flex h-full items-center space-x-1">
              {props.languages?.map((language) => {
                return renderIcon(language);
              })}
            </div>
            {/* Tech stack (Framworks, etc) */}
            <div className="flex h-full items-center space-x-1">
              {props.stack?.map((stack) => {
                return renderIcon(stack);
              })}
            </div>
          </div>
          <div>
            <button className="bg-darkgray h-full rounded-md px-3 py-2 text-xs transition-colors hover:bg-deepblue-500">
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
    <div className="h-full w-full px-16 py-4 text-gray-100">
      <div className="grid gap-8 lg:grid-cols-3">
        {allProjects.map((project) => (
          <Project {...project} />
        ))}
      </div>
    </div>
  );
}
