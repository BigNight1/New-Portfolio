import './App.css'
import Footer from './components/Footer.jsx'
import Presentacion from './components/Presentacion.jsx'
import Proyecto from './components/Proyecto.jsx'
import Sobremi from './components/Sobremi.jsx'
import Header from './components/header.jsx'

function App() {
  return (
    <>
      <Header/>
      <Presentacion/>
      <Sobremi/>
      <Proyecto/>
      {/* <Footer/> */}
    </>
  )
}

export default App
