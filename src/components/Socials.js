import { Github, Twitter, Discord } from "./Icons";

export default function Socials() {
  return (
    <div className="flex justify-center w-16 py-6 text-white rounded-full absolute mt-4 bg-lighter-gray">
      <ul className="flex flex-col space-y-4 items-center h-full w-10">
        <li>
          <Github />
        </li>
        <li className="">
          <Twitter />
        </li>
        <li className="">
          <Discord />
        </li>
      </ul>
    </div>
  );
}
