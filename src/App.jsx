import "./App.css";
import ExperienceSidebar from "./components/Experience/Experiencenew.tsx";
import Footer from "./components/Footer.jsx";
import Presentacion from "./components/Presentacion.jsx";
import Sobremi from "./components/Sobremi/Sobremi.jsx";
import Header from "./components/header/header.jsx";
import Proyecto from "./components/proyecto/Proyecto.jsx";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Presentacion />
      <ExperienceSidebar />
      <Sobremi />
      <Proyecto />
      <Footer />
    </main>
  );
}

export default App;
