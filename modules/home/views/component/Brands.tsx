import Link from "next/link";
import React from "react";

const Brands: React.FC = () => {
  const brands = [
    { name: "NIKE", href: "#" },
    { name: "ADIDAS", href: "#" },
    { name: "PUMA", href: "#" },
    { name: "ONITSUKA TIGER", href: "#" },
    { name: "NEW BALANCE", href: "#" },
    { name: "HOKA", href: "#" },
    { name: "ON", href: "#" },
    { name: "ASICS", href: "#" },
  ];

  return (
    <section className="py-24 px-6 bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold text-[#333] tracking-tight">
            Our Brand Partners
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            Brand global yang telah bekerja sama dan mempercayai NFC Group
            Indonesia
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.href}
              className="brand-partner-card"
            >
              <span className="brand-partner-name">{brand.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
