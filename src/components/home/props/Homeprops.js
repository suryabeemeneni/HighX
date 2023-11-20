import React from 'react';
import propsLogo from '../../../images/propsImages/react-props.webp';
import './Homeprops.css'

const Homeprops = () => {
    return (
        <>
              <div className='props-main-div'>
                <div className='props-sub-div'>
                    <div className='props-image-div'>
                        <a href='' className='props-image-link'><img src={propsLogo} className='props-image'/></a>
                    </div>
                    <div className='props-containers-main-div'>
                        <div className='props-container1'>
                            <h1>How to Use Props in React.js</h1>
                        </div>
                        <div className='props-container2'>
                            <a href='' className='props-container2-link' style={{fontWeight:"550"}}><p>Props are an important concept to understand in React. You use props to pass data and values from one component to another to get dynamic and unique outputs.</p></a>
                        </div>
                        <div className='props-container3'>
                            <a href='' className='props-container3-link'><p className='props-container3-para'>Websites built with React like Facebook, Twitter, and Netflix use the same design patterns across many sections that just have different data. One of the main ways developers can achieve this functionality is by using props.

This article will explain what props are and we'll look at the syntax for passing and receiving props</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homeprops;