import React,{useState, useEffect} from 'react';
import '../useState/Increment.css';

const Ueffect = () => {
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);

    const incrementChange = () => {
        setX(X+1);
    }
    const decrementChange = () => {
        setY(Y-1);
    }

    // // no dependencies      --> everytime X value changes useEffect will work 
    useEffect (function () {document.title = X+"side effect working"})


    // // Blank Dependencies (empty array [])      -->    this side effect runs after the initial rendering (works one time only as first render)
    useEffect (function () {document.title = "side effect works for onetime"},[])


    return (
        <div className='somebasicuseState'>

        <div>
            <button onClick={incrementChange}>useEff X</button>
            <button onClick={decrementChange}>useEff Y</button>
        </div>
    </div>
    );
};

export default Ueffect;