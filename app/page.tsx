"use client";
import Image from "next/image";
import image from "../public/IMG_1506.jpg";
import { FC } from "react";
import { FaEnvelope, FaLinkedin, FaReact, FaPython } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";

import { TbBrandDjango, TbBrandTypescript } from "react-icons/tb";

export default function Home() {
  return (
    <div className=" h-screen w-screen flex items-center justify-center bg-zinc-700 ">
      <div className=" m-20  flex items-center justify-center">
        <Card />
      </div>
    </div>
  );
}

const Card = () => {
  return (
    <div className="rounded-2xl w-2/5 h-auto overflow-hidden bg-zinc-800 shadow-xl ">
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
      <div className="text-xl flex bg-zinc-900 justify-around items-center">
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
          <TbBrandTypescript className="text-3xl" />
        </Icon>
      </div>
    </div>
  );
};

type IconProps = {
  children: any;
  text: string;
};

const Icon: FC<IconProps> = ({ children, text }) => {
  return (
    <div
      className="p-2 bg-zinc-500 m-4 rounded-lg text-zinc-800"
      data-tooltip-id={text}
      data-tooltip-content={text}
    >
      <Tooltip id={text} />
      {children}
    </div>
  );
};

const CardDetails = () => {
  return (
    <div className="text-center mt-4 ">
      <div className="font-bold text-2xl">James Fitzsimons</div>
      <div className="text-xl font-thin text-orange-400 ">Developer</div>
    </div>
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
      className=" bg-sky-600 text-white font-bold py-2 px-2 rounded-lg w-1/3 h-auto"
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
      className="bg-slate-200 font-bold py-2 px-4 rounded-lg text-slate-800 w-1/3 h-auto"
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
    <div className="mx-12 my-8">
      <div className="font-bold text-lg">About</div>
      <div>
        I am an A Tech (Av) by trade with a passion for coding. I love to learn
        new things and have been throwing myself into Django and React.
      </div>
    </div>
  );
};
