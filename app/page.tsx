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

export default function Home() {
  return (
    <div className=" h-screen w-screen flex items-center justify-center bg-text">
      <div className="flex items-center justify-center lg:w-3/5 xl:w-1/2 w-full m-8 md:m-16 ">
        <Card />
      </div>
    </div>
  );
}

const Card = () => {
  return (
    <>
      <div className="relative  rounded-2xl  bg-background shadow-lg dark:shadow-accent-100 dark:shadow-md ">
        <div className="max-w-[1200px]">
          <div className=" col-span-1 absolute w-48 -top-24 left-1/2 -translate-x-[96px]">
            <ImageCard />
          </div>
          <CardDetails />
          <div className="flex justify-around flex-wrap mt-4">
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
              <FaLinkedin />
            </Button>
          </div>
          <div className="">
            <InfoBox />
          </div>
          <div className="text-xl flex justify-around items-center mt-4">
            <Icon text="Python">
              <FaPython className="text-3xl " />
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
      className="bg-primary text-text text-sm sm:text-base font-bold py-2 px-4 rounded-lg sm:w-1/4 w-1/5 h-auto hover:scale-105 transition-all duration-300 items-center text-center flex justify-center"
    >
      <div className="flex items-center gap-2 justify-center">
        <span className="hidden sm:block">{children}</span>
        {text}
      </div>
    </a>
  );
};

const EmailButton: FC<ButtonProps> = ({ children, text, link }) => {
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

const InfoBox = () => {
  return (
    <div className="md:mx-12 md:my-8 mx-8 my-4">
      <h1 className="font-bold text-lg flex-wrap text-text-900">About</h1>
      <div className="flex-wrap flex h-[150px] sm:h-[200px] max-w-3xl md:max-w-6xl text-text ">
        <p className="overflow-auto text-xs sm:text-base md:text-lg">
          I am an A Tech (Av) by trade with a passion for coding. I got into web
          development because I love the flexibility it offers – there&apos;s
          always more than one way to solve a problem or create something cool.
          My experience includes developing engineering programs for aircraft and some sideprojects in django and react.  I tackle challenges head-on, believing there&apos;s a solution
          to every problem. When I&apos;m not coding, I&apos;m usually gaming or
          experimenting with my 3D printer.
        </p>
      </div>
    </div>
  );
};

const ImageCard = () => {
  return (
    <div className=" m-4 rounded-2xl overflow-hidden border-4 border-text">
      <Image
        src={image.src}
        alt="James Fitzsimons"
        width={500}
        height={500}
        style={{
          objectFit: "contain",
          objectPosition: "center",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};
