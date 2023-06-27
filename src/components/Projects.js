function Project() {
  return (
    <div className="bg-lighter-gray rounded-xl py-4 px-6 text-sm h-32">
      Hello
    </div>
  );
}

export default function Projects() {
  return (
    <div className="flex flex-col justify-center h-full w-full text-gray-100 px-14">
      <div className="grid grid-cols-3 gap-8">
        {["Hello", "Hi", "Hello"].map((_) => (
          <Project />
        ))}
      </div>
    </div>
  );
}
