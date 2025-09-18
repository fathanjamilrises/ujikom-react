import React from "react";
import {
  FaSmile,
  FaLaptopCode,
  FaUsers,
  FaCogs,
  FaRobot,
} from "react-icons/fa"

const ProgramKeahlian = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl mb-12 font-[Inter]">
          Program <span className="font-bold">Keahlian</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md p-6 flex flex-col items-center text-center">
            <FaLaptopCode className="text-4xl text-[#0265af] mb-4" />
            <h3 className="text-xl font-semibold mb-2">PPLG</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Pengembangan perangkat lunak & gim: fokus pada pemrograman,
              software, dan game development.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 flex flex-col items-center text-center">
            <FaUsers className="text-4xl text-[#0265af] mb-4" />
            <h3 className="text-xl font-semibold mb-2">TJKT</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Teknik Jaringan Komputer & Telekomunikasi: jaringan, server, &
              infrastruktur IT.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 flex flex-col items-center text-center">
            <FaCogs className="text-4xl text-[#0265af] mb-4" />
            <h3 className="text-xl font-semibold mb-2">TBSM</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Teknik Bisnis & Sepeda Motor: fokus keterampilan perbaikan sepeda
              motor.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 flex flex-col items-center text-center">
            <FaSmile className="text-4xl text-[#0265af] mb-4" />
            <h3 className="text-xl font-semibold mb-2">DKV</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Desain Komunikasi Visual: keterampilan desain grafis, animasi, dan
              multimedia.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 flex flex-col items-center text-center">
            <FaRobot className="text-4xl text-[#0265af] mb-4" />
            <h3 className="text-xl font-semibold mb-2">TOI</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Teknik Otomasi Industri: fokus sistem otomasi & robotika.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramKeahlian;
