import React from 'react'
import './Edit.css'

    const Edit = ({onChange}) => {
  return (
    <div className='update'>
        <div className="edit-head">
        <h1>Update your Profile</h1>
        </div>

        <form className='edit-main-form'>
        
        <div className="edit-form">
        <label for="editName">Name:</label>
        <input type='text' value='Jhon'></input>
        </div>
       
        <div className="edit-form">
        <label for="editEmail">Email:</label>
        <input type="email" id="editEmail" value="john.doe@example.com"></input>
        </div>

        <div className="edit-form">
        <label for="phonenumber">Ph Num:</label>
        <input type="phonenumber" id="phonenumber" value="12345677"></input>
        </div>

        <div className="edit-form">
        <label for="phonenumber">Ph Num:</label>
        <input type="phonenumber" id="phonenumber" value="12345677"></input>
        </div>

        </form>

</div>


  )
}


export default Edit;