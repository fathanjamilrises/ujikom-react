import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import SkeletonCard from "./ui/SkeletonCard";

const BeritaList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBerita = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("berita")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) console.error(error);
      else setData(data);
      setLoading(false);
    };
    fetchBerita();
  }, []);

  return (
    <section className="py-15">
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : data.map((b) => (
                <div
                  key={b.slug}
                  className="md:max-w-sm bg-white overflow-hidden border border-gray-300"
                >
                  <img
                    src={b.gambar}
                    alt={b.judul}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-5">
                    <div className="flex items-center mb-2 text-sm text-gray-600">
                      <span className="flex gap-2 font-[Satoshi] items-center font-semibold text-[#0265af] mr-4">
                        <FaUser /> {b.author}
                      </span>
                      <span>
                        {new Date(b.created_at).toLocaleDateString("id-ID", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "2-digit",
                        })}
                      </span>
                    </div>

                    <h5 className="text-lg font-semibold text-gray-900 mb-2">
                      {b.judul}
                    </h5>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-4">
                      {b.deskripsi}
                    </p>
                    <Link
                      to={`/berita-detail/${b.slug}`}
                      className="px-4 py-2 border-[#0265af] border text-[#0265af] hover:bg-[#0265af] hover:text-white transition font-[Satoshi] rounded-md text-sm font-semibold"
                    >
                      Selengkapnya
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default BeritaList;
