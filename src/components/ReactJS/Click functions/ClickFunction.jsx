
// change backgroundColor onclick

import React, { useState } from 'react'


const ToggleButton = () => {


    const [isOn , setIsOn] = useState(false);


    const handleToggleOn = ()=>{
        setIsOn(true)
    }


    const handleToggleOff = ()=>{
        setIsOn(false)
    }
return (
    <div style={
        { backgroundColor: isOn ? 'yellow' : 'darkblue',
        display:'flex' ,
        flexDirection:'column',
        margin:'50px 50px ',
        top:'10px',
        alignItems:'center',
        cursor:'pointer'
        }}>
<button className={`toggle-button ${isOn && 'on' }`}
style={{width:'50px'}}
onClick={handleToggleOn}>
    ON
</button><br></br>
<button className={`toggle-button ${isOn && 'off'}`}
style={{width:'50px'}}
onClick={handleToggleOff}>
    OFF
    </button>
</div>
)
}


export default ToggleButton;