"use client";

import CardProduct from "@/common/components/product/cardProduct";
import { useState, useEffect } from "react";
import { Products } from "../models/data/dummyData";

const filters = ["ALL", "NEW ARRIVALS", "BEST SELLING"];
const ITEMS_PER_LOAD = 20;

const ListProduct = () => {
  const [active, setActive] = useState("ALL");
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [loading, setLoading] = useState(false);

  // 🔎 Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // ✅ Reset visible items saat filter/search berubah
  useEffect(() => {
    setVisibleCount(ITEMS_PER_LOAD);
  }, [active, debouncedQuery]);

  // 🔎 Filter + Search logic
  const filteredProducts = Products.filter((p) => {
    const matchSearch = p.name
      .toLowerCase()
      .includes(debouncedQuery.toLowerCase().trim());

    if (active === "BEST SELLING") {
      return matchSearch && p.isBestSeller;
    }

    if (active === "NEW ARRIVALS") {
      // contoh: 20 produk terakhir dianggap terbaru
      return matchSearch && p.id > Products.length - 20;
    }

    return matchSearch; // ALL
  });

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  // 🔥 Infinite Scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (
        scrollTop + windowHeight >= fullHeight - 200 &&
        !loading &&
        visibleCount < filteredProducts.length
      ) {
        setLoading(true);

        // simulasi API delay
        setTimeout(() => {
          setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
          setLoading(false);
        }, 600);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCount, loading, filteredProducts.length]);

  return (
    <div className="flex flex-col gap-4">
      {/* 🔎 Search + Filter */}
      <div className="bg-white p-4 rounded-xl flex items-center gap-4 w-full">
        {/* Search */}
        <div className="flex items-center bg-white border border-gray-400 rounded-full px-4 py-2 w-64">
          <svg
            className="w-4 h-4 text-gray-500 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search by product name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent outline-none text-sm placeholder-gray-500 w-full"
          />
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-gray-400" />

        {/* Filters */}
        <div className="flex gap-3">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition
              ${
                active === item
                  ? "bg-pink-600 text-white"
                  : "bg-[#D9D3C3] text-gray-700 hover:bg-[#cfc8b6]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* 🛍 Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {visibleProducts.map((v, key) => (
          <div
            key={key}
            className="opacity-0 animate-fadeIn"
            style={{ animationFillMode: "forwards", animationDuration: "0.4s" }}
          >
            <CardProduct
              thumbnail={v?.thumbnail}
              hoverImg="/assets/product/Favorite Product/Nike/Nike Air Force 1 All White/IMG_1553 2.png"
              alt={v?.name}
              name={v?.name}
              color={v?.color ?? []}
            />
          </div>
        ))}

        {/* 🔄 Skeleton Loader */}
        {loading &&
          Array.from({ length: 10 }).map((_, i) => (
            <div
              key={`skeleton-${i}`}
              className="animate-pulse rounded-xl bg-gray-200 h-64"
            />
          ))}
      </div>

      {/* 📊 Status */}
      {!loading && filteredProducts.length === 0 && (
        <p className="text-center text-gray-400 py-6">No products found</p>
      )}

      {!loading &&
        filteredProducts.length > 0 &&
        visibleCount >= filteredProducts.length && (
          <p className="text-center text-gray-400 py-6">No more products</p>
        )}
    </div>
  );
};

export default ListProduct;
