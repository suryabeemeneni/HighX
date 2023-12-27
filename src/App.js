// import "./App.css"
import Navbar from "./components/HomeSection/header/Navbar"
import Footerslide from "./components/HomeSection/footer/Footerslide"
import Footer from "./components/HomeSection/footer/Footer"
import Routing from './Routing'
import Team from './components/team/Team'

// import API from './components/API'
import ResponsiveCarouselHome from "./components/ReactJS/ResponsiveCarousel/ResponsiveCarouselHome"
import APIHome from "./components/API/APIHome"
import AddService from "./components/API/AddService/AddService"



function App() {
  return (
    <>
        <Navbar />
        {/* <AddService/>
        <APIHome /> */}
        {/* <API /> */}
        {/* <ResponsiveCarouselHome /> */}
        {/* <Team /> */}
        <Routing/>
        <Footerslide />
        <Footer />
        </>
  )
}

export default App
