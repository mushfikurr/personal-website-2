import NowListening from "./NowPlaying";

function NavbarItem(props) {
  if (props.activePage === props.page) {
    return (
      <a
        href="#"
        className="text-md text-l text-deepblue-500 before:bg-deepblue-500 relative font-semibold before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100"
      >
        {props.page}
      </a>
    );
  } else {
    return (
      <a
        href="#"
        className="text-md md:text-l hover:text-deepblue-200 before:bg-deepblue-500 relative transition-colors duration-300 before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 "
      >
        {props.page}
      </a>
    );
  }
}

export default function Navbar(props) {
  return (
    <div className="font-iAMono bg-darker-gray fixed z-50 mx-4 my-2 h-20 w-[calc(100vw-(theme(spacing.24)*2))] bg-opacity-90 backdrop-blur-sm sm:mx-24 sm:my-12">
      <div className="flex h-full w-full items-center max-md:justify-center">
        <NowListening />

        <div className="flex h-full items-center space-x-8 text-gray-300">
          {props.pages?.map((page) => (
            <NavbarItem key={page} page={page} activePage={props.activePage} />
          ))}
        </div>
      </div>
    </div>
  );
}
