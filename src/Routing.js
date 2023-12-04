import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

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

const Routing = () => {
    return (
        <>
        <Router>
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
          <Route exact path='/LoginForm' component={LoginForm}/>
          <Route exact path='/ReactHome' component={ReactHome}/>
          <Route exact path='/htmlHome' component={HtmlHome}/>
          </Switch>
        </Router> 
        </>
    );
};

export default Routing;