import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import "aos/dist/aos.css";
import AOS from "aos";
import SkeletonLoadingUI from "../components/ui/SkeletonLoadingUI";
import { FaArrowLeft } from "react-icons/fa";

const DetailKompetensiKeahlian = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    const fetchDetail = async () => {
      const { data, error } = await supabase
        .from("kompetensi_keahlian")
        .select("*")
        .eq("slug", slug)
        .single();
      if (error) console.error(error);
      else setData(data);
      document.title = `${data.nama} | SMKN 4 Tasikmalaya`;
    };
    fetchDetail();
  }, [slug]);

  if (!data) {
    return <SkeletonLoadingUI />;
  }

  return (
    <section className="py-5">
      <div className="max-w-4xl mx-auto px-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#0265af] mb-2 hover:underline"
        >
          <FaArrowLeft /> Kembali
        </button>
        <div className="flex flex-col items-center text-center">
          <img
            src={data.logo}
            alt={data.nama}
            className="w-50 object-contain mb-6"
            data-aos="fade-right"
          />
          <h1 className="text-3xl font-bold mb-4" data-aos="fade-right">
            {data.nama}
          </h1>
          <p
            className="text-gray-700 text-justify font-[Satoshi] text-lg leading-relaxed mb-6"
            data-aos="fade-right"
          >
            {data.deskripsi}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-8">
          <div
            className="bg-white shadow p-6 rounded text-center"
            data-aos="fade-right"
          >
            <h3 className="text-xl font-semibold">Kepala Program</h3>
            <p className="text-gray-600 font-[Satoshi]  mt-2">{data.kaprog}</p>
          </div>
          <div
            className="bg-white shadow p-6 rounded text-center"
            data-aos="fade-right"
          >
            <h3 className="text-xl font-semibold">Tenaga Pendidik</h3>
            <p className="text-gray-600 font-[Satoshi]  mt-2">
              {data.tenaga_pendidik}
            </p>
          </div>
          <div
            className="bg-white shadow p-6 rounded text-center"
            data-aos="fade-right"
          >
            <h3 className="text-xl font-semibold">Jumlah Siswa</h3>
            <p className="text-gray-600 font-[Satoshi]  mt-2">{data.siswa}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailKompetensiKeahlian;
