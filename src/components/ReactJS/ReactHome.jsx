import React from 'react';
import Homeprops from './home/props/Homeprops';
import Homehooks from './home/hooks/Homehooks';
import Homevalidation from './home/formvalidation/Homevalidation';

const ReactHome = () => {
    return (
        <>
            <Homeprops />
            <Homehooks />
            <Homevalidation />
        </>
    );
};

export default ReactHome;