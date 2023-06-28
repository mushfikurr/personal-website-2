import { Popover } from "react-tiny-popover";
import { Github, Twitter, Discord, Icon } from "./Icons";
import { useState } from "react";

export default function Socials() {
  const socialsToRender = ["github", "twitter", "discord"];

  return (
    <div className="invisible max-w-md lg:visible flex justify-center w-16 py-6 text-white rounded-full absolute mt-4 bg-lighter-gray">
      <ul className="flex flex-col space-y-4 items-center h-full w-10">
        {socialsToRender.map((social) => {
          return (
            <li
              key={social}
              className="hover:text-deepblue-500 hover:cursor-pointer transition-colors duration-300"
            >
              <Icon socialName={social}></Icon>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
