import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-[600px] flex items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: "url('./assets/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0265af]/90 via-[#0265af]/80 to-transparent"></div>

      {/* Konten */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto text-white">
        <h4 className="text-lg mb-2 font-[Satoshi] font-semibold">
          Selamat Datang
        </h4>
        <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight font-[Inter]">
          SMK Negeri 4 <br /> Tasikmalaya
        </h1>
        <p className="text-base md:text-lg leading-relaxed font-[Satoshi]">
          Selamat datang di website resmi SMK Negeri 4 Tasikmalaya tempat di
          mana generasi masa depan dibentuk dengan semangat, integritas, dan
          prestasi.
        </p>
      </div>
    </section>
  );
};

export default Hero;
