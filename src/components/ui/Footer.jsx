import React from "react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-700 ">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Profil */}
          <div className="flex flex-col gap-4">
            <img src="/assets/logo-white.png" className="w-60" alt="Logo" />
            <p className="text-sm leading-relaxed px-2 text-white">
              Jl. Depok, Kec. Purbaratu,
              <br />
              Kota Tasikmalaya, Jawa Barat
              <br />
              Kode Pos 46196
            </p>

            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/smkn4tsmofficial"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 text-white"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@smkn4tasikmalayamediaoffic704"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 text-white"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.tiktok.com/@smkn4tasikmalaya?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 text-white"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Link Navigasi */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-white text-sm">
              <li>
                <a href="/" className="hover:underline">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/profil" className="hover:underline">
                  Profil
                </a>
              </li>
              <li>
                <a href="/program" className="hover:underline">
                  Program Keahlian
                </a>
              </li>
              <li>
                <a href="/berita" className="hover:underline">
                  Berita
                </a>
              </li>
              <li>
                <a href="/kontak" className="hover:underline">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Peta */}
          <div>
            <h3 className="text-white font-semibold mb-4">Lokasi</h3>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63367.24106704969!2d108.1900937!3d-7.3509288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65f58a7b1a94bb%3A0x401e8f1fc28c0a0!2sTasikmalaya!5e0!3m2!1sid!2sid!4v1695032132423!5m2!1sid!2sid"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mt-8 px-6 bg-slate-800 py-5 w-full h-full">
        <p className="text-white text-sm">
          © 2025 SMKN 4 Tasikmalaya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
