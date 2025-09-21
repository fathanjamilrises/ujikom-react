import React from "react";
import CountUp from "react-countup";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const InformasiDetail = () => {

  useEffect(() => {
    AOS.init({duration:1200,once:false})
  })
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
            data-aos="fade-right"
          />
        </div>

        {/* Konten */}
        <div>
          <h2 className="text-3xl md:text-3xl font-bold mb-4 leading-snug text-gray-900" data-aos="fade-down">
            SMK Negeri 4 Tasikmalaya
          </h2>
          <p className="text-gray-600 mb-10 font-[Satoshi] leading-relaxed" data-aos="fade-up"
            data-aos-delay="200">
            SMK Negeri 4 Tasikmalaya menghasilkan tamatan yang Cerdas, Akhlak
            mulia, Kreatif, Aktif, Produktif, dengan berlandaskan Iman dan Taqwa{" "}
            <span className="font-semibold">(CAKAP BERIMTAQ)</span>.
          </p>

          {/* Statistik */}
          <div className="grid grid-cols-3 gap-8 text-center" data-aos="fade-up">
            <div >
              <h3 className="text-3xl font-bold ] text-[#0265af]">
                <CountUp end={1500} duration={7} enableScrollSpy
                  scrollSpyDelay={100}  scrollSpyOnce={true}  />+
              </h3>
              <p className="text-gray-500 mt-2 text-sm">Siswa Aktif</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold ] text-[#0265af]">
                <CountUp end={100} duration={7} enableScrollSpy
                  scrollSpyDelay={100} scrollSpyOnce={true} />+
              </h3>
              <p className="text-gray-500 mt-2 text-sm">Guru Profesional</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold ] text-[#0265af]">
                <CountUp end={5} duration={7} enableScrollSpy
                  scrollSpyDelay={100} scrollSpyOnce={true} />
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
