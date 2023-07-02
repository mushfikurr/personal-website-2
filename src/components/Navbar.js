import NowListening from "./NowPlaying";

function NavbarItem(props) {
  if (props.activePage === props.page) {
    return (
      <a
        href="#"
        className="text-md text-l text-deepblue-500 font-semibold hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-deepblue-500 before:absolute before:left-0 before:-bottom-2"
      >
        {props.page}
      </a>
    );
  } else {
    return (
      <a
        href="#"
        className="text-md md:text-l hover:text-deepblue-200 transition-colors duration-300 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-deepblue-500 before:absolute before:left-0 before:-bottom-2 "
      >
        {props.page}
      </a>
    );
  }
}

export default function Navbar(props) {
  return (
    <div className="flex h-16 max-md:justify-center items-center">
      <NowListening />

      <div className="flex space-x-8 h-full items-center text-gray-300">
        {props.pages?.map((page) => (
          <NavbarItem key={page} page={page} activePage={props.activePage} />
        ))}
      </div>
    </div>
  );
}
