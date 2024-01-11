import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import AboutUs from "./components/HomeSection/about/AboutUs"
import IncremenetDecrement from "./components/ReactJS/home/hooks/useState/IncrementDecrement"
import Incremenet from "./components/ReactJS/home/hooks/useState/Increment"
import Home from "./components/HomeSection/home"
import Ueffect from "./components/ReactJS/home/hooks/useEffect/Ueffect"
import UECP from "./components/ReactJS/home/hooks/useEffect/UECP"
import Usestate from "./components/ReactJS/home/hooks/useState/Usestate"
import Useeffect from "./components/ReactJS/home/hooks/useEffect/Useeffect"
import Useeffectwdp from "./components/ReactJS/home/hooks/useEffect/Useeffectwdp"
import Useeffectblankdeo from "./components/ReactJS/home/hooks/useEffect/Useeffectblankdeo"
import Sampleform from "./components/ReactJS/home/formvalidation/sampleform/Sampleform"
import Displayforms from "./components/ReactJS/home/formvalidation/sampleform/Displayforms"
import Formvalidhome from "./components/ReactJS/home/formvalidation/Formvalidhome"
import Validationform from "./components/ReactJS/home/formvalidation/validation/Validationform"
import HooksFrom from "./components/ReactJS/home/formvalidation/Hookforms/HooksFrom"
import Multipleforms from "./components/ReactJS/home/formvalidation/Multipleformfields/Multipleforms"
import Controlledform from "./components/ReactJS/home/formvalidation/controlledforms/Controlledform"
import Controlledformvalid from "./components/ReactJS/home/formvalidation/controlledforms/Controlledformvalid"
import Validationformcontrol from "./components/ReactJS/home/formvalidation/controlledforms/Validationformcontrol"
import LoginForm from "./components/ReactJS/home/formvalidation/sampleform/LoginForm/LoginForm"
import ReactHome from "./components/ReactJS/ReactHome";
import HtmlHome from './components/HTML/HtmlHome';
import MovieDetail from './components/ReactJS/home/API/MovieDetail';
import Homevalidation from './components/ReactJS/home/formvalidation/Homevalidation';
import Homehooks from './components/ReactJS/home/hooks/Homehooks';
import Homeprops from './components/ReactJS/home/props/Homeprops';
import ResponsiveCarouselHome from './components/ReactJS/home/ResponsiveCarousel/ResponsiveCarouselHome'
import APIHome from './components/ReactJS/home/API/APIHome';
import UMV from './components/ReactJS/home/UseStateMV/UMV';
import GitHubHome from './components/GitHub/GitHubHome';
import JavaScript from './components/JAVASCRIPT/JavaScript';
import CSSHome from './components/CSS/CSSHome';
import Circular from './components/ReactJS/home/Circular/Circular';

const Routing = () => {
    return (
        <>
        <Router>
          <Routes>
          {/* <Route path="/" element={<APIHome />} /> */}
          <Route  path='/' element={<Home/>} />
          <Route  path='/AboutUs' element={<AboutUs/>} />
          <Route  path='/increment&decrement' element={<IncremenetDecrement/>} />
          <Route  path='/increment' element={<Incremenet/>} />
          <Route  path='/ueeffect' element={<Ueffect/>} />
          <Route  path='/Useeffectwdp' element={<Useeffectwdp/>} />
          <Route  path='/Useeffectblankdeo' element={<Useeffectblankdeo/>} />
          <Route  path='/UECP' element={<UECP/>} />
          <Route  path='/Usestate' element={<Usestate/>} />
          <Route  path='/Useeffect' element={<Useeffect/>} />
          <Route  path='/Sampleform' element={<Sampleform/>} />
          <Route  path='/displayforms' element={<Displayforms/>} />
          <Route  path='/Formvalidhome' element={<Formvalidhome/>}/>
          <Route  path='/Validationform' element={<Validationform/>}/>
          <Route  path='/Multipleforms' element={<Multipleforms/>}/>
          <Route  path='/Controlledform' element={<Controlledform/>}/>
          <Route  path='/Controlledformvalid' element={<Controlledformvalid/>}/>
          <Route  path='/Validationformcontrol' element={<Validationformcontrol/>}/>
          <Route  path='/Hooksform' element={<HooksFrom/>}/>
          <Route  path='/LoginForm' element={<LoginForm/>}/>
          <Route  path='/ReactHome' element={<ReactHome/>}/>
          <Route  path='/htmlHome' element={<HtmlHome/>}/>
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path='/Homeprops' element={<Homeprops/>} />
          <Route path='/Homehooks' element={<Homehooks/>} />
          <Route path='/Homevalidation' element={<Homevalidation/>} />
          <Route path='/ResponsiveCarouselHome' element={<ResponsiveCarouselHome/>}/>
          <Route path='/APIHome' element={<APIHome/>}/>
          <Route path='/UMV' element={<UMV />}/>
          <Route path='/GitHubHome' element={<GitHubHome />}/>
          <Route path='/JavaScript' element={<JavaScript/>}/>
          <Route path='/CSSHome' element={<CSSHome/>}/>
          <Route path='?Circular' element={<Circular/>}/>
          {/* <Route path='' element={}/> */}
          </Routes>
        </Router> 
        </>
    );
};

export default Routing;