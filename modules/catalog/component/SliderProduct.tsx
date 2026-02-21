"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import CardProduct from "@/common/components/product/cardProduct";
import Image from "next/image";
import { useRef, useState } from "react";
import { CardProductType } from "../models/responses/responses";

interface SliderProductProps {
  product: CardProductType[];
  title: string;
}

const SliderProduct = ({ product, title }: SliderProductProps) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // const products = [
  //   { id: 1, thumbnail: "/assets/images/p1.webp", alt: "Product 1" },
  //   { id: 2, thumbnail: "/assets/images/p2.webp", alt: "Product 2" },
  //   { id: 3, thumbnail: "/assets/images/p3.webp", alt: "Product 3" },
  //   { id: 4, thumbnail: "/assets/images/p4.webp", alt: "Product 4" },
  //   { id: 5, thumbnail: "/assets/images/p5.webp", alt: "Product 5" },
  //   { id: 1, thumbnail: "/assets/images/p1.webp", alt: "Product 1" },
  //   { id: 2, thumbnail: "/assets/images/p2.webp", alt: "Product 2" },
  //   { id: 3, thumbnail: "/assets/images/p3.webp", alt: "Product 3" },
  //   { id: 4, thumbnail: "/assets/images/p4.webp", alt: "Product 4" },
  //   { id: 5, thumbnail: "/assets/images/p5.webp", alt: "Product 5" },
  // ];

  return (
    <div className="w-full relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h3 className="inline-block font-bold text-[#292929] text-3xl border-b-2 border-[#484848] pb-1">
          {title}
        </h3>

        {/* Custom Navigation */}
        {product && product?.length > 5 && (
          <div className="flex items-center gap-2">
            <button
              ref={prevRef}
              disabled={isBeginning}
              className={`transition-opacity ${
                isBeginning
                  ? "opacity-40 cursor-default"
                  : "hover:opacity-70 cursor-pointer"
              }`}
            >
              <Image
                src="/assets/icon/back.svg"
                alt="prev"
                width={30}
                height={30}
              />
            </button>

            <button
              ref={nextRef}
              disabled={isEnd}
              className={`transition-opacity ${
                isEnd
                  ? "opacity-40 cursor-default"
                  : "hover:opacity-70 cursor-pointer"
              }`}
            >
              <Image
                src="/assets/icon/next.svg"
                alt="next"
                width={30}
                height={30}
              />
            </button>
          </div>
        )}
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={5}
        onBeforeInit={(swiper) => {
          const navigation = swiper.params.navigation as any;
          navigation.prevEl = prevRef.current;
          navigation.nextEl = nextRef.current;
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onInit={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 5 },
        }}
      >
        {product && product.length > 0 ? (
          product.map((product) => (
            <SwiperSlide key={product.id}>
              <CardProduct
                thumbnail={product.thumbnail}
                alt={product.name}
                color={product?.color ?? []}
                name={product?.name}
                hoverImg="/assets/product/Favorite Product/Nike/Nike Air Force 1 All White/IMG_1553 2.png"
              />
            </SwiperSlide>
          ))
        ) : (
          <div className="text-center text-[#292929] mt-4">
            <p className="text-2xl font-semibold">No products available</p>
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default SliderProduct;
