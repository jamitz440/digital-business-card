"use client";
import Image from "next/image";
import image from "../public/IMG_1506.jpg";

export const ImageCard = () => {
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
