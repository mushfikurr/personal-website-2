function Project(props) {
  return (
    <div className="bg-lighter-gray transform-gpu rounded-xl px-6 py-4 text-sm transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:drop-shadow-lg">
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
          <div className="flex-grow"></div>
          <div>
            <button className="bg-lighter-gray hover:bg-deepblue-500 rounded-md px-2 py-2 text-xs transition-colors">
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
    <div className="h-full w-full px-16 py-4 text-gray-100">
      <div className="grid gap-8 lg:grid-cols-3">
        {["Hello", "Hi", "Hello"].map((_) => (
          <Project />
        ))}
      </div>
    </div>
  );
}
