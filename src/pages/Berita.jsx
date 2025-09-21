import React from 'react'
import HeaderHero from '../components/HeaderHero'
import BeritaList from '../components/BeritaList'
import { useEffect } from 'react';

const Berita = () => {
    useEffect(() => {
    document.title = "Berita | SMKN 4 Tasikmalaya";
  }, []);

  return (
    <div>
        <HeaderHero title="Berita"  description="Dapatkan Berita & Informasi Terbaru Seputar SMK Negeri 4 Tasikmalaya"/>
        <BeritaList />
    </div>
  )
}

export default Berita