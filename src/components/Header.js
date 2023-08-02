export default function Header() {
  return (
    <div className="flex flex-grow ">
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center justify-center px-8 sm:px-48">
          <h1 className="text-cod-gray-100 text-center text-2xl font-bold md:text-3xl">
            Hi, I'm <span className="text-deepblue-500">Mushfikur</span>.
          </h1>
          <h3 className="text-cod-gray-300 flex-grow text-center text-sm md:text-lg">
            A London based web developer looking to make a change 👀
          </h3>
        </div>
      </div>
    </div>
  );
}
