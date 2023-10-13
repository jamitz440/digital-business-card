"use client";
import { FC } from "react";
import { Tooltip } from "react-tooltip";

type IconProps = {
  children: any;
  text: string;
};
export const Icon: FC<IconProps> = ({ children, text }) => {
  return (
    <div
      className="hover:scale-110 p-2 dark:bg-zinc-500 bg-zinc-300 hover:shadow-md text-zinc-800 m-4 rounded-lg dark:text-zinc-800 transition-all duration-300 ease-in-out"
      data-tooltip-id={text}
      data-tooltip-content={text}
    >
      <Tooltip id={text} />
      {children}
    </div>
  );
};
