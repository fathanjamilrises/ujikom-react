import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { FaUser, FaArrowLeft } from "react-icons/fa";
import SkeletonNewsLoading from "../components/ui/SkeletonNewsLoading";

const BeritaDetail = () => {
  const { slug } = useParams();
  const [berita, setBerita] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBerita = async () => {
      const { data, error } = await supabase
        .from("berita")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) console.error(error);
      else setBerita(data);
      document.title = `${data.judul} | SMKN 4 Tasikmalaya`;
    };
    fetchBerita();
  }, [slug]);

  if (!berita) {
    return <SkeletonNewsLoading />;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 font-[Inter]">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[#0265af] mb-6 hover:underline cursor-pointer"
      >
        <FaArrowLeft /> Kembali
      </button>

      {/* Judul */}
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug">
        {berita.judul}
      </h1>

      {/* Author + Tanggal */}
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
        <span className="flex items-center gap-2 font-semibold text-[#0265af]">
          <FaUser /> {berita.author}
        </span>
        <span>
          {new Date(berita.created_at).toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>

      {/* Gambar */}
      <img
        src={berita.gambar}
        alt={berita.judul}
        className="w-full h-[400px] object-cover rounded-lg mb-8 shadow-md"
      />

      {/* Isi Berita */}
      <div className="prose max-w-none prose-lg text-gray-800 leading-relaxed">
        {berita.deskripsi.split("\n").map((paragraf, i) => (
          <p key={i} className="mb-4">
            {paragraf}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BeritaDetail;
