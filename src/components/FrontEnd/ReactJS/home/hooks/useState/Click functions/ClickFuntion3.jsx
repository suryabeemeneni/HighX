import React, { useState } from 'react'


const ToggleButtons = () => {

    const [color, setColor] = useState("gray")


return (
<div style={{backgroundColor:color, display:"flex",flexDirection:"column", alignItems:"center"}}>

    <button style={{width:'100px'}} onClick={()=>{document.div.backgroundColor=blue}} >ON</button>

    <br></br>

    <button style={{width:'100px'}} >OFF</button>

    </div>

)};


export default ToggleButtons;