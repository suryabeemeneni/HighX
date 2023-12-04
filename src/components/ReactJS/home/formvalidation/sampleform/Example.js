import React, { useState } from 'react';

const Example = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors , setErrors] = useState("");


       
       
    const handleChangeUsername= (e) =>
    {
   


        if(username.trim() === "")
        {
            setErrors((error)=>({...error,username:"enter valid name " }))
            return false;
        }
        else if (username.length <=6)
        {
            setErrors((error) => ({...error, username:"enter minimum 6 char"}) )
            return false;
        }


        else
        {
            setErrors((error)=>({...error, username:""}))
            return true;
        }
    }


    const handleChangePassword= (e) =>
    {
       
        if(password.trim() === "")
        {
            setErrors((error) => ({...error, password:"enter password"}))
            return false;

        }
        else
        {
            setErrors((error) => ({...error, password:""}))
            return true;
        }
    }
    const handleClick=(event)=>{
        event.preventDefault();
        const ishandleChangeUsername = handleChangeUsername();
        const ishandleChangePassword = handleChangePassword();


        if(ishandleChangeUsername&&ishandleChangePassword)
        {
            alert("form submitted succesfully.")
           
        }
    }
    return (
        <>
                   <form >
            <br></br>
            <label>Enter Your Name:</label><br></br>
            <input type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}} ></input><br></br>
            <div style={{color:"red"}}>{errors.username}</div>


            <label>Enter Password:</label><br></br>
            <input type='text' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input><br></br>
            <div style={{color:"red"}}>{errors.password}</div>


            <br></br>
            <button onClick={handleClick}>Submit</button>
        </form> 
        </>
    );
};

export default Example;