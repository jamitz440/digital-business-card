"use client";

import { Card } from "./Card";

export default function Home() {
  return (
    <div className=" h-screen w-screen flex items-center justify-center bg-text">
      <div className="flex items-center justify-center lg:w-3/5 xl:w-1/2 w-full m-8 md:m-16 ">
        <Card />
      </div>
    </div>
  );
}
