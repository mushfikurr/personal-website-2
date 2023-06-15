import { Popover } from "react-tiny-popover";
import { Github, Twitter, Discord, Icon } from "./Icons";
import { useState } from "react";

export default function Socials() {
  return (
    <div className="flex justify-center w-16 py-6 text-white rounded-full absolute mt-4 bg-lighter-gray">
      <ul className="flex flex-col space-y-4 items-center h-full w-10">
        <li className="hover:text-deepblue-500 hover:cursor-pointer">
          <Icon socialName="github" />
        </li>

        <li className="hover:text-deepblue-500 hover:cursor-pointer">
          <Icon socialName="twitter" />
        </li>
        <li className="hover:text-deepblue-500 hover:cursor-pointer">
          <Icon socialName="discord" />
        </li>
      </ul>
    </div>
  );
}
