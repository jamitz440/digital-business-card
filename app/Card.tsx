"use client";
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
import { InfoBox } from "./InfoBox";
import { ImageCard } from "./ImageCard";
import { EmailButton, Button } from "./Buttons";

export const Card = () => {
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
