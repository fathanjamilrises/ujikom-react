import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const HeaderHero = ({ title, description }) => {
  useEffect (()=>{
    AOS.init({duration:1200,once:false})
  })
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('./assets/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0265af]/80"></div>

      {/* Konten */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-[Inter] font-bold mb-2" data-aos="fade-right" data-aos-delay="200">
          {title}
        </h2>
        <p className="mb-12 max-w-2xl mx-auto  " data-aos="fade-right" data-aos-delay="400">{description}</p>
      </div>
    </section>
  );
};

export default HeaderHero;
