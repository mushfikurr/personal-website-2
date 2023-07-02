function Project(props) {
  return (
    <div className="bg-lighter-gray rounded-xl py-4 px-6 text-sm transition transition-all ease-in-out hover:-translate-y-1 hover:drop-shadow-md duration-300">
      <div className="flex flex-col h-full w-full mb-4">
        <div className="flex-grow">
          <p className="font-medium ">{props.title || "project-title"}</p>
          <p className="text-xs text-gray-400 max-w-prose">
            {props.description ||
              "Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum \
            sit dolor amet."}
          </p>
        </div>
        <div className="flex justify-end align-end w-full">
          <div className="flex-grow"></div>
          <div>
            <button className="transition-colors text-xs bg-lighter-gray hover:bg-deepblue-500 rounded-md px-2 py-2">
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="h-full w-full text-gray-100 py-4 px-16">
      <div className="grid lg:grid-cols-3 gap-8">
        {["Hello", "Hi", "Hello"].map((_) => (
          <Project />
        ))}
      </div>
    </div>
  );
}
