import { Icon } from "./Icons";

export default function Socials() {
  const socialsToRender = ["github", "twitter", "linkedin", "discord"];

  return (
    <div className="bg-cod-gray-900 invisible fixed z-50 flex w-16 max-w-md justify-center rounded-full bg-opacity-90 py-6 text-white backdrop-blur-lg sm:mx-24 sm:my-36 lg:visible">
      <ul className="flex h-full w-10 flex-col items-center space-y-4">
        {socialsToRender.map((social) => {
          return (
            <li
              key={social}
              className="hover:text-deepblue-500 transition-colors duration-300 hover:cursor-pointer"
            >
              <Icon socialName={social}></Icon>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
