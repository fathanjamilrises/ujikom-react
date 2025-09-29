import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const VisiMisi = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[90rem] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative hidden md:block" data-aos="fade-up">
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
            alt="visi misi"
            className="shadow-lg rounded-lg"
          />
        </div>

        <div data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl mb-6 leading-snug text-gray-900" data-aos="fade-down">
            Visi <span className="font-bold">dan Misi</span>
          </h2>

          <div className="mb-8">
            <h3
              className="text-xl font-semibold text-gray-800 mb-3"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Visi
            </h3>
            <p
              className="text-gray-600 text-sm leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Terwujudnya lulusan yang berkarakter, berprestasi, dan berdaya
              saing tinggi di bidang teknologi serta berlandaskan iman dan
              taqwa.
            </p>
          </div>

          <div >
            <h3 className="text-xl font-semibold text-gray-800 mb-3" data-aos="fade-right" data-aos-delay="100">Misi</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-3">
              {[
                "Menyiapkan Sumber Daya Manusia yang cerdas dan kompeten baik hardskill maupun softskill.",
                "Meningkatkan dan mengembangkan aktifitas serta kreatifitas seluruh warga sekolah dalam berbagai kegiatan positif.",
                "Mewujudkan manajemen pengelolaan yang efektif, efesien, transparan, akuntabel dan layanan prima.",
                "Menumbuhkan dan mengembangkan potensi dan kemampuan Sumber Daya Manusia yang berdaya saing tinggi melalui berbagai kegiatan akademik maupun non akademik.",
                "Menyelenggarakan berbagai program kegiatan dalam upaya meningkatkan Sumber Daya Manusia yang mampu menyesuaikan dengan perkembangan.",
                "Mengembangkan sarana prasarana dan lingkungan sekolah yang menyenangkan sebagai wadah menumbuhkembangkan daya kreasi dan inovasi untuk menghasilkan produk teknologi tepat guna.",
                "Membangun jiwa wirausaha yang handal melalui pembelajaran Teaching Factory (TEFA) dan Kelas Industri.",
                "Menjalin dan mengembangkan kemitraan dengan Industri dan Dunia Kerja (IDUKA) serta lembaga lainnya yang relevan.",
                "Menanamkan dan membudayakan sikap dan perilaku yang baik pada aktivitas di sekolah maupun dalam kehidupan sehari-hari.",
              ].map((item, i) => (
                <li key={i}  data-aos="fade-right" data-aos-delay={i * 100}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
