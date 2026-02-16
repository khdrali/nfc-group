"use client";
import Image from "next/image";
import { useState } from "react";

interface ProductProps {
  thumbnail: string;
  alt?: string;
  color?: string[];
  name: string;
  hoverImg: string;
}

const CardProduct = ({
  thumbnail,
  alt,
  color,
  hoverImg,
  name,
}: ProductProps) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="bg-[#FDF4E2] pb-4 flex flex-col items-start px-6 gap-1 rounded-2xl w-full h-96">
      {/* IMAGE WRAPPER */}
      <div className="w-full relative h-75 overflow-hidden group cursor-pointer">
        {/* Default Image */}
        <Image
          src={thumbnail}
          alt={alt || "Sepatu"}
          fill
          className="object-cover transition-opacity duration-1000 ease-in-out group-hover:opacity-0"
        />

        {/* Hover Image */}
        <Image
          src={hoverImg}
          alt={alt || "Sepatu hover"}
          fill
          className="object-cover opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100"
        />
      </div>
      <p className="text-[#292929] font-semibold text-2xl">{name}</p>
      <div className="flex items-center mt-4 gap-1">
        {color &&
          color.map((v, key) => (
            <div
              key={key}
              className="w-5 h-5 rounded-full"
              style={{ background: v }}
            ></div>
          ))}
      </div>
    </div>
  );
};
export default CardProduct;
