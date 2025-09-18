import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import Profil from "./pages/Profil";

export default function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </div>
  );
}
