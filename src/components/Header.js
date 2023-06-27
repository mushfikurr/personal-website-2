export default function Header() {
  return (
    <div className="flex-grow">
      <div className="flex justify-center items-end h-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl text-white font-medium">
            Hi, I'm <span className="text-deepblue-500">Mushfikur</span>
          </h1>
          <h3 className="text-lg text-gray-300">
            A graduate passionate about building software.
          </h3>
        </div>
      </div>
    </div>
  );
}
