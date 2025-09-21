import React from "react";
import { FaStar } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({duration:1200,once:false})
  })
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('./assets/img2.JPG')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0265af]/80"></div>

      {/* Konten */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-[Inter] mb-2" data-aos="fade-right">
          Apa Kata <span className="font-bold">Mereka?</span>
        </h2>
        <p className="mb-12" data-aos="fade-right" data-aos-delay="200">
          Suara dari siswa, alumni, dan orang tua tentang SMKN 4 Tasikmalaya.
        </p>

        {/* Card Testimonial */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >
          <div className="bg-white text-gray-800 rounded-xl shadow-md p-6 flex flex-col" data-aos="fade-up" data-aos-delay="400">
            <div className="flex text-yellow-500 mb-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-sm mb-6 italic">
              "Saya bersyukur pernah menjadi bagian dari SMKN 4 Tasikmalaya.
              Selain akademik yang kuat, saya juga bisa berkembang lewat
              organisasi OSIS dan lomba debat tingkat nasional."
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <img
                src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?semt=ais_incoming&w=740&q=80"
                alt="Siti Rahmawati"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">Jane Doe</h4>
                <span className="text-gray-500 text-sm">Alumni 2025</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-gray-800 rounded-xl shadow-md p-6 flex flex-col" data-aos="fade-up" data-aos-delay="400">
            <div className="flex text-yellow-500 mb-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-sm mb-6 italic">
              "Anak saya jadi jauh lebih disiplin dan percaya diri sejak masuk
              SMKN 4 Tasikmalaya. Sekolah ini benar-benar membina karakter dan
              prestasi."
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <img
                src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?semt=ais_incoming&w=740&q=80"
                alt="Ibu Lestari"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">Jane Doe</h4>
                <span className="text-gray-500 text-sm">Orang Tua Siswa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
