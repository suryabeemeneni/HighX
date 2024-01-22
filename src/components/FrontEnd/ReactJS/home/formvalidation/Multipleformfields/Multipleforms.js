import React, { useState } from 'react';
import './Multipleforms.css'

const Multipleforms = () => {

    const [username, setUsername] = useState ('');
    const [pasword, setPassword] = useState ('');

    const [qualification, setQualification] = useState('select')

    const handleSubmit = () => {
        alert(username + "" +pasword+""+qualification+""+skills)
    }

    const [skills, setskills] = useState([])
    const handlechange = (e) => {
        const {value,checked} = e.target;

        if (checked) {
            setskills(pre =>[...pre,value])
        }
    }

    return (
        <>
            <div className='multipleforms-main-div'>
                <div className='multipleforms-sub-div'>
                    <h2>Multiple form fields</h2>
                    <form onSubmit={handleSubmit}>
                    <div className='multipleforms-input-fields'>
                       <div className='multipleforms-input'>
                        <label>Username : </label>
                        <input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>

                        <div className='multipleforms-input'>
                        <label>Password : </label>
                        <input type='text' placeholder='*******' value={pasword} onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <div className='multipleforms-input'>
                        <label>Select Qualification</label><br/>
                        <select value={qualification} onChange={(e) => setQualification(e.target.value)}>
                            <option value="Select">Select</option>
                            <option value="B.Tech">B.Tech</option>
                            <option value="MCA">MCA</option>
                            <option value="MBA">MBA</option>
                        </select>
                        </div>

                        <div className='multipleforms-input' style={{gap:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <input type='checkbox' value="HTML" onChange={handlechange}/>HTML
                        <input type='checkbox'value="CSS" onChange={handlechange}/>CSS
                        <input type='checkbox'value="Java Script" onChange={handlechange}/>Java Script
                        <input type='checkbox'value="React JS" onChange={handlechange}/>Ract JS
                        </div>

                        <div className='multipleforms-subbmit'><input type='submit' value="Register" /></div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Multipleforms;