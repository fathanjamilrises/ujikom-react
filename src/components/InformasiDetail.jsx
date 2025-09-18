import React from "react";
import CountUp from "react-countup";

const InformasiDetail = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Gambar */}
        <div className="relative">
          <div className="absolute inset-0 bg-gray-600 -z-10 translate-x-4 translate-y-4"></div>
          <img
            src="./assets/img1.JPG"
            alt="Siswa di perpustakaan"
            className="shadow-xl"
          />
        </div>

        {/* Konten */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug text-gray-900">
            SMK Negeri 4 Tasikmalaya
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            SMK Negeri 4 Tasikmalaya menghasilkan tamatan yang Cerdas, Akhlak
            mulia, Kreatif, Aktif, Produktif, dengan berlandaskan Iman dan Taqwa{" "}
            <span className="font-semibold">(CAKAP BERIMTAQ)</span>.
          </p>

          {/* Statistik */}
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-[#0265af]">
                <CountUp end={1500} duration={3} />+
              </h3>
              <p className="text-gray-500 mt-2 text-sm">Siswa Aktif</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#0265af]">
                <CountUp end={100} duration={3} />+
              </h3>
              <p className="text-gray-500 mt-2 text-sm">Guru Profesional</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#0265af]">
                <CountUp end={5} duration={3} />
              </h3>
              <p className="text-gray-500 mt-2 text-sm">Program Keahlian</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformasiDetail;
