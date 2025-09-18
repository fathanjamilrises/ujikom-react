import React from "react";
import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaAward,
  FaUsers,
} from "react-icons/fa";
const Keunggulan = () => {
  return (
    <section className="grid md:grid-cols-2 min-h-[500px]">
      {/* Konten */}
      <div className="bg-[#0265af] text-white flex items-center">
        <div className="max-w-3xl mx-auto px-10 py-16">
          <h2 className="text-3xl md:text-4xl mb-12 font-[Inter]">
            Kenapa Memilih <span className="font-bold">Kami</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-12">
            <div className="flex items-start gap-4">
              <FaChalkboardTeacher className="text-4xl flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Guru Berkualitas</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Dibimbing oleh tenaga pendidik profesional dan berpengalaman.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaAward className="text-4xl flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">
                  Prestasi Akademik & Non-Akademik
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Siswa menorehkan prestasi di tingkat kota hingga nasional.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaUsers className="text-4xl flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">
                  Lingkungan Belajar Positif
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Menjunjung tinggi disiplin, toleransi, dan kerja sama.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaLaptopCode className="text-4xl flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">
                  Fasilitas Lengkap & Modern
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Ruang kelas nyaman, lab, perpustakaan digital, serta area
                  olahraga mendukung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gambar */}
      <div className="h-full hidden sm:block">
        <img
          src="https://smkn4tasikmalaya.netlify.app/assets/image/berita5.jpg"
          alt="Kenapa memilih kami"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Keunggulan;
