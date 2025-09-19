import React from "react";

const ekstrakulikulerList = [
  {
    nama: "English Club",
    deskripsi: "Membentuk karakter, kepemimpinan, dan kemandirian siswa.",
    img: "https://web-sekolah-tawny.vercel.app/_nuxt/ec.BQTqDsuh.jpg",
  },
  {
    nama: "Perisai Diri",
    deskripsi:
      "Ekstrakurikuler seni bela diri tradisional untuk melatih fisik dan mental sekaligus menjaga warisan budaya",
    img: "https://web-sekolah-tawny.vercel.app/_nuxt/pd.BUD6DakP.jpg",
  },
  {
    nama: "Basket",
    deskripsi:
      "Melatih kemampuan fisik, strategi, dan kerjasama tim melalui olahraga basket.",
    img: "https://web-sekolah-tawny.vercel.app/_nuxt/bskt.c2-G4Eus.jpg",
  },
];

const Ekstrakulikuler = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl mb-8 font-[Inter]">
          Ekstrakurikuler <span className="font-bold">SMKN 4</span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ekstrakulikulerList.map((e, idx) => (
            <div
              key={idx}
              className="md:max-w-sm  bg-white overflow-hidden border border-gray-300"
            >
              <img
                src={e.img}
                alt="Siswa di perpustakaan"
                className="w-full object-fit-cover"
              />

              <div className="p-5">
                <h5 className="text-lg font-semibold text-gray-900 mb-2">
                  {e.nama}
                </h5>
                <p className="text-sm text-gray-600 mb-4">{e.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ekstrakulikuler;
