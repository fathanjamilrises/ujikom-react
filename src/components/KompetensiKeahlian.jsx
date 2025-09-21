import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Link } from "react-router-dom";
import SkeletonCard from "./ui/SkeletonCard";

const ProgramKeahlian = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
    const fetchKompetensiKeahlian = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("kompetensi_keahlian")
        .select("slug,nama,logo,deskripsi");
      if (error) console.error(error);
      else setData(data);
      setLoading(false);
    };
    fetchKompetensiKeahlian();
  }, []);
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl mb-12 font-[Inter]"
          data-aos="fade-right"
        >
          Kompetensi <span className="font-bold">Keahlian</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => ( <SkeletonCard key={i} /> ))
            : data.map((k, idx) => (
                <Link
                  to={`/kompetensi-keahlian/${k.slug}`}
                  key={k.slug}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="bg-white shadow-md px-6 py-4 flex flex-col items-center text-center"
                >
                  <img
                    src={k.logo}
                    className="w-20"
                    alt={`Kompetensi Keahlian ${k.nama}`}
                  />
                  <h3 className="text-lg font-semibold mb-2">{k.nama}</h3>
                  <p className="text-gray-600 text-sm font-[Satoshi] leading-relaxed line-clamp-2">
                    {k.deskripsi}
                  </p>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramKeahlian;
