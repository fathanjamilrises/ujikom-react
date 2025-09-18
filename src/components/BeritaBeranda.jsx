import React from "react";

const BeritaBeranda = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl md:text-4xl mb-12 font-[Inter]">
          Berita <span className="font-bold">Terbaru</span>
        </h2>
        <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          <div className="md:max-w-sm  bg-white overflow-hidden border border-gray-300">
            <img
              src="./assets/img1.JPG"
              alt="Siswa di perpustakaan"
              className="shadow-xl w-full object-fit-cover"
            />

            <div className="p-5">
              <h5 className="text-lg font-semibold text-gray-900 mb-2">
                Siswa SMKN 4 Tasikmalaya
              </h5>
              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                veritatis ea iure enim tempora ad quae nostrum sunt tenetur
                recusandae!
              </p>
              <button className="px-4 py-2 h-10  border-[#0265af] border text-[#0265af] hover:bg-[#0265af] hover:text-white transition font-[Satoshi] rounded-md text-sm font-semibold">
                Selengkapnya
              </button>
            </div>
          </div>
          <div className="md:max-w-sm  bg-white overflow-hidden border border-gray-300">
            <img
              src="./assets/img1.JPG"
              alt="Siswa di perpustakaan"
              className="shadow-xl w-full object-fit-cover"
            />

            <div className="p-5">
              <h5 className="text-lg font-semibold text-gray-900 mb-2">
                Siswa SMKN 4 Tasikmalaya
              </h5>
              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                veritatis ea iure enim tempora ad quae nostrum sunt tenetur
                recusandae!
              </p>
              <button className="px-4 py-2 h-10  border-[#0265af] border text-[#0265af] hover:bg-[#0265af] hover:text-white transition font-[Satoshi] rounded-md text-sm font-semibold">
                Selengkapnya
              </button>
            </div>
          </div>
          <div class="md:max-w-sm  bg-white overflow-hidden border border-gray-300">
            <img
              src="./assets/img1.JPG"
              alt="Siswa di perpustakaan"
              className="shadow-xl w-full object-fit-cover"
            />

            <div className="p-5">
              <h5 className="text-lg font-semibold text-gray-900 mb-2">
                Siswa SMKN 4 Tasikmalaya
              </h5>
              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                veritatis ea iure enim tempora ad quae nostrum sunt tenetur
                recusandae!
              </p>
              <button className="px-4 py-2 h-10  border-[#0265af] border text-[#0265af] hover:bg-[#0265af] hover:text-white transition font-[Satoshi] rounded-md text-sm font-semibold">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeritaBeranda;
