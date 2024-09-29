import "./App.css";
import Experience from "./components/Experience/experience.jsx";
import Footer from "./components/Footer.jsx";
import Presentacion from "./components/Presentacion.jsx";
import Sobremi from "./components/Sobremi/Sobremi.jsx";
import Header from "./components/header/header.jsx";
import Proyecto from "./components/proyecto/Proyecto.jsx";
import 'flowbite';
import 'flowbite-react';

function App() {
  return (
    <>
      <Header />
      <Presentacion />
      <Experience />
      <Sobremi />
      <Proyecto />
      <Footer />
    </>
  );
}

export default App;
