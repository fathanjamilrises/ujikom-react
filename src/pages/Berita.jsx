import React from 'react'
import HeaderHero from '../components/HeaderHero'
import BeritaList from '../components/BeritaList'

const Berita = () => {
  return (
    <div>
        <HeaderHero title="Berita"  description="Dapatkan Berita & Informasi Terbaru Seputar SMK Negeri 4 Tasikmalaya"/>
        <BeritaList />
    </div>
  )
}

export default Berita