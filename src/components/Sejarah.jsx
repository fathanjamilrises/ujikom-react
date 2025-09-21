import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Sejarah = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  });
  return (
    <section className="py-20">
      <div className="max-w-[90rem] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Konten */}
        <div>
          <h2 className="text-3xl md:text-4xl mb-4 leading-snug text-gray-900" data-aos="fade-right">
            Sejarah <span className="font-bold">Sekolah</span>
          </h2>
          <p className="text-gray-600 mb-10 text-sm text-justify leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Sejalan dengan Program Pemerintah dibidang pendidikan Menengah
            Kejuruan pada saat itu yakni pemerataan akses ditambah pula dengan
            banyaknya keinginan masyarakat yang mengharapkan adanya SMK Negeri
            di daerah Kecamatan Purbaratu Kota Tasikmalaya, terutama untuk
            menampung tamatan dari SLTP yang ingin melanjutkan ke SMK maka
            beberapa tokoh masyarakat, unsur pejabat pemerintah di Kecamatan
            Purbaratu Kota Tasikmalaya mengusulkan kepada pemerintah Kota
            Tasikmalaya dan Pemerintah Provinsi Jawa Barat, agar berdirinya SMK
            Negeri di Kecamatan Purbaratu Kota Tasikmalaya. Setelah melalui
            perjuangan yang sangat panjang dari berbagai pihak khususnya Disdik
            Kota Tasikmalaya dan pihak-pihak terkait lainnya sesuai prosedur dan
            ketentuan yang berlaku pada waktu itu dengan mengucapkan syukur
            Alhamdulillah akhirnya pada tahun pelajaran 2010/2011 SMK Negeri 4
            Tasikmalaya mulai berdiri, pada awalnya membuka Kompetensi Keahlian
            Teknik Komputer dan Jaringan dengan pendaftar peserta Didik Baru
            pada waktu itu berjumlah 44 orang. Pada awalnya tempat belajar
            menumpang di SMP Negeri 17 Kota Tasikmalaya, dan sekolah induknya
            adalah SMK Negeri 2 Kota Tasikmalaya, Untuk Tenaga pendidik dan
            Tenaga Kependidikan masih dibantu sepenuhnya oleh kedua sekolah
            tersebut. Pada tahun 2012 keluarlah surat Izin Pendirian berdasarkan
            keputusan kepala Badan Pelayanan Perizinan Terpadu Kota Tasikmalaya
            No. 420/9/SK-BPPT/2012 Tanggal 06 Februari 2012.
          </p>
        </div>
        {/* Gambar */}
        <div className="relative hidden md:block">
          <img
            src="https://web-sekolah-tawny.vercel.app/_nuxt/brsma.C4Xe_xko.jpg"
            alt="foto guru"
            className="shadow-xl" data-aos="fade-left"
          />
        </div>
      </div>
    </section>
  );
};

export default Sejarah;
