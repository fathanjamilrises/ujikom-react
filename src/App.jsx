import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import Profil from "./pages/Profil";
import Footer from "./components/Footer";
import Berita from "./pages/Berita";
import Ekstrakulikuler from "./pages/Ekstrakulikuler";
export default function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/ekstrakurikuler" element={<Ekstrakulikuler />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}
