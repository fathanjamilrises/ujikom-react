import React from "react";
import Hero from "../components/Hero";
import InformasiDetail from "../components/InformasiDetail";
import Keunggulan from "../components/Keunggulan";
import ProgramKeahlian from "../components/KompetensiKeahlian";
import Testimonial from "../components/Testimonial";
import BeritaBeranda from "../components/BeritaBeranda";
import { useEffect } from "react";


const Beranda = () => {
    useEffect(() => {
    document.title = "Beranda | SMKN 4 Tasikmalaya";
  }, []);

  return (
    <div className="bg-white">
      <Hero />
      <InformasiDetail />
      <Keunggulan />
      <ProgramKeahlian />
      <Testimonial />
      <BeritaBeranda />

      
    </div>
  );
};

export default Beranda;
