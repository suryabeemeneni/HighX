//     const {register,handleSubmit,formState:{errors}} = useForms();


//                 <input type='email'placeholder='emai id' {...register('email',{require:true,pattern:/^\S+@\S+$/})} />
//                 {errors.email && <p style={{color:"red"}}>email invalid</p>}


//                 <input type='password' placeholder='******'{...require('password',{require:true})} />
//                 {errors.password && <p style={{color:"red"}}>Password Invalid</p>}



//   <form onSubmit={handleSubmit(makesubmit)}>

//     const makesubmit = (data) => {
//         console.log(data);
//     }




// import React from 'react';
// import './HooksForm.css'
// import { useForm } from 'react-hook-form';

// const HooksFrom = () => {

//     const {register,handleSubmit,formState:{errors}} = useForm();

//     const makesubmit = (data) => {
//         console.log(data);
//     }

//     return (
//         <>
//         <div className='hooksform-main-div'>
//             <div className='hooksform-sub-div'>
//             <h2>React Form Hooks</h2>

//             {/* Using onSubmit to perform some action after submiting the login */}
//             <form onSubmit={handleSubmit(makesubmit)}>
//                 <div className='hooksform-input-fields'>
//                 <div className='hooksform-input'>
//                 <label>username : </label><br/>
//                 <input type='text'placeholder='username' {...register('username',{required:true})} />
//                 {errors.username && <p style={{color:"red"}}>username required</p>}
//                 </div>

//                 <div className='hooksform-input'>
//                 <label>emai ID : </label><br/>
//                 <input type='email'placeholder='emai id' {...register('email',{required:true,pattern:/^\S+@\S+$/})} />
//                 {errors.email && <p style={{color:"red"}}>email invalid</p>}
//                 </div>

//                 <div className='hooksform-input'>
//                 <label>password : </label><br/>
//                 <input type='password' placeholder='******'{...register('password',{required:true})} />
//                 {errors.password && <p style={{color:"red"}}>Password Invalid</p>}
//                 </div>

//                 <div className='hooksform-subbmit'><button type='submit' className='button-hooksform'>Login</button></div>
//                 </div>
//             </form>
//             </div>
//             </div>
//         </>
//     );
// };

// export default HooksFrom;