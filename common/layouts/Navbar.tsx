"use client";

import Link from "next/link";

interface menuProps {
  name: string;
  link: string;
}

const Navbar = () => {
  const menuItems: menuProps[] = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Catalog", link: "/catalog" },
    { name: "Contact Us", link: "/contact" },
    { name: "Article", link: "/article" },
  ];

  return (
    <nav className="bg-[#2D4137] text-white py-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link href={"/"}>
          {/* NFC */}
          <img
            src="/assets/logo/transparent-image.png"
            alt="Logo"
            width={55}
            height={36}
          />
        </Link>

        <ul className="hidden md:flex gap-10 items-center">
          {menuItems.map((item, key) => (
            <li key={key}>
              <Link
                href={item?.link}
                className="flex flex-col items-center font-bold text-sm uppercase tracking-wide transition-opacity hover:opacity-80"
              >
                {item.name}
                {/* {currentPage === item.id && <div className="nav-dot"></div>} */}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
