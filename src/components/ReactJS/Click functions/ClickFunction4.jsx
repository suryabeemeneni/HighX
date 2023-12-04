
// Change background on click button

import React, { useState } from 'react'


const ToggleButtons = () => {

    const [color, setColor] = useState("gray")

    const handleClickON = () => {
        setColor("blue")
    }

    const handleClickOFF = () => {
        setColor("yellow")
    }

return (
<div style={{backgroundColor:color, display:"flex",flexDirection:"column", alignItems:"center"}}>

    <button style={{width:'100px'}} onClick={handleClickON} >ON</button>

    <br></br>

    <button style={{width:'100px'}} onClick={handleClickOFF}  >OFF</button>

    </div>

)};


export default ToggleButtons;