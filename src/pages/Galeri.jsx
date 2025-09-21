import React from "react";
import HeaderHero from "../components/HeaderHero";
import GaleriList from "../components/GaleriList";



const Galeri = () => {
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
