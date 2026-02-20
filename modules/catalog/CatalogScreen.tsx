"use client";

import Image from "next/image";
import { useState } from "react";
import ListProduct from "./component/ListProduct";

const brands = [
  { name: "Nike", logo: "/assets/logo/brands/logo-nike.webp" },
  { name: "Adidas", logo: "/assets/logo/brands/logo-adidas.webp" },
  { name: "Puma", logo: "/assets/logo/brands/logo-puma.webp" },
  { name: "Onitsuka Tiger", logo: "/assets/logo/brands/logo-oj.webp" },
  { name: "New Balance", logo: "/assets/logo/brands/new-balance-logo.webp" },
  { name: "Hoka", logo: "/assets/logo/brands/logo-hoka.webp" },
  { name: "On", logo: "/assets/logo/brands/logo-on.webp" },
  { name: "Asics", logo: "/assets/logo/brands/logo-asics.webp" },
];

const CatalogScreen = () => {
  const [activeBrand, setActiveBrand] = useState("ALL");

  return (
    <div className="py-20 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl text-center font-extrabold text-gray-900 mb-2">
            Explore the Catalog
          </h1>
        </div>

        {/* 🔹 Brand Filter */}
        <div className="flex gap-4 md:gap-6 overflow-x-auto lg:grid lg:grid-cols-8 lg:overflow-visible no-scrollbar">
          {brands.map((brand) => (
            <button
              key={brand.name}
              onClick={() => setActiveBrand(brand.name)}
              className={`rounded-2xl flex items-center justify-center
                h-24 min-w-30 shrink-0 transition-all duration-300 cursor-pointer
                ${
                  activeBrand === brand.name
                    ? "bg-[#9E3F20] scale-105"
                    : "bg-[#B64A26] hover:bg-[#9E3F20]"
                } text-white`}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={60}
                className="object-contain max-h-16 w-auto"
              />
            </button>
          ))}
        </div>

        {/* 🔹 Product List */}
        <ListProduct activeBrand={activeBrand} onResetBrand={() => setActiveBrand("ALL")}/>
      </div>
    </div>
  );
};

export default CatalogScreen;
