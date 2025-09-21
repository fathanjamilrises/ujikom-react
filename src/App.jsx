import { Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Beranda from "./pages/Beranda";
import Profil from "./pages/Profil";
import Footer from "./components/ui/Footer";
import Berita from "./pages/Berita";
import Ekstrakulikuler from "./pages/Ekstrakulikuler";
import Galeri from "./pages/Galeri";
import DetailKompetensiKeahlian from "./pages/DetailKompetensiKeahlian";
import Wrapper from "./components/wrapper/Wrapper";
import BeritaDetail from "./pages/BeritaDetail";
export default function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <Wrapper>
        {/* Routing */}
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/ekstrakurikuler" element={<Ekstrakulikuler />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route
            path="/kompetensi-keahlian/:slug"
            element={<DetailKompetensiKeahlian />}
          />
          <Route path="/berita-detail/:slug" element={<BeritaDetail />} />
        </Routes>
      </Wrapper>

      {/* Footer */}
      <Footer />
    </div>
  );
}
