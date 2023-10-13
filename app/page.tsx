"use client";
import Image from "next/image";
import image from "../public/IMG_1506.jpg";
import { FC } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaReact,
  FaGithub,
  FaPython,
} from "react-icons/fa6";

import { TbBrandDjango, TbBrandTypescript } from "react-icons/tb";
import { Icon } from "./Icon";
import { CardDetails } from "./CardDetails";

import Switcher from "./Switcher";

export default function Home() {
  return (
    <div className="bg-zinc-200 h-screen dark:bg-zinc-700">
      <div className="flex items-center justify-center">
        <div className="mt-2">
          <Switcher />
        </div>
      </div>
      <div className=" h-auto w-screen flex items-center justify-center bg-zinc-200 dark:bg-zinc-700 ">
        <div className=" m-6 md:m-20  flex items-center justify-center">
          <Card />
        </div>
      </div>
    </div>
  );
}

const Card = () => {
  return (
    <>
      <div className=" rounded-2xl w-full lg:w-3/5 h-auto overflow-hidden bg-gray-300 dark:bg-zinc-800 shadow-xl ">
        <Image
          src={image.src}
          alt="James Fitzsimons"
          width={500}
          height={500}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        <CardDetails />
        <div className="flex justify-around mt-6">
          <EmailButton text="Email" link="jamster44085@gmail.com">
            <FaEnvelope />
          </EmailButton>
          <Button text="Github" link="https://github.com/jamitz440">
            <FaGithub />
          </Button>
          <Button
            text="LinkedIn"
            link="https://www.linkedin.com/in/james-fitzsimons-1a0658251/"
          >
            <FaLinkedin className="dark:text-blue-500 text-sky-300" />
          </Button>
        </div>
        <div className="">
          <InfoBox />
        </div>
        <div className="text-xl flex bg-gray-200 dark:bg-zinc-900 justify-around items-center ">
          <Icon text="Python">
            <FaPython className="text-3xl" />
          </Icon>
          <Icon text="Django">
            <TbBrandDjango className="text-3xl" />
          </Icon>
          <Icon text="React">
            <FaReact className="text-3xl" />
          </Icon>
          <Icon text="Typescript">
            <TbBrandTypescript className="text-3xl " />
          </Icon>
        </div>
      </div>
    </>
  );
};

type ButtonProps = {
  children: any;
  text: string;
  link: string;
};

const Button: FC<ButtonProps> = ({ children, text, link }) => {
  return (
    <a
      href={link}
      className="bg-zinc-800 dark:bg-slate-200 text-slate-200 dark:text-slate-800 font-bold py-2 px-2 rounded-lg w-1/4 h-auto hover:scale-105 transition-all duration-300"
    >
      <div className="flex items-center gap-2 justify-center">
        {children}
        {text}
      </div>
    </a>
  );
};

const EmailButton: FC<ButtonProps> = ({ children, text, link }) => {
  return (
    <a
      href={`mailto:${link}`}
      className="bg-zinc-800 dark:bg-slate-200 text-slate-200 dark:text-slate-800 font-bold py-2 px-4 rounded-lg w-1/4 h-auto hover:scale-105 transition-all duration-300"
    >
      <div className="flex items-center gap-2 justify-center">
        {children}
        {text}
      </div>
    </a>
  );
};

const InfoBox = () => {
  return (
    <div className="md:mx-12 md:my-8 mx-8 my-8">
      <div className="font-bold text-lg flex-wrap dark:text-white text-gray-800">
        About
      </div>
      <div className="flex-wrap flex h-auto max-w-3xl md:max-w-6xl dark:text-white text-gray-800">
        I am an A Tech (Av) by trade with a passion for coding. I got into web
        development because I love the flexibility it offers – there's always
        more than one way to solve a problem or create something cool. My
        experience includes developing engineering programs for aircraft, even
        though I haven't put any of that work out in the public domain. I tackle
        challenges head-on, believing there's a solution to every problem. When
        I'm not coding, I'm usually gaming or experimenting with my 3D printer.
      </div>
    </div>
  );
};
