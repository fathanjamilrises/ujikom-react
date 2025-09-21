import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const menus = [
  { label: "Beranda", path: "/" },
  { label: "Profil", path: "/profil" },
  { label: "Berita", path: "/berita" },
  { label: "Ekstrakurikuler", path: "/ekstrakurikuler" },
  { label: "Galeri", path: "/galeri" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

  }, []);

  useEffect(()=> {
    setOpen(false)
  },[pathname])

  const isActive = (path) =>
    (path === "/" && (pathname === "/" )) ||
    pathname === path
      ? "text-[#0265af] font-bold"
      : "text-gray-700";

  return (
    <>
      <div className="bg-slate-800 text-white text-sm py-2 hidden sm:block">
        <div className="container mx-auto flex justify-between items-center px-4">
          <span>021-5720934</span>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/smkn4tsmofficial"><FaInstagram /></a>
            <a href="https://www.youtube.com/@smkn4tasikmalayamediaoffic704"><FaYoutube /></a>
            <a href="https://www.tiktok.com/@smkn4tasikmalaya?is_from_webapp=1&sender_device=pc"><FaTiktok /></a>
          </div>
        </div>
      </div>

      <nav className="bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <img src="/assets/logo.png" className="w-40" alt="Logo" />
          <div className="hidden md:flex space-x-8 text-sm">
            {menus.map((m, i) => (
              <Link key={i} to={m.path} className={`${isActive(m.path)} hover:text-[#0265af] font-semibold transition font-[Satoshi]`}>
                {m.label}
              </Link>
            ))}
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div className={`md:hidden bg-white overflow-hidden transition-all duration-100 ease-in-out ${open ? "max-h-60" : "max-h-0"}`}>
          <div className="flex flex-col space-y-4 px-6 py-4 text-sm">
            {menus.map((m, i) => (
              <Link key={i} to={m.path} className={`${isActive(m.path)} hover:text-[#0265af] transition font-semibold font-[Satoshi]`}>
                {m.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
