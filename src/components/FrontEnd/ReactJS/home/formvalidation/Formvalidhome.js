import React from 'react';
import Displayforms from './sampleform/Displayforms';
import Validation from './validation/Validation';
import Multiplefromfilds from './Multipleformfields/Multipleformfields';
import Hookformshome from './Hookforms/Hookformshome';
import Homecontrolled from './controlledforms/Homecontrolled';

const Formvalidhome = () => {
    return (
        <div>
            <h1>controlled forms</h1>
            <Displayforms />
            <Validation />
            <Multiplefromfilds />
            <Homecontrolled />
            <h1>Uncontrolled forms</h1>
            <Hookformshome />
        </div>
    );
};

export default Formvalidhome;