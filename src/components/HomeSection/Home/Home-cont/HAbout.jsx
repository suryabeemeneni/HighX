import React from 'react'
import "./Home.css"
// import { isMobile } from "react-device-detect";
// import {FaAward} from "react-icons/fa"
// import {TbBooks} from "react-icons/tb"
// import {GiMedal} from "react-icons/gi"


const mob={
  height:"6cm",
  width:"4cm"

}

const desk={

}




const HAbout = () => {
//     const data=[
//         {id:1,
//             icon:<FaAward/>,title:"ECommerce Platform"},
//         {id:2,
//             icon:<TbBooks/>,title:"Employees",desc:""},
//         {id:3,
//             icon:<GiMedal/>,title:"Developers,Testers ,BA and Hr",desc:""},
//     ]

  return (
    <section id="about">
      <div className='container about__container'>
      
        
          <div className='about__portrait' 
        //   style={isMobile ? mob : desk}
          >
            <img src="https://media.wired.com/photos/64daad6b4a854832b16fd3bc/master/w_2560%2Cc_limit/How-to-Choose-a-Laptop-August-2023-Gear.jpg" alt='aboutiamge' height={320} width={150}/>
            <img src="https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-ladders-education-day_23-2149241014.jpg?w=2000" alt='aboutiamge' height={320} width={150}/>
          </div>

  <div>
          <h2 style={{color: "#092144"}}>Hola9</h2>
          <p style={{fontFamily:"sans-serif",color: "#092144", fontWeight: "700"}}>
              Our Vision is to make Hola9 one stop solution for local
              businesses, classifieds and largest business-to-business
              marketplace for India Where you can get business to business,
              Business to Customer and Customer to customer services at one
              place <ins><b style={{color:"red"}}>ECommerce Platform</b></ins>, focuses on expert services around
              Home, Life and Self and where the user need is customized
            </p>
          <div className='about__cards'>
          {/* {data.map(item=>(
              <div key={item.id} className="about__card">
                <span className='about__card-icon'>{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </div>
            ))} */}
          
          </div>
          </div>  
        
      </div>
    
          
    </section>
  )
}

export default HAbout
