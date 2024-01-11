// import "./App.css"
import Navbar from "./components/HomeSection/header/Navbar"
import Footerslide from "./components/HomeSection/footer/Footerslide"
import Footer from "./components/HomeSection/footer/Footer"
import Routing from './Routing'
import './App.css'


function App() {
  return (
    <>
        <Navbar />
        <Routing/>
        <Footerslide />
        <Footer />
        </>
  )
}

export default App
