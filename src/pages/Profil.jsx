import React from "react";
import KataSambutan from "../components/KataSambutan";
import Sejarah from "../components/Sejarah";
import VisiMisi from "../components/VisiMisi";
import ProfilVideo from "../components/ProfilVideo";
import IdentitasSekolah from "../components/IdentitasSekolah";
import HeaderHero from "../components/HeaderHero";

const Profil = () => {
  return (
    <div className="bg-white">
      <HeaderHero title="Profil" description="SMKN 4 Tasikmalaya adalah Sekolah Menengah Kejuruan Negeri yang terletak di Kecamatan Purbaratu Kota Tasikmalaya Jawa Barat " />
      <KataSambutan />
      <Sejarah />
      <VisiMisi />
      <ProfilVideo />
      <IdentitasSekolah />
    </div>
  );
};

export default Profil;
