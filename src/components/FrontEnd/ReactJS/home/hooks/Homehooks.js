import React from 'react';
import '../hooks/Homehooks.css';
import typesofhooks from '../../images/hooksImages/typesofhooks.png'

const Homehooks = () => {
    return (
        <>
            <div className='hooks-main-div'>
                <div className='hooks-sub-div'>

                <div className='hooks-sub-container1-div'>
                
                <div className='hooks-containers-main'>
                <div className='hooks-container'>
                    <a href='/useState' className='hooks-link' ><h1  style={{fontSize:"80%"}}>useState()</h1></a>
                </div>
                <div className='hooks-container'>
                <a href='/useEffect' className='hooks-link' ><h1  style={{fontSize:"80%"}}>useEffect()</h1></a>
                </div>
                <div className='hooks-container'>
                <a href='' className='hooks-link'><h1  style={{fontSize:"80%"}}>useContext()</h1></a>
                </div>
                </div>

                <div className='hooks-containers-main'>
                <div className='hooks-container'>
                <a href='' className='hooks-link'><h1  style={{fontSize:"80%"}}>useReducer()</h1></a>
                </div>
                <div className='hooks-container'>
                <a href='' className='hooks-link'><h1  style={{fontSize:"80%"}}>useMemo()</h1></a>
                </div>
                <div className='hooks-container'>
                <a href='' className='hooks-link'><h1  style={{fontSize:"80%"}}>useCallback()</h1></a>
                </div>
                <div className='hooks-container'>
                <a href='' className='hooks-link'><h1  style={{fontSize:"80%"}}>useRef()</h1></a>
                </div>
                </div>

                <div className='hooks-containers-main'>
                <div className='hooks-container'>
                <a href='' className='hooks-link'><h1 style={{fontSize:"80%"}}>Custom hooks()</h1></a>
                </div>
                </div>
                </div>



                <div className='hooks-sub-container2-div'>
                    <img src={typesofhooks} style={{width:"100%",height:"100%",borderRadius:"30px"}}/>
                </div>
            </div>
            </div>
        </>
    );
};

export default Homehooks;