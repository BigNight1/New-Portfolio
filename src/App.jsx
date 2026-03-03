import "./App.css";
import { Routes, Route } from "react-router-dom";
import ExperienceSidebar from "./components/Experience/Experiencenew.tsx";
import Footer from "./components/Footer.jsx";
import Presentacion from "./components/Presentacion.jsx";
import ProjectsGrid from "./components/ProjectsGrid/ProjectsGrid.jsx";
import ServicioPage from "./pages/ServicioPage.jsx";
import Sobremi from "./components/Sobremi/Sobremi.jsx";
import Header from "./components/header/header.jsx";

function HomePage() {
  return (
    <>
      <Presentacion />
      <ExperienceSidebar />
      <Sobremi />
      <ProjectsGrid />
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
      </Routes>
    </main>
  );
}

export default App;
