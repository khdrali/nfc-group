"use client";

import CardProduct from "@/common/components/product/cardProduct";
import { useState, useEffect, useMemo } from "react";
import { Products } from "../models/data/dummyData";

const filters = ["ALL", "NEW ARRIVALS", "BEST SELLING"];
const ITEMS_PER_LOAD = 20;
const NEW_ARRIVALS_INITIAL = 20;

interface ListProductProps {
  activeBrand?: string;
  onResetBrand?: () => void;
}

const ListProduct: React.FC<ListProductProps> = ({
  activeBrand = "ALL",
  onResetBrand,
}) => {
  const [active, setActive] = useState("ALL");
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  // 🆕 Batas tampil untuk NEW ARRIVALS, bisa bertambah saat scroll
  const [newArrivalsLimit, setNewArrivalsLimit] =
    useState(NEW_ARRIVALS_INITIAL);
  const [loading, setLoading] = useState(false);

  // 🔎 Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  // ✅ Reset visible items & newArrivalsLimit saat filter/search/brand berubah
  useEffect(() => {
    setVisibleCount(ITEMS_PER_LOAD);
    setNewArrivalsLimit(NEW_ARRIVALS_INITIAL);
  }, [active, debouncedQuery, activeBrand]);

  // ✅ Cek apakah ada filter aktif
  const isFilterActive =
    active !== "ALL" || query.trim() !== "" || activeBrand !== "ALL";

  // 🔎 Filter + Search + Brand logic
  const filteredProducts = useMemo(() => {
    // Step 1: filter berdasarkan search & brand dulu
    const baseFiltered = Products.filter((p) => {
      const matchSearch = p.name
        .toLowerCase()
        .includes(debouncedQuery.toLowerCase().trim());

      const matchBrand =
        activeBrand === "ALL" ||
        (p.brand && p.brand.toUpperCase() === activeBrand.toUpperCase());

      return matchSearch && matchBrand;
    });

    if (active === "NEW ARRIVALS") {
      // Step 2: sort by ID descending (terbaru ke terlama)
      const sorted = [...baseFiltered].sort((a, b) => b.id - a.id);
      // Step 3: slice sesuai newArrivalsLimit (bertambah saat scroll)
      return sorted.slice(0, newArrivalsLimit);
    }

    if (active === "BEST SELLING") {
      return baseFiltered.filter((p) => p.isBestSeller);
    }

    return baseFiltered;
  }, [active, debouncedQuery, activeBrand, newArrivalsLimit]);

  // 🆕 Total produk yang tersedia untuk NEW ARRIVALS (tanpa limit)
  const totalNewArrivals = useMemo(() => {
    if (active !== "NEW ARRIVALS") return 0;
    return Products.filter((p) => {
      const matchSearch = p.name
        .toLowerCase()
        .includes(debouncedQuery.toLowerCase().trim());
      const matchBrand =
        activeBrand === "ALL" ||
        (p.brand && p.brand.toUpperCase() === activeBrand.toUpperCase());
      return matchSearch && matchBrand;
    }).length;
  }, [active, debouncedQuery, activeBrand]);

  const visibleProducts =
    active === "NEW ARRIVALS"
      ? filteredProducts // sudah di-slice via newArrivalsLimit
      : filteredProducts.slice(0, visibleCount);

  const hasMore =
    active === "NEW ARRIVALS"
      ? newArrivalsLimit < totalNewArrivals
      : visibleCount < filteredProducts.length;

  // 🔥 Reset semua filter termasuk brand di parent
  const handleResetFilter = () => {
    if (!isFilterActive) return;
    setActive("ALL");
    setQuery("");
    setDebouncedQuery("");
    setVisibleCount(ITEMS_PER_LOAD);
    setNewArrivalsLimit(NEW_ARRIVALS_INITIAL);
    onResetBrand?.();
  };

  // ✅ Klik filter juga reset brand jika diperlukan
  const handleFilterClick = (item: string) => {
    setActive(item);
    if (item === "ALL") {
      onResetBrand?.();
    }
  };

  // 🔥 Infinite Scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= fullHeight - 200 && !loading && hasMore) {
        setLoading(true);
        setTimeout(() => {
          if (active === "NEW ARRIVALS") {
            // Tambah limit NEW ARRIVALS
            setNewArrivalsLimit((prev) => prev + NEW_ARRIVALS_INITIAL);
          } else {
            setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
          }
          setLoading(false);
        }, 600);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore, active]);

  return (
    <div className="flex flex-col gap-4 mt-10">
      {/* 🔎 Search + Filter */}
      <div className="bg-white p-4 rounded-xl flex items-center gap-4 w-full flex-wrap">
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
        <div className="h-8 w-px bg-gray-400 hidden md:block" />

        {/* Filters */}
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={handleResetFilter}
            disabled={!isFilterActive}
            className={`w-36.5 h-9 rounded-full text-sm font-semibold transition
              ${
                isFilterActive
                  ? "bg-[#D9D3C3] text-gray-700 hover:bg-[#cfc8b6] cursor-pointer"
                  : "bg-[#ECEAE4] text-gray-400 cursor-not-allowed opacity-50"
              }`}
          >
            Reset Filter
          </button>
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => handleFilterClick(item)}
              className={`w-36.5 h-9 rounded-full cursor-pointer text-sm font-semibold transition
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
      {!loading && visibleProducts.length === 0 && (
        <p className="text-center text-gray-400 py-6">No products found</p>
      )}

      {!loading && visibleProducts.length > 0 && !hasMore && (
        <p className="text-center text-gray-400 py-6">No more products</p>
      )}
    </div>
  );
};

export default ListProduct;
