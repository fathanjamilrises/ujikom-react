import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import AOS from "aos";
import "aos/dist/aos.css";
import SkeletonCard from "./ui/SkeletonCard";

const EskulList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEskul = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("ekstrakulikuler")
        .select("*");

      if (error) console.error(error);
      else setData(data);
      setLoading(false);
    };

    fetchEskul();
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : data.map((e) => (
                <div
                  key={e.id}
                  className="bg-white border border-gray-200 shadow-md p-6 text-center rounded-xl"
                  data-aos="fade-up"
                >
                  <div className="flex justify-center mb-4">
                    <img
                      src={e.img}
                      alt={e.nama}
                      className="w-20 h-20 object-cover rounded-full border-2 border-gray-300 shadow-sm"
                    />
                  </div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-2">
                    {e.nama}
                  </h5>
                  <p className="text-sm text-gray-600">{e.deskripsi}</p>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default EskulList;
