import "./App.css";
import { Routes, Route } from "react-router-dom";
import ExperienceSidebar from "./components/Experience/Experiencenew.tsx";
import Footer from "./components/Footer.jsx";
import Presentacion from "./components/Presentacion.jsx";
import ServicioPage from "./pages/ServicioPage.jsx";
import Sobremi from "./components/Sobremi/Sobremi.jsx";
import Header from "./components/header/header.jsx";
import CalculadoraPage from "./pages/CalculadoraPage.jsx";
import ContactoPage from "./pages/ContactoPage.jsx";
import ProyectosPage from "./pages/ProyectosPage.jsx";
import ProyectoDetallePage from "./pages/ProyectoDetallePage.jsx";
import ResumenPage from "./pages/ResumenPage.jsx";


function HomePage() {
  return (
    <>
      <Presentacion />
      <ExperienceSidebar />
      <Sobremi />
      <Footer />
    </>
  );
}

function App() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicio" element={<ServicioPage />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
        <Route path="/proyectos/:slug" element={<ProyectoDetallePage />} />
        <Route path="/calculadora" element={<CalculadoraPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/resumen" element={<ResumenPage />} />
      </Routes>
    </main>
  );
}

export default App;
