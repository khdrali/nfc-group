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
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // 🔥 penting untuk React
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="hero-swiper h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-screen w-full">
              {/* Background */}
              <Image
                src={slide.bg}
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
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-[#FDF4E2] whitespace-pre-line">
                      {slide.desc}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block w-px bg-gray-300 self-stretch" />

                  {/* RIGHT */}
                  <div className="flex-1 w-full space-y-10">
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-20 relative rounded-xl overflow-hidden">
                        <Image
                          src={slide.icon1}
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
                          src={slide.icon2}
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
          </SwiperSlide>
        ))}

        {/* 🔽 Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute bottom-20 cursor-pointer left-6 z-20 w-11 h-11 rounded-full border border-white flex items-center justify-center hover:bg-white/20 transition"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" d="M21 12H3" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          ref={nextRef}
          className="absolute bottom-20 cursor-pointer right-6 z-20 w-11 h-11 rounded-full border border-white flex items-center justify-center hover:bg-white/20 transition"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" d="M3 12h18" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7-7 7"
            />
          </svg>
        </button>
      </Swiper>
    </section>
  );
};

export default Hero;
