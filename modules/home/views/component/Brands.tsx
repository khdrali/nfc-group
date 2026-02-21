"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Brands: React.FC = () => {
  const brands = [
    { name: "NIKE", href: "#", logo: "/assets/logo/brands/logo-nike.webp" },
    { name: "ADIDAS", href: "#", logo: "/assets/logo/brands/logo-adidas.webp" },
    { name: "PUMA", href: "#", logo: "/assets/logo/brands/logo-puma.webp" },
    {
      name: "ONITSUKA TIGER",
      href: "#",
      logo: "/assets/logo/brands/logo-oj.webp",
    },
    {
      name: "NEW BALANCE",
      href: "#",
      logo: "/assets/logo/brands/new-balance-logo.webp",
    },
    { name: "HOKA", href: "#", logo: "/assets/logo/brands/logo-hoka.webp" },
    { name: "ON", href: "#", logo: "/assets/logo/brands/logo-on.webp" },
    { name: "ASICS", href: "#", logo: "/assets/logo/brands/logo-asics.webp" },
  ];

  return (
    <section className="py-24 px-6 bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold text-[#333] tracking-tight">
            Our Brand Partners
          </h2>
          {/* <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            Brand global yang telah bekerja sama dan mempercayai NFC Group
            Indonesia
          </p> */}
        </div>

        {/* Brand Grid */}
        <div className="flex gap-6 md:gap-8 overflow-x-auto lg:grid lg:grid-cols-4 lg:overflow-visible no-scrollbar">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.href}
              className="brand-partner-card shrink-0 w-40 sm:w-44 md:w-48 lg:w-auto"
            >
              <Image
                src={brand?.logo}
                alt={brand?.name}
                width={140}
                height={140}
                className="mx-auto"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
