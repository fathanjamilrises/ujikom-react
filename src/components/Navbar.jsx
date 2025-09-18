import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const menus = [
  { label: "Beranda", path: "/" },
  { label: "Profil", path: "/profil" },
  { label: "Berita", path: "/berita" },
  { label: "Ekstrakurikuler", path: "/ekstrakurikuler" },
  { label: "Galeri", path: "/galeri" },
];

const Navbar = () => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isActive = (path) =>
    location.pathname === path ? "text-[#0265af] font-medium" : "text-gray-700";

  return (
    <>
      {/* Header Top */}
      <div className="bg-slate-800 text-white text-sm py-1">
        <div className="container mx-auto flex items-center justify-between px-4">
          <a href="#" className="font-[Inter]">
            021-5720934
          </a>
          <div className="flex gap-4">
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-purple-800 transition">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src="/assets/logo.png" className="w-40 md:w-50" alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium text-sm">
            {menus.map((menu, i) => (
              <a
                key={i}
                href={menu.path}
                className={`${isActive(
                  menu.path
                )} hover:text-[#0265af] transition font-semibold font-[Satoshi]`}
              >
                {menu.label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="text-gray-700 focus:outline-none"
            >
              {isMobileOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white border-b border-gray-100 transition-all duration-500 ease-in-out overflow-hidden ${
            isMobileOpen ? "max-h-[400px]" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-4 px-6 py-6 font-medium text-sm">
            {menus.map((menu, i) => (
              <a
                key={i}
                href={menu.path}
                className={`${isActive(
                  menu.path
                )} hover:text-[#0265af] transition font-semibold font-[Satoshi]`}
              >
                {menu.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
