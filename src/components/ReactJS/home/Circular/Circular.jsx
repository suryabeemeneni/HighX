// import React, { useState } from "react";
// import './Circular.css'

// const Circular = () => {
//   const [percentage, setPercentage] = useState(10);
//   const dashArray = 85 * Math.PI * 2;
//   const dashOffset = dashArray - (dashArray * percentage) / 100;
//   return (
//     <div>
//       <div>
//         <svg width={200} height={200} viewBox={"0 0 200 200"}>
//           <circle cx={200 / 2} cy={200 / 2} strokeWidth="15px" r="85" 
//           className="circle-background"/>

//           <circle cx={200 / 2} cy={200 / 2} strokeWidth="15px" r="85" 
//           className="circle-progress"
//           style={{strokeDasharray : dashArray, strokeDashoffset : dashOffset}}
//           transform={`rotate(-90 ${200 / 2} ${200 / 2})`}/>

//           <text x="50%" y="50%" dy="0.3em" textAnchor="middle">
//             {percentage}%
//           </text>
//         </svg>
//       </div>

//       <input
//         type="range"
//         min={1}
//         max={100}
//         step={1}
//         value={percentage}
//         onChange={(e) => setPercentage(e.target.value)}
//       />
//     </div>
//   );
// };

// export default Circular;





import React, { useState } from "react";
import './Circular.css'

const Circular = () => {
  const [percentage, setPercentage] = useState(10);
  const dashArray = 85 * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <div>
      <div>
  <svg width={200} height={200} viewBox="0 0 200 200">
    <circle cx={200 / 2} cy={200 / 2} strokeWidth="15px" r="85" className="circle-background"/>

    <circle cx={200 / 2} cy={200 / 2} strokeWidth="15px" r="85" 
      className="circle-progress"
      style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
      transform={`rotate(-90 ${200 / 2} ${200 / 2})`}/>



<foreignObject x="22" y="22.5" width="155" height="155">

<div xmlns="http://www.w3.org/1999/xhtml" style={{ borderRadius: '50%', overflow: 'hidden', width: '100%', height: '100%' }}>

    <img src="data:image/jpeg;base64,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" 
    style={{ width: '100%', height: '100%' }}/>
    </div>

</foreignObject>
<rect x="37.6%" y="44.5%" rx="50" ry="50" width="23%" height="20" fill="blue" />

    <text x="50%" y="50%" dy="0.3em" textAnchor="middle" fill="white">
      {percentage}%
    </text>
  </svg>
</div>

      <input
        type="range"
        min={1}
        max={100}
        step={1}
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
      />
    </div>
  );
};

export default Circular;



// <div style={isMobile ? mobileStyle : desktopStyle}>
// <svg width={130} height={130} viewBox={"0 0 200 200"}>
//   <foreignObject
//     x="22.5"
//     y="23.5"
//     width="156.5"
//     height="156.5"
//   >
//     <div className="dp-profile">
//       <img
//         className="dp-profile"
//         alt="error"
//         src={
//           userProfileDetails?.data.length === 0 ||
//           userProfileDetails?.data[0]?.fields?.image ==
//             "undefined"
//             ? // ? "https://img.icons8.com/external-sbts2018-lineal-color-sbts2018/2x/external-user-customer-support-sbts2018-lineal-color-sbts2018.png"
//               "data:image/jpeg;base64,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"
//             : userProfileDetails?.data[0]?.fields?.image
//         }
//       />
//     </div>
//   </foreignObject>
//   <circle
//     cx={200 / 2}
//     cy={200 / 2}
//     strokeWidth="15px"
//     r="85"
//     className="progress-circle-1"
//   />

//   <circle
//     cx={200 / 2}
//     cy={200 / 2}
//     strokeWidth="15px"
//     r="85"
//     className="progress-circle-2"
//     style={{
//       strokeDasharray: dashArray,
//       strokeDashoffset: dashOffset,
//     }}
//     transform={`rotate(-90 ${200 / 2} ${200 / 2})`}
//   />
//   <text
//     x="50%"
//     y="%"
//     dy="0.3em"
//     textAnchor="middle"
//     fill="white"
//     className="progress-circle-text"
//   >
//     {percentage}%
//   </text>
// </svg>
// <div>
//   <input
//     className="d-none"
//     type="range"
//     min={1}
//     max={100}
//     step={1}
//     value={percentage}
//     onChange={(e) => setPercentage(e.target.value)}
//   />
// </div>
// </div>