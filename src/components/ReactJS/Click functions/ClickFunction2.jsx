
// change background color on type


import React, { useState } from 'react'


const ToggleButton = () => {

    const [color, setColor] = useState("")

return (
<div style={{backgroundColor:color, display:"flex",flexDirection:"column", alignItems:"center"}}>

    <input type='text' style={{width:'100px'}} value={color} onChange={(e) => {setColor(e.target.value)}}></input>

    <br></br>

    <button style={{width:'100px'}} >OFF</button>

    </div>

)};


export default ToggleButton;