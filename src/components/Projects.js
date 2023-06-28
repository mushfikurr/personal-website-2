function Project() {
  return (
    <div className="bg-lighter-gray rounded-xl py-4 px-6 text-sm h-32">
      Hello
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
