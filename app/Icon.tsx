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
      className="hover:scale-110 p-2 bg-text hover:shadow-md text-background m-4  mt-8 rounded-lg transition-all duration-300 ease-in-out"
      data-tooltip-id={text}
      data-tooltip-content={text}
    >
      <Tooltip id={text} />
      {children}
    </div>
  );
};
