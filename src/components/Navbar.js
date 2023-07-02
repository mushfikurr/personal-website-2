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
    <div className="flex h-16 items-center max-md:justify-center">
      <NowListening />

      <div className="flex h-full items-center space-x-8 text-gray-300">
        {props.pages?.map((page) => (
          <NavbarItem key={page} page={page} activePage={props.activePage} />
        ))}
      </div>
    </div>
  );
}
