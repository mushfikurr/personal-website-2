import NowListening from "./NowPlaying";

function NavbarItem(props) {
  const travelToPage = () => {
    props.pageRef.current.scrollIntoView();
  };

  if (props.activePage === props.title) {
    return (
      <span className="text-md text-l text-deepblue-500 before:bg-deepblue-500 relative cursor-pointer font-semibold before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100">
        {props.title}
      </span>
    );
  } else {
    return (
      <span
        onClick={() => {
          travelToPage();
        }}
        className="text-md md:text-l hover:text-deepblue-200 before:bg-deepblue-500 relative cursor-pointer transition-colors duration-300 before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 "
      >
        {props.title}
      </span>
    );
  }
}

export default function Navbar(props) {
  return (
    <div className="font-iAMono bg-cod-gray-950 fixed z-50 mx-4 my-2 h-20 w-[calc(100vw-(theme(spacing.4)*2))] bg-opacity-90 backdrop-blur-sm sm:mx-24 sm:my-12 sm:w-[calc(100vw-(theme(spacing.24)*2))]">
      <div className="flex h-full w-full items-center max-md:justify-center">
        <NowListening />

        <div className="text-cod-gray-300 flex h-full items-center space-x-8">
          {props.pages?.map((page) => (
            <NavbarItem
              key={page.title}
              pageRef={page.ref}
              title={page.title}
              activePage={props.activePage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
