export default function Header() {
  return (
    <div className="mt-20 flex-grow lg:mt-0">
      <div className="flex h-full items-end justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-2 text-center text-3xl font-medium text-white lg:mt-0">
            Hi, I'm <span className="text-deepblue-500">ABCDEFGH</span>
          </h1>
          <h3 className="text-md text-center text-gray-300">
            Anim aliqua pariatur enim incididunt nisi et proident laborum.
          </h3>
        </div>
      </div>
    </div>
  );
}
