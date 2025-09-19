import React from "react";

const ProfilVideo = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl  mb-10">
          Profil <span className="font-bold">Sekolah</span>
        </h2>

        <div className="relative w-full md:w-3/4 mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/5l2u9rHS36k?si=s_pOTDeVFm-ELcIS" // ganti dengan link yt kamu
            title="Profil Sekolah"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ProfilVideo;
