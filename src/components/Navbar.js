import NowListening from "./NowPlaying";

function NavbarItem() {

}

export default function Navbar(props) {
  return (
    <div className="flex h-16 items-center">
      <NowListening />

      <div className="flex space-x-8 h-full items-center text-gray-300">
        {props.pages?.map(() => <NavbarItem />)}
        <p className="text-l font-semibold">Home</p>
        <p className="text-l">Projects</p>
        <p className="text-l">Contact</p>
      </div>
    </div>
  );
}
