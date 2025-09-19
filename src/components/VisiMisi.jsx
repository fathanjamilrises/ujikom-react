import React from "react";

const VisiMisi = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[90rem] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Gambar */}
        <div className="relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
            alt="visi misi"
            className="shadow-lg"
          />
        </div>

        {/* Konten */}
        <div>
          <h2 className="text-3xl md:text-4xl mb-4 leading-snug text-gray-900">
            Visi <span className="font-bold">dan Misi</span>
          </h2>

          {/* Visi */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Visi</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Terwujudnya lulusan yang berkarakter, berprestasi, dan berdaya
              saing tinggi di bidang teknologi serta berlandaskan iman dan
              taqwa.
            </p>
          </div>

          {/* Misi */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Misi</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
              <li>
                Menyiapkan Sumber Daya Manusia yang cerdas dan kompeten baik
                hardskill maupun softskill.
              </li>
              <li>
                Meningkatkan dan mengembangkan aktifitas serta kreatifitas
                seluruh warga sekolah dalam berbagai kegiatan positif.
              </li>
              <li>
                Mewujudkan manajemen pengelolaan yang efektif, efesien,
                transparan, akuntabel dan layanan prima.
              </li>
              <li>
                Menumbuhkan dan mengembangkan potensi dan kemampuan Sumber Daya
                Manusia yang berdaya saing tinggi melalui berbagai kegiatan
                akademik maupun non akademik.
              </li>
              <li>
                Menyelenggarakan berbagai program kegiatan dalam upaya
                meningkatkan Sumber Daya Manusia yang mampu menyesuaikan dengan
                perkembangan.
              </li>
              <li>
                Mengembangkan sarana prasarana dan lingkungan sekolah yang
                menyenangkan sebagai wadah menumbuhkembangkan daya kreasi dan
                inovasi untuk menghasilkan produk teknologi tepat guna.
              </li>
              <li>
                Membangun jiwa wirausaha yang handal melalui pembelajaran
                Teaching Factory (TEFA) dan Kelas Industri.
              </li>
              <li>
                Menjalin dan mengembangkan kemitraan dengan Industri dan Dunia
                Kerja (IDUKA) serta lembaga lainnya yang relevan.
              </li>
              <li>
                Menanamkan dan membudayakan sikap dan perilaku yang baik pada
                aktivitas di sekolah maupun dalam kehidupan sehari-hari.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
