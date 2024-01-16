import Navbar from "./components/HomeSection/header/Navbar"
import Footer from "./components/HomeSection/footer/Footer"
import Routing from './Routing'
import './App.css'


function AppHome() {
  return (
        <>
        <Navbar />
        <Routing/>
        <Footer />
        </>
  )
}

export default AppHome