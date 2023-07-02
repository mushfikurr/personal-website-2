export default function Header() {
  return (
    <div className="flex-grow">
      <div className="flex h-full items-end justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-2 text-center text-3xl font-medium text-white lg:mt-0">
            Hi, I'm <span className="text-deepblue-500">Mushfikur</span>
          </h1>
          <h3 className="text-md text-center text-gray-300">
            A graduate passionate about building software.
          </h3>
        </div>
      </div>
    </div>
  );
}
