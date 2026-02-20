"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const slides = [
  {
    title: "NFC Group Indonesia",
    desc: `Satu-satunya Distributor Sepatu
dengan manajemen perusahaan
terbaik di Indonesia.`,
    bg: "/assets/images/background-Home_atas.webp",
    icon1: "/assets/images/Money_Guaranted.webp",
    icon2: "/assets/images/time-shipping.webp",
  },
  {
    title: "Distributor Resmi & Terpercaya",
    desc: `Produk original dengan
jaminan kualitas terbaik
untuk seluruh Indonesia.`,
    bg: "/assets/images/background-Home_atas.webp",
    icon1: "/assets/images/Money_Guaranted.webp",
    icon2: "/assets/images/time-shipping.webp",
  },
];

const Hero = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="h-screen w-full relative">
      <div className="relative h-screen w-full">
        {/* Background */}
        <Image
          src="/assets/images/background-Home_atas.webp"
          alt="background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-6 md:px-16">
          <div className="w-full flex flex-col md:flex-row items-center gap-12">
            {/* LEFT */}
            <div className="flex-1 text-center md:text-left space-y-6">
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#FDF4E2] leading-tight">
                NFC Group Indonesia
              </h1>
              <p className="text-lg md:text-xl text-[#FDF4E2] whitespace-pre-line">
                Satu-satunya Distributor Sepatu dengan manajemen perusahaan
                terbaik di Indonesia
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-gray-300 self-stretch" />

            {/* RIGHT */}
            <div className="flex-1 w-full space-y-10">
              <div className="flex items-center gap-3">
                <div className="w-20 h-20 relative rounded-xl overflow-hidden">
                  <Image
                    src={"/assets/images/Money_Guaranted.webp"}
                    alt="icon"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col text-[#FDF4E2] font-bold">
                  <span>100% Money Guaranteed</span>
                  <span>100% Secure Payment</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-20 h-20 relative rounded-xl overflow-hidden">
                  <Image
                    src={"/assets/images/time-shipping.webp"}
                    alt="icon"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-[#FDF4E2] font-bold">
                  Support 24 Hours <br /> Fast Shipping
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
