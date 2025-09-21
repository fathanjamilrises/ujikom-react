import React from "react";
import HeaderHero from "../components/HeaderHero";
import GaleriList from "../components/GaleriList";
import { useEffect } from "react";



const Galeri = () => {
  useEffect (() => {
    document.title = "Galeri | SMKN 4 Tasikmalaya";
  })
  return (
    <div className="bg-white">
      <HeaderHero
        title="Galeri"
        description="Kumpulan galeri SMK Negeri 4 Tasikmalaya"
      />

     <GaleriList />
    </div>
  );
};

export default Galeri;
