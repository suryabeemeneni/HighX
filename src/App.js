// import "./App.css"
import Navbar from "./components/HomeSection/header/Navbar"
import Footerslide from "./components/HomeSection/footer/Footerslide"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AboutUs from "./components/about/AboutUs"
import IncremenetDecrement from "./components/home/hooks/useState/IncrementDecrement"
import Incremenet from "./components/home/hooks/useState/Increment"
import Footer from "./components/HomeSection/footer/Footer"
import Home from "./components/HomeSection/home"
import Ueffect from "./components/home/hooks/useEffect/Ueffect"
import UECP from "./components/home/hooks/useEffect/UECP"
import Usestate from "./components/home/hooks/useState/Usestate"
import Useeffect from "./components/home/hooks/useEffect/Useeffect"
import Useeffectwdp from "./components/home/hooks/useEffect/Useeffectwdp"
import Useeffectblankdeo from "./components/home/hooks/useEffect/Useeffectblankdeo"
import Sampleform from "./components/home/formvalidation/sampleform/Sampleform"
import Displayforms from "./components/home/formvalidation/sampleform/Displayforms"
import Formvalidhome from "./components/home/formvalidation/Formvalidhome"
import Validationform from "./components/home/formvalidation/validation/Validationform"
import HooksFrom from "./components/home/formvalidation/Hookforms/HooksFrom"
import Multipleforms from "./components/home/formvalidation/Multipleformfields/Multipleforms"
import Controlledform from "./components/home/formvalidation/controlledforms/Controlledform"
import Controlledformvalid from "./components/home/formvalidation/controlledforms/Controlledformvalid"
import Validationformcontrol from "./components/home/formvalidation/controlledforms/Validationformcontrol"


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/AboutUs' component={AboutUs} />
          <Route exact path='/increment&decrement' component={IncremenetDecrement} />
          <Route exact path='/increment' component={Incremenet} />
          <Route exact path='/ueeffect' component={Ueffect} />
          <Route exact path='/Useeffectwdp' component={Useeffectwdp} />
          <Route exact path='/Useeffectblankdeo' component={Useeffectblankdeo} />
          <Route exact path='/UECP' component={UECP} />
          <Route exact path='/Usestate' component={Usestate} />
          <Route exact path='/Useeffect' component={Useeffect} />
          <Route exact path='/Sampleform' component={Sampleform} />
          <Route exact path='/displayforms' component={Displayforms} />
          <Route exact path='/Formvalidhome' component={Formvalidhome}/>
          <Route exact path='/Validationform' component={Validationform}/>
          <Route exact path='/Multipleforms' component={Multipleforms}/>
          <Route exact path='/Controlledform' component={Controlledform}/>
          <Route exact path='/Controlledformvalid' component={Controlledformvalid}/>
          <Route exact path='/Validationformcontrol' component={Validationformcontrol}/>
          <Route exact path='/Hooksform' component={HooksFrom}/>
        </Switch>
        <Footerslide />
        <Footer />
      </Router>
    </>
  )
}

export default App
