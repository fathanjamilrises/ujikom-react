import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import SkeletonPhoto from "./ui/SkeletonPhoto";
import "aos/dist/aos.css";
import AOS from "aos";

const GaleriList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    const fetchGaleri = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("galeri").select("*");
      if (error) console.error(error);
      else setData(data);
      setLoading(false);
    };
    fetchGaleri();
  }, []);
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonPhoto key={i} />)
            : data.map((f, idx) => (
                <div
                  key={idx}
                  className="relative group overflow-hidden shadow-md border border-gray-200"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <img
                    src={f.foto}
                    alt={`Galeri ${idx + 1}`}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white font-semibold">{f.slug}</span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default GaleriList;
