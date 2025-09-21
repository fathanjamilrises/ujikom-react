import React from "react";
import HeaderHero from "../components/HeaderHero";
import EskulList from "../components/EskulList";


const Ekstrakulikuler = () => {
  return (
    <div className="bg-white">
      <HeaderHero
        title="Ekstrakulikuler"
        description="Eksplorasi macam macam ekstrakulikuler yang ada di SMK Negeri 4 Tasikmalaya "
      />
      <EskulList />
    </div>
  );
};

export default Ekstrakulikuler;
