import { Popover } from "react-tiny-popover";
import { Github, Twitter, Discord, Icon } from "./Icons";
import { useState } from "react";

export default function Socials() {
  const socialsToRender = ["github", "twitter", "discord"];

  return (
    <div className="bg-lighter-gray invisible absolute mt-4 flex w-16 max-w-md justify-center rounded-full py-6 text-white lg:visible">
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
