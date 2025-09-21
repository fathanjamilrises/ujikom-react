import React from "react";
import HeaderHero from "../components/HeaderHero";
import EskulList from "../components/EskulList";
import { useEffect } from "react";


const Ekstrakulikuler = () => {
  useEffect(() => {
    document.title = "Ekstrakurikuler | SMKN 4 Tasikmalaya";
  })
  return (
    <div className="bg-white">
      <HeaderHero
        title="Ekstrakurikuler"
        description="Eksplorasi macam macam ekstrakurikuler yang ada di SMK Negeri 4 Tasikmalaya "
      />
      <EskulList />
    </div>
  );
};

export default Ekstrakulikuler;
