import React, {useEffect,useState} from 'react';

const Useeffectwdp = () => {

    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);

    const incrementChange = () => {
        setX(X+1);
    }
    const decrementChange = () => {
        setY(Y-1);
    }

        // Has props or state values [prop1,prop2, ... , state1,state2];
    //  -->     this side effect runs only when any dependency vaue changes
    useEffect(function () {{document.title = "You Clicked"+X+"times"}},[X]);
    useEffect(function(){document.title = "You Clicked"+Y+"times"},[Y])
    return (
        <div className='somebasicuseState'>

        <div>
            <button onClick={incrementChange}>useEff X</button>
            <button onClick={decrementChange}>useEff Y</button>
        </div>
        </div>
    );
};

export default Useeffectwdp;