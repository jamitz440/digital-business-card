"use client";
import { FC } from "react";

type ButtonProps = {
  children: any;
  text: string;
  link: string;
};
export const Button: FC<ButtonProps> = ({ children, text, link }) => {
  return (
    <a
      href={link}
      className="bg-primary text-text text-sm sm:text-base font-bold py-2 px-4 rounded-lg sm:w-1/4 w-1/5 h-auto hover:scale-105 transition-all duration-300 items-center text-center flex justify-center"
    >
      <div className="flex items-center gap-2 justify-center">
        <span className="hidden sm:block">{children}</span>
        {text}
      </div>
    </a>
  );
};
export const EmailButton: FC<ButtonProps> = ({ children, text, link }) => {
  return (
    <a
      href={`mailto:${link}`}
      className="bg-primary text-text text-sm sm:text-base font-bold py-2 px-4 rounded-lg sm:w-1/4 w-1/5 h-auto hover:scale-105 transition-all duration-300 items-center text-center flex justify-center"
    >
      <div className="flex items-center gap-2 justify-center">
        <span className="hidden sm:block">{children}</span>
        {text}
      </div>
    </a>
  );
};
