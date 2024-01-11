// import React, { useContext, useEffect, useState } from "react";
// import "./profileDashboard.css";
// import Profile from "../../Profile/Profile";
// import { decrypt } from "../../../Base/encryptDecrypt/encryptDecrypt";
// import { localUrl, url } from "../../../env";
// import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "../../../../App";
// import { Button, Form } from "antd";
// import { useDispatch, useSelector } from "react-redux/es/exports";
// import { getUserPlan } from "../../../../store/allPlanDetails";
// import UserDashPlanDetails from "./UserDashPlanDetails";
// import { userProfileDataApi } from "../../../../store/UserProfileDetailsSlice";
// import { isMobile } from "react-device-detect";
// import { GoVerified } from "react-icons/go";


// const ProfileDashboard = ({onClick,Plan}) => {
//   // const { databusiness } = props;
//   console.log(Plan,"gh")

//   const mobileStyle = {
//     textAlign: "center",
//     width: "80px",
//     margin: "10px",
//   };
//   const desktopStyle = {
//        width: "100px",
//     margin: "20px",
//     height: "100px"
//   };
//   const [active, setActive] = useState("");
//   const [name, setName] = useState();
//   const [plan, setPlan] = useState();
//   const [nameFlag, setnameFlag] = useState(false);
//   const [ads, setads] = useState([]);
//   const [Blog, setBlog] = useState([]);
//   const [FeaturedData, setFeaturedData] = useState(0);
//   const [id, setId] = useState();
//   const [error, setError] = useState("");
//  const[verified,setVerified]=useState(false)
//   const dispatch = useDispatch();
//   // const [business, setBusiness] = useState(true)


//   // for showing every plan ads

//   // const [users, setUsers] = useState([]);
//   const [image, setImage] = useState(null);
//   const [profileform, setprofileform] = useState({
//     name: "",
//     email: "",
//     PhoneNumber: "",
//     address: "",
//     state: "",
//     city: "",
//     zipcode: "",
//   });
//   // const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   let navigate = useNavigate();
//   // var [wishlistmain , setWishlist] = useState([]);
//   const dataUser = useContext(UserContext);
//   let barererToken = "Bearer " + localStorage.getItem("access_token");
//   const [lastLoginTime, setLastLoginTime] = useState(null);
//   const imageValue = useSelector((state) => state.profile);

//   // cosnt userProfile Datails
//   const userProfileDetails = useSelector((state) => state.userProfileData);
//   //userPaln data in details
//   const { loading } = useSelector((state) => state.planData);

//   //all ads count
//   const [allAdsCount, setAllAdsCount] = useState({});

//   const [staticLoader, setStaticLoader] = useState(false);
//   let userId = localStorage.getItem("userid");
//   // alll user plan api call in redux
//   const [loading2, setLoading2] = useState(false);

//   const getUserData = async (id) => {
//     setLoading2(true);
//     try {
//       await dispatch(getUserPlan(userId));
//       setLoading2(false);
//     } catch {
//       setLoading2(false);
//     }
//   };
//   useEffect(() => {
//     getUserData(userId);
//   }, [userId]);

//   useEffect(() => {
//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", barererToken);

//     var formdata = new FormData();
//     var requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: formdata,
//       redirect: "follow",
//     };

//     fetch(url + "api/user/adsby/", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         setads(result);
//       })
//       .catch((error) => console.log("error", error));
//     countvalue();
//   }, []);
//   const lastloginget = () => {
//     var formdata = new FormData();
//     formdata.append("user",150);
//     // formdata.append("user", dataUser.userid);
  
//     var requestOptions = {
//       method: "POST",
//       body: formdata,
//       redirect: "follow",
//     };
  
//     fetch("https://databytess.com/api/user/lastLoginTimeGet", requestOptions)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((result) => {
//         // Check the structure of the API response and log it for debugging
//         console.log('API Response:', result);
        
//         if (result?.fields?.lastloginValue) {
//           setLastLoginTime(result.fields.lastloginValue);
//         } else {
//           console.error('Expected data not found in API response');
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };
  
//   useEffect(() => {
//     setPlan(dataUser.activePlan);

//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", barererToken);
//     var requestOptions = {
//       method: "GET",
//       headers: myHeaders,
//       redirect: "follow",
//     };
//     fetch(url + "api/user/profile/", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         setprofileform((profileform.name = result.name));
//         setName(result.name);
//         setEmail(result.email);
//         setId(result.id);
//         lastloginget(result?.id);
//         setImage(result.image);
//         localStorage.setItem("userid", result.id);
//       })
//       .catch((error) => {
//         setError("Having Some Issue");
//       });
//     checkname();
//   }, []);

//   // useEffect(()=>{

//   // var myHeaders = new Headers();
//   // myHeaders.append("Cookie", "csrftoken=EmLuPRUNkf6K6gJITHLqCb44GCBa3XdZbwQ9z0697rglSv3GfLbtztOqBKdfAxaB");

//   // var formdata = new FormData();
//   // formdata.append("user", localStorage.getItem("userid"));

//   // var requestOptions = {
//   //   method: 'GET',
//   //   headers: myHeaders,
//   //   body: formdata,
//   //   redirect: 'follow'
//   // };

//   // fetch(localUrl+"adsapi/getPricingViews/", requestOptions)
//   //   .then(response => response.json())
//   // },[])

//   useEffect(() => {
//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", barererToken);

//     var formdata = new FormData();
//     var requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: formdata,
//       redirect: "follow",
//     };

//     fetch(url + "api/user/blogsby/", requestOptions)
//       .then((response) => response.json())
//       .then((result) => setBlog(result))
//       .catch((error) => console.log("error", error));
//     countvalue();
//   }, []);

//   const countvalue = () => {
//     ads.map((result) => {
//       if (result.fields.is_featured == false) {
//         setFeaturedData(FeaturedData + 1);
//       }
//     });
//   };

//   const checkname = () => {
//     setTimeout(() => {
//       if (name.startsWith("user")) {
//         setnameFlag(true);
//       }
//     }, 2000);
//   };

//   useEffect(() => {
//     dispatch(userProfileDataApi(userId));
//   }, [userId]);




// // console.log(verified,"lo")
//   return (
//     <>
//         <div className="top-background"></div>
//     <div className="top-container-p">
//       <div><h4 className="m-0">Profile</h4>
//       {/* <i>Welcome <b>{name}</b></i></div> */}
//       <i>Welcome back <b>Surya</b></i></div>
      

//         <div className="">
//           <Link to="/dashboard/Profile" onClick={onClick} 
//           className="d-image-link  d-profile-i">
//             {/* <i className="fa fa-user " /> */}
//             <p className="mb-0"> Profile &nbsp; </p>
//             <i className="fas fa-arrow-circle-right  d-arrow-i"></i>
//           </Link>
//         </div>

//     </div>
//       <div className="container ">
//         <div className="row">
//           {/* Middle Content Area */}
//           <div className="col-md-12 col-xs-12 col-sm-12">
//             <section
//               className="search-result-item "
//               style={{
//                 boxShadow: "2px 2px 8px lightgray",
//               }}
//             >
//               <div className="row" >
//                 <div className="col-xs-4 col-sm-12 d-flex d-profile-c">
//                 <div className="dashp-top">
//                 <a className="d-image-link" href="#">
//                     {/* {default_image} */}
//                     {userProfileDetails.status ? (
//                       <div className="w-100 d-flex justify-content-center h-100 align-items-center text-center h-100">
//                         <div class="loader "></div>
//                       </div>
//                     ) : (
//                       <img
//                         style={isMobile ? mobileStyle : desktopStyle}
//                         className="dprofile"
//                         alt="error"
//                         src={
//                           userProfileDetails?.data.length === 0 ||
//                           userProfileDetails?.data[0]?.fields?.image ==
//                             "undefined"
//                             ? "https://img.icons8.com/external-sbts2018-lineal-color-sbts2018/2x/external-user-customer-support-sbts2018-lineal-color-sbts2018.png"
//                             : userProfileDetails?.data[0]?.fields?.image
//                         }
//                       />
//                     )}
//                   </a>
//                   <div className="dp-content col-xs-12 col-md-14">
//                   <div className="w-100">
//                     <div className="row w-100">
//                       <div className=" w-100">
                 
//                         <p className="m-0"><b>Name : {name}</b></p>             


                    
                      
//                         {/* <h4 className="search-result-item-heading">{name}</h4> */}
//                         <p className="search m-0">Email : {email}</p>

//                         <p className="description">
//                           You last logged in at :
//                           {lastLoginTime}
//                         </p>
//                         {Plan?null:
//                         <div className="">
//                         <span className="label label-warning">
//                           {
//                             dataUser?.activePlan[
//                               dataUser?.activePlan?.length - 1
//                             ]?.fields?.category
//                           }
//                         </span>
//                         &nbsp;
//                         {/* <b className="label label-success">Dealer</b> */}
//                         {dataUser?.activePlan[dataUser?.activePlan - 1]?.fields
//                           ?.category == "Free" ? (
//                           <span className="">
//                             <Button type="danger">
//                               <Link to="/pricing">
//                                 Upgrade your plan to Featured Plan
//                               </Link>
//                             </Button>
//                           </span>
//                         ) : dataUser?.activePlan[dataUser?.activePlan - 1]
//                             ?.fields?.category == "Premium" ? (
//                           <span className="">
//                             <Button type="danger">
//                               <Link to="/pricing">
//                                 Upgrade your plan to Recommended
//                               </Link>
//                             </Button>
//                           </span>
//                         ) : dataUser?.activePlan[dataUser?.activePlan - 1]
//                             ?.fields?.category == "Featured" ? (
//                           <span className="">
//                             <Button type="danger">
//                               <Link to="/pricing">
//                                 Upgrade your plan to Premium
//                               </Link>
//                             </Button>
//                           </span>
//                         ) : (
//                           <span className="mx-1">
//                             <Button
//                               type="button"
//                               style={{
//                                 // boxShadow: "2px 1px red, -2px -1px red",
//                                 background: "linear-gradient(to right, #2e95ff, #0061c6)",
//                                 color: "white",
//                                 borderRadius: "5px",
//                                 border: "0px solid red",
//                                 fontSize: "16px",
                         
//                               }}
//                             >
//                               <Link to="/pricing">Change Plan</Link>
//                             </Button>
//                           </span>
//                         )}
//                        </div>}
//                 </div>

//                     </div>
//                     </div>
//                   </div>
//                   </div>
//                   <div className="dashp-down">
//                   <div className="w-100 ">
//                         {loading ? (
//                           <div className="w-100 d-flex justify-content-center h-100 align-items-center bg-dark text-center ">
//                             <div class="loader "></div>
//                           </div>
//                         ) : (
//                         <UserDashPlanDetails />
//                         )}
//                       </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
          
//             {/* <div className="dashboard-menu-container">
//               <ul>
//                 <li className="active">
//                   <Link to="/dashboard">
//                     <div className="menu-name">Profile </div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/aboutUs/">
//                     <div className="menu-name">Contact Us</div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/activeAds/">
//                     <div className="menu-name">My Ads</div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/dashboard/wishlist/">
//                     <div className="menu-name">Favourites Ads</div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/ads-listing/">
//                     <div className="menu-name">Search Ads nbnbn</div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/add-product/">
//                     <div className="menu-name">Create Ads</div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/logout/">
//                     <div className="menu-name">Logout</div>
//                   </Link>
//                 </li>
//               </ul>
//             </div> */}
//           </div>
//         </div>
//       </div>
//       <div className="col-xl-9 col-lg-12 col-md-12">
//         {active === "Profile" && <Profile />}
//       </div>
//     </>
//   );
// };

// export default ProfileDashboard;





// // ---------------------------------------------------------------------- //


// import React, { useContext, useEffect, useState } from "react";
// import "./profileDashboard.css";
// import Profile from "../../Profile/Profile";
// import { decrypt } from "../../../Base/encryptDecrypt/encryptDecrypt";
// import { localUrl, url } from "../../../env";
// import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "../../../../App";
// import { Button, Form } from "antd";
// import { useDispatch, useSelector } from "react-redux/es/exports";
// import { getUserPlan } from "../../../../store/allPlanDetails";
// import UserDashPlanDetails from "./UserDashPlanDetails";
// import { userProfileDataApi } from "../../../../store/UserProfileDetailsSlice";
// import { isMobile } from "react-device-detect";
// import { GoVerified } from "react-icons/go";


// const ProfileDashboard = ({onClick,Plan}) => {
//   // const { databusiness } = props;
//   console.log(Plan,"gh")

//   const mobileStyle = {
//     textAlign: "center",
//     width: "80px",
//     margin: "10px",
//   };
//   const desktopStyle = {
//     width: "100px",
//     margin: "20px",
//     height: "100px"
//   };
//   const [active, setActive] = useState("");
//   const [name, setName] = useState();
//   const [plan, setPlan] = useState();
//   const [nameFlag, setnameFlag] = useState(false);
//   const [ads, setads] = useState([]);
//   const [Blog, setBlog] = useState([]);
//   const [FeaturedData, setFeaturedData] = useState(0);
//   const [id, setId] = useState();
//   const [error, setError] = useState("");
//  const[verified,setVerified]=useState(false)
//   const dispatch = useDispatch();
//   // const [business, setBusiness] = useState(true)


//   // for showing every plan ads

//   // const [users, setUsers] = useState([]);
//   const [image, setImage] = useState(null);
//   const [profileform, setprofileform] = useState({
//     name: "",
//     email: "",
//     PhoneNumber: "",
//     address: "",
//     state: "",
//     city: "",
//     zipcode: "",
//   });
//   // const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   let navigate = useNavigate();
//   // var [wishlistmain , setWishlist] = useState([]);
//   const dataUser = useContext(UserContext);
//   let barererToken = "Bearer " + localStorage.getItem("access_token");
//   const [lastLoginTime, setLastLoginTime] = useState(null);
//   const imageValue = useSelector((state) => state.profile);

//   // cosnt userProfile Datails
//   const userProfileDetails = useSelector((state) => state.userProfileData);
//   //userPaln data in details
//   const { loading } = useSelector((state) => state.planData);

//   //all ads count
//   const [allAdsCount, setAllAdsCount] = useState({});

//   const [staticLoader, setStaticLoader] = useState(false);
//   let userId = localStorage.getItem("userid");
//   // alll user plan api call in redux
//   const [loading2, setLoading2] = useState(false);

//   const getUserData = async (id) => {
//     setLoading2(true);
//     try {
//       await dispatch(getUserPlan(userId));
//       setLoading2(false);
//     } catch {
//       setLoading2(false);
//     }
//   };
//   useEffect(() => {
//     getUserData(userId);
//   }, [userId]);

//   useEffect(() => {
//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", barererToken);

//     var formdata = new FormData();
//     var requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: formdata,
//       redirect: "follow",
//     };

//     fetch(url + "api/user/adsby/", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         setads(result);
//       })
//       .catch((error) => console.log("error", error));
//     countvalue();
//   }, []);
//   const lastloginget = () => {
//     var formdata = new FormData();
//     formdata.append("user",150);
//     // formdata.append("user", dataUser.userid);
  
//     var requestOptions = {
//       method: "POST",
//       body: formdata,
//       redirect: "follow",
//     };
  
//     fetch("https://databytess.com/api/user/lastLoginTimeGet", requestOptions)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((result) => {
//         // Check the structure of the API response and log it for debugging
//         console.log('API Response:', result);
        
//         if (result?.fields?.lastloginValue) {
//           setLastLoginTime(result.fields.lastloginValue);
//         } else {
//           console.error('Expected data not found in API response');
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };
  
//   useEffect(() => {
//     setPlan(dataUser.activePlan);

//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", barererToken);
//     var requestOptions = {
//       method: "GET",
//       headers: myHeaders,
//       redirect: "follow",
//     };
//     fetch(url + "api/user/profile/", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         setprofileform((profileform.name = result.name));
//         setName(result.name);
//         setEmail(result.email);
//         setId(result.id);
//         lastloginget(result?.id);
//         setImage(result.image);
//         localStorage.setItem("userid", result.id);
//       })
//       .catch((error) => {
//         setError("Having Some Issue");
//       });
//     checkname();
//   }, []);

//   // useEffect(()=>{

//   // var myHeaders = new Headers();
//   // myHeaders.append("Cookie", "csrftoken=EmLuPRUNkf6K6gJITHLqCb44GCBa3XdZbwQ9z0697rglSv3GfLbtztOqBKdfAxaB");

//   // var formdata = new FormData();
//   // formdata.append("user", localStorage.getItem("userid"));

//   // var requestOptions = {
//   //   method: 'GET',
//   //   headers: myHeaders,
//   //   body: formdata,
//   //   redirect: 'follow'
//   // };

//   // fetch(localUrl+"adsapi/getPricingViews/", requestOptions)
//   //   .then(response => response.json())
//   // },[])

//   useEffect(() => {
//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", barererToken);

//     var formdata = new FormData();
//     var requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: formdata,
//       redirect: "follow",
//     };

//     fetch(url + "api/user/blogsby/", requestOptions)
//       .then((response) => response.json())
//       .then((result) => setBlog(result))
//       .catch((error) => console.log("error", error));
//     countvalue();
//   }, []);

//   const countvalue = () => {
//     ads.map((result) => {
//       if (result.fields.is_featured == false) {
//         setFeaturedData(FeaturedData + 1);
//       }
//     });
//   };

//   const checkname = () => {
//     setTimeout(() => {
//       if (name.startsWith("user")) {
//         setnameFlag(true);
//       }
//     }, 2000);
//   };

//   useEffect(() => {
//     dispatch(userProfileDataApi(userId));
//   }, [userId]);




// // console.log(verified,"lo")
//   return (
//     <>
//       <div className="container ">
//         <div className="row">
//           {/* Middle Content Area */}
//           <div className="col-md-12 col-xs-12 col-sm-12">
//             <section
//               className="search-result-item "
//               style={{
//                 boxShadow: "2px 2px 5px 2px gray",
            
//               }}
//             >
//               <div className="row" >
//                 <div className="col-md-2 col-xs-4 col-sm-12" >

//                   <a className="image-link" href="#">
//                     {/* {default_image} */}
//                     {userProfileDetails.status ? (
//                       <div className="w-100 d-flex justify-content-center h-100 align-items-center text-center ">
//                         <div class="loader "></div>
//                       </div>
//                     ) : (
//                       <img
//                         style={isMobile ? mobileStyle : desktopStyle}
//                         className="dprofile"
//                         alt="error"
//                         src={
//                           userProfileDetails?.data.length === 0 ||
//                           userProfileDetails?.data[0]?.fields?.image ==
//                             "undefined"
//                             ? "https://img.icons8.com/external-sbts2018-lineal-color-sbts2018/2x/external-user-customer-support-sbts2018-lineal-color-sbts2018.png"
//                             : userProfileDetails?.data[0]?.fields?.image
//                         }
//                       />
//                     )}
//                   </a>
//                 </div>
//                 <div className="col-md-10 col-xs-8 col-sm-12">
//                   <div className="">
//                     <div className="row ">
//                       <div className="col-md-4 col-sm-12 col-xs-12 ">
                 
//                         <h4 className="search-result-item-heading">{name}</h4>             


                    
                      
//                         {/* <h4 className="search-result-item-heading">{name}</h4> */}
//                         <h7 className="search ">{email}</h7>
//                         <p className="info">
//                           <span>
//                             <Link to="/dashboard/Profile" onClick={onClick}>
//                               <i className="fa fa-user " />
//                               Profile
//                             </Link>
//                           </span>
                      
//                         </p>
//                         <p className="description">
//                           You last logged in at :
//                           {lastLoginTime}
//                         </p>
//                         {Plan?null:
//                         <div className="">
//                         <span className="label label-warning">
//                           {
//                             dataUser?.activePlan[
//                               dataUser?.activePlan?.length - 1
//                             ]?.fields?.category
//                           }
//                         </span>
//                         &nbsp;
//                         {/* <b className="label label-success">Dealer</b> */}
//                         {dataUser?.activePlan[dataUser?.activePlan - 1]?.fields
//                           ?.category == "Free" ? (
//                           <span className="">
//                             <Button type="danger">
//                               <Link to="/pricing">
//                                 Upgrade your plan to Featured Plan
//                               </Link>
//                             </Button>
//                           </span>
//                         ) : dataUser?.activePlan[dataUser?.activePlan - 1]
//                             ?.fields?.category == "Premium" ? (
//                           <span className="">
//                             <Button type="danger">
//                               <Link to="/pricing">
//                                 Upgrade your plan to Recommended
//                               </Link>
//                             </Button>
//                           </span>
//                         ) : dataUser?.activePlan[dataUser?.activePlan - 1]
//                             ?.fields?.category == "Featured" ? (
//                           <span className="">
//                             <Button type="danger">
//                               <Link to="/pricing">
//                                 Upgrade your plan to Premium
//                               </Link>
//                             </Button>
//                           </span>
//                         ) : (
//                           <span className="mx-1">
//                             <Button
//                               type="button"
//                               style={{
//                                 // boxShadow: "2px 1px red, -2px -1px red",
//                                 background: "#8a2be2",
//                                 color: "white",
//                                 borderRadius: "5px",
//                                 border: "0px solid red",
//                                 fontSize: "16px",
                         
//                               }}
//                             >
//                               <Link to="/pricing">Change Plan</Link>
//                             </Button>
//                           </span>
//                         )}
//                        </div>}
//                       </div>
//                       <div className="col-md-8 col-sm-12 col-xs-12">
//                         {loading ? (
//                           <div className="w-100 d-flex justify-content-center h-100 align-items-center bg-dark text-center ">
//                             <div class="loader "></div>
//                           </div>
//                         ) : (
//                         <UserDashPlanDetails />
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
          
//             {/* <div className="dashboard-menu-container">
//               <ul>
//                 <li className="active">
//                   <Link to="/dashboard">
//                     <div className="menu-name">Profile </div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/aboutUs/">
//                     <div className="menu-name">Contact Us</div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/activeAds/">
//                     <div className="menu-name">My Ads</div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/dashboard/wishlist/">
//                     <div className="menu-name">Favourites Ads</div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/ads-listing/">
//                     <div className="menu-name">Search Ads nbnbn</div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/add-product/">
//                     <div className="menu-name">Create Ads</div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/logout/">
//                     <div className="menu-name">Logout</div>
//                   </Link>
//                 </li>
//               </ul>
//             </div> */}
//           </div>
//         </div>
//       </div>
//       <div className="col-xl-9 col-lg-12 col-md-12">
//         {active === "Profile" && <Profile />}
//       </div>
//     </>
//   );
// };

// export default ProfileDashboard;





// // ----------------- santhosh ref check --------------------------------- //

// import React, { useContext, useEffect, useState } from "react";
// import "./profileDashboard.css";
// import Profile from "../../Profile/Profile";
// import { decrypt } from "../../../Base/encryptDecrypt/encryptDecrypt";
// import { localUrl, url } from "../../../env";
// import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "../../../../App";
// import { Button, Form } from "antd";
// import { useDispatch, useSelector } from "react-redux/es/exports";
// import { getUserPlan } from "../../../../store/allPlanDetails";
// import UserDashPlanDetails from "./UserDashPlanDetails";
// import { userProfileDataApi } from "../../../../store/UserProfileDetailsSlice";
// import { isMobile } from "react-device-detect";
// import { GoVerified } from "react-icons/go";


// const ProfileDashboard = ({onClick,Plan}) => {
//   // const { databusiness } = props;
//   console.log(Plan,"gh")

//   const mobileStyle = {
//     textAlign: "center",
//     width: "80px",
//     margin: "10px",
//   };
//   const desktopStyle = {
//     width: "100px",
//     margin: "20px",
//     height: "100px"
//   };
//   const [active, setActive] = useState("");
//   const [name, setName] = useState();
//   const [plan, setPlan] = useState();
//   const [nameFlag, setnameFlag] = useState(false);
//   const [ads, setads] = useState([]);
//   const [Blog, setBlog] = useState([]);
//   const [FeaturedData, setFeaturedData] = useState(0);
//   const [id, setId] = useState();
//   const [error, setError] = useState("");
//  const[verified,setVerified]=useState(false)
//   const dispatch = useDispatch();
//   // const [business, setBusiness] = useState(true)


//   // for showing every plan ads

//   // const [users, setUsers] = useState([]);
//   const [image, setImage] = useState(null);
//   const [profileform, setprofileform] = useState({
//     name: "",
//     email: "",
//     PhoneNumber: "",
//     address: "",
//     state: "",
//     city: "",
//     zipcode: "",
//   });
//   // const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   let navigate = useNavigate();
//   // var [wishlistmain , setWishlist] = useState([]);
//   const dataUser = useContext(UserContext);
//   let barererToken = "Bearer " + localStorage.getItem("access_token");
//   const [lastLoginTime, setLastLoginTime] = useState(null);
//   const imageValue = useSelector((state) => state.profile);

//   // cosnt userProfile Datails
//   const userProfileDetails = useSelector((state) => state.userProfileData);
//   //userPaln data in details
//   const { loading } = useSelector((state) => state.planData);

//   //all ads count
//   const [allAdsCount, setAllAdsCount] = useState({});

//   const [staticLoader, setStaticLoader] = useState(false);
//   let userId = localStorage.getItem("userid");
//   // alll user plan api call in redux
//   const [loading2, setLoading2] = useState(false);

//   const getUserData = async (id) => {
//     setLoading2(true);
//     try {
//       await dispatch(getUserPlan(userId));
//       setLoading2(false);
//     } catch {
//       setLoading2(false);
//     }
//   };
//   useEffect(() => {
//     getUserData(userId);
//   }, [userId]);

//   useEffect(() => {
//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", barererToken);

//     var formdata = new FormData();
//     var requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: formdata,
//       redirect: "follow",
//     };

//     fetch(url + "api/user/adsby/", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         setads(result);
//       })
//       .catch((error) => console.log("error", error));
//     countvalue();
//   }, []);
//   const lastloginget = () => {
//     var formdata = new FormData();
//     formdata.append("user",150);
//     // formdata.append("user", dataUser.userid);
  
//     var requestOptions = {
//       method: "POST",
//       body: formdata,
//       redirect: "follow",
//     };
  
//     fetch("https://databytess.com/api/user/lastLoginTimeGet", requestOptions)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((result) => {
//         // Check the structure of the API response and log it for debugging
//         console.log('API Response:', result);
        
//         if (result?.fields?.lastloginValue) {
//           setLastLoginTime(result.fields.lastloginValue);
//         } else {
//           console.error('Expected data not found in API response');
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };
  
//   useEffect(() => {
//     setPlan(dataUser.activePlan);

//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", barererToken);
//     var requestOptions = {
//       method: "GET",
//       headers: myHeaders,
//       redirect: "follow",
//     };
//     fetch(url + "api/user/profile/", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         setprofileform((profileform.name = result.name));
//         setName(result.name);
//         setEmail(result.email);
//         setId(result.id);
//         lastloginget(result?.id);
//         setImage(result.image);
//         localStorage.setItem("userid", result.id);
//       })
//       .catch((error) => {
//         setError("Having Some Issue");
//       });
//     checkname();
//   }, []);

//   // useEffect(()=>{

//   // var myHeaders = new Headers();
//   // myHeaders.append("Cookie", "csrftoken=EmLuPRUNkf6K6gJITHLqCb44GCBa3XdZbwQ9z0697rglSv3GfLbtztOqBKdfAxaB");

//   // var formdata = new FormData();
//   // formdata.append("user", localStorage.getItem("userid"));

//   // var requestOptions = {
//   //   method: 'GET',
//   //   headers: myHeaders,
//   //   body: formdata,
//   //   redirect: 'follow'
//   // };

//   // fetch(localUrl+"adsapi/getPricingViews/", requestOptions)
//   //   .then(response => response.json())
//   // },[])

//   useEffect(() => {
//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", barererToken);

//     var formdata = new FormData();
//     var requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: formdata,
//       redirect: "follow",
//     };

//     fetch(url + "api/user/blogsby/", requestOptions)
//       .then((response) => response.json())
//       .then((result) => setBlog(result))
//       .catch((error) => console.log("error", error));
//     countvalue();
//   }, []);

//   const countvalue = () => {
//     ads.map((result) => {
//       if (result.fields.is_featured == false) {
//         setFeaturedData(FeaturedData + 1);
//       }
//     });
//   };

//   const checkname = () => {
//     setTimeout(() => {
//       if (name.startsWith("user")) {
//         setnameFlag(true);
//       }
//     }, 2000);
//   };

//   useEffect(() => {
//     dispatch(userProfileDataApi(userId));
//   }, [userId]);




// // console.log(verified,"lo")
//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           {/* Middle Content Area */}
//           <div className="col-md-12 col-xs-12 col-sm-12 p-0">
//             <section
//               className="search-result-item "
//               style={{
//                 boxShadow: "0 0 2px blue",
//                 background : 'linear-gradient(to right, #eef1f4, #3f8bdc)'
//               }}
//             >
//               <div className="row" >
//                 <div className="col-md-2 col-xs-4 col-sm-12" >

//                   <a className="image-link" href="#">
//                     {/* {default_image} */}
//                     {userProfileDetails.status ? (
//                       <div className="w-100 d-flex justify-content-center h-100 align-items-center text-center ">
//                         <div class="loader "></div>
//                       </div>
//                     ) : (
//                       <img
//                         style={isMobile ? mobileStyle : desktopStyle}
//                         className="dprofile"
//                         alt="error"
//                         src={
//                           userProfileDetails?.data.length === 0 ||
//                           userProfileDetails?.data[0]?.fields?.image ==
//                             "undefined"
//                             ? "https://img.icons8.com/external-sbts2018-lineal-color-sbts2018/2x/external-user-customer-support-sbts2018-lineal-color-sbts2018.png"
//                             : userProfileDetails?.data[0]?.fields?.image
//                         }
//                       />
//                     )}
//                   </a>
//                 </div>
//                 <div className="col-md-10 col-xs-8 col-sm-12">
//                   <div className="">
//                     <div className="row ">
//                       <div className="col-md-4 col-sm-12 col-xs-12 ">
                 
//                         <h4 className="search-result-item-heading">{name}</h4>             


                    
                      
//                         {/* <h4 className="search-result-item-heading">{name}</h4> */}
//                         <h7 className="search ">{email}</h7>
//                         <p className="info">
//                           <span>
//                             <Link to="/dashboard/Profile" onClick={onClick}>
//                               <i className="fa fa-user " />
//                               Profile
//                             </Link>
//                           </span>
                      
//                         </p>
//                         <p className="description">
//                           You last logged in at :
//                           {lastLoginTime}
//                         </p>
//                         {Plan?null:
//                         <div className="">
//                         <span className="label label-warning">
//                           {
//                             dataUser?.activePlan[
//                               dataUser?.activePlan?.length - 1
//                             ]?.fields?.category
//                           }
//                         </span>
//                         &nbsp;
//                         {/* <b className="label label-success">Dealer</b> */}
//                         {dataUser?.activePlan[dataUser?.activePlan - 1]?.fields
//                           ?.category == "Free" ? (
//                           <span className="">
//                             <Button type="danger">
//                               <Link to="/pricing">
//                                 Upgrade your plan to Featured Plan
//                               </Link>
//                             </Button>
//                           </span>
//                         ) : dataUser?.activePlan[dataUser?.activePlan - 1]
//                             ?.fields?.category == "Premium" ? (
//                           <span className="">
//                             <Button type="danger">
//                               <Link to="/pricing">
//                                 Upgrade your plan to Recommended
//                               </Link>
//                             </Button>
//                           </span>
//                         ) : dataUser?.activePlan[dataUser?.activePlan - 1]
//                             ?.fields?.category == "Featured" ? (
//                           <span className="">
//                             <Button type="danger">
//                               <Link to="/pricing">
//                                 Upgrade your plan to Premium
//                               </Link>
//                             </Button>
//                           </span>
//                         ) : (
//                           <span className="mx-1">
//                             <Button
//                               type="button"
//                               style={{
//                                 // boxShadow: "2px 1px red, -2px -1px red",
//                                 background: "linear-gradient(to right, #2e95ff, #0061c6)",
//                                 // ":hover":{background : ' linear-gradient(to right, black, #0061c6)'},
//                                 color: "white",
//                                 borderRadius: "5px",
//                                 border: "0px solid red",
//                                 fontSize: "16px",
                         
//                               }}
//                             >
//                               <Link to="/pricing">Change Plan</Link>
//                             </Button>
//                           </span>
//                         )}
//                        </div>}
//                       </div>
//                       <div className="col-md-8 col-sm-12 col-xs-12">
//                         {loading ? (
//                           <div className="w-100 d-flex justify-content-center h-100 align-items-center bg-dark text-center ">
//                             <div class="loader "></div>
//                           </div>
//                         ) : (
//                         <UserDashPlanDetails />
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
          
//             {/* <div className="dashboard-menu-container">
//               <ul>
//                 <li className="active">
//                   <Link to="/dashboard">
//                     <div className="menu-name">Profile </div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/aboutUs/">
//                     <div className="menu-name">Contact Us</div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/activeAds/">
//                     <div className="menu-name">My Ads</div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/dashboard/wishlist/">
//                     <div className="menu-name">Favourites Ads</div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/ads-listing/">
//                     <div className="menu-name">Search Ads nbnbn</div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/add-product/">
//                     <div className="menu-name">Create Ads</div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/logout/">
//                     <div className="menu-name">Logout</div>
//                   </Link>
//                 </li>
//               </ul>
//             </div> */}
//           </div>
//         </div>
//       </div>
//       <div className="col-xl-9 col-lg-12 col-md-12">
//         {active === "Profile" && <Profile />}
//       </div>
//     </>
//   );
// };

// export default ProfileDashboard;


// //  ------------------ surya designed ---------------------------------------//

// import React, { useContext, useEffect, useState } from "react";
// import "./profileDashboard.css";
// import Profile from "../../Profile/Profile";
// import { decrypt } from "../../../Base/encryptDecrypt/encryptDecrypt";
// import { localUrl, url } from "../../../env";
// import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "../../../../App";
// import { Button, Form } from "antd";
// import { useDispatch, useSelector } from "react-redux/es/exports";
// import { getUserPlan } from "../../../../store/allPlanDetails";
// import UserDashPlanDetails from "./UserDashPlanDetails";
// import { userProfileDataApi } from "../../../../store/UserProfileDetailsSlice";
// import { isMobile } from "react-device-detect";
// import { GoVerified } from "react-icons/go";


// const ProfileDashboard = ({onClick,Plan}) => {
//   // const { databusiness } = props;
//   console.log(Plan,"gh")

//   const mobileStyle = {
//     textAlign: "center",
//     width: "80px",
//     margin: "10px",
//   };
//   const desktopStyle = {
//        width: "100px",
//     margin: "20px",
//     height: "100px"
//   };
//   const [active, setActive] = useState("");
//   const [name, setName] = useState();
//   const [plan, setPlan] = useState();
//   const [nameFlag, setnameFlag] = useState(false);
//   const [ads, setads] = useState([]);
//   const [Blog, setBlog] = useState([]);
//   const [FeaturedData, setFeaturedData] = useState(0);
//   const [id, setId] = useState();
//   const [error, setError] = useState("");
//  const[verified,setVerified]=useState(false)
//   const dispatch = useDispatch();
//   // const [business, setBusiness] = useState(true)


//   // for showing every plan ads

//   // const [users, setUsers] = useState([]);
//   const [image, setImage] = useState(null);
//   const [profileform, setprofileform] = useState({
//     name: "",
//     email: "",
//     PhoneNumber: "",
//     address: "",
//     state: "",
//     city: "",
//     zipcode: "",
//   });
//   // const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   let navigate = useNavigate();
//   // var [wishlistmain , setWishlist] = useState([]);
//   const dataUser = useContext(UserContext);
//   let barererToken = "Bearer " + localStorage.getItem("access_token");
//   const [lastLoginTime, setLastLoginTime] = useState(null);
//   const imageValue = useSelector((state) => state.profile);

//   // cosnt userProfile Datails
//   const userProfileDetails = useSelector((state) => state.userProfileData);
//   //userPaln data in details
//   const { loading } = useSelector((state) => state.planData);

//   //all ads count
//   const [allAdsCount, setAllAdsCount] = useState({});

//   const [staticLoader, setStaticLoader] = useState(false);
//   let userId = localStorage.getItem("userid");
//   // alll user plan api call in redux
//   const [loading2, setLoading2] = useState(false);

//   const getUserData = async (id) => {
//     setLoading2(true);
//     try {
//       await dispatch(getUserPlan(userId));
//       setLoading2(false);
//     } catch {
//       setLoading2(false);
//     }
//   };
//   useEffect(() => {
//     getUserData(userId);
//   }, [userId]);

//   useEffect(() => {
//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", barererToken);

//     var formdata = new FormData();
//     var requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: formdata,
//       redirect: "follow",
//     };

//     fetch(url + "api/user/adsby/", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         setads(result);
//       })
//       .catch((error) => console.log("error", error));
//     countvalue();
//   }, []);
//   const lastloginget = () => {
//     var formdata = new FormData();
//     formdata.append("user",150);
//     // formdata.append("user", dataUser.userid);
  
//     var requestOptions = {
//       method: "POST",
//       body: formdata,
//       redirect: "follow",
//     };
  
//     fetch("https://databytess.com/api/user/lastLoginTimeGet", requestOptions)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((result) => {
//         // Check the structure of the API response and log it for debugging
//         console.log('API Response:', result);
        
//         if (result?.fields?.lastloginValue) {
//           setLastLoginTime(result.fields.lastloginValue);
//         } else {
//           console.error('Expected data not found in API response');
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };
  
//   useEffect(() => {
//     setPlan(dataUser.activePlan);

//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", barererToken);
//     var requestOptions = {
//       method: "GET",
//       headers: myHeaders,
//       redirect: "follow",
//     };
//     fetch(url + "api/user/profile/", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         setprofileform((profileform.name = result.name));
//         setName(result.name);
//         setEmail(result.email);
//         setId(result.id);
//         lastloginget(result?.id);
//         setImage(result.image);
//         localStorage.setItem("userid", result.id);
//       })
//       .catch((error) => {
//         setError("Having Some Issue");
//       });
//     checkname();
//   }, []);

//   // useEffect(()=>{

//   // var myHeaders = new Headers();
//   // myHeaders.append("Cookie", "csrftoken=EmLuPRUNkf6K6gJITHLqCb44GCBa3XdZbwQ9z0697rglSv3GfLbtztOqBKdfAxaB");

//   // var formdata = new FormData();
//   // formdata.append("user", localStorage.getItem("userid"));

//   // var requestOptions = {
//   //   method: 'GET',
//   //   headers: myHeaders,
//   //   body: formdata,
//   //   redirect: 'follow'
//   // };

//   // fetch(localUrl+"adsapi/getPricingViews/", requestOptions)
//   //   .then(response => response.json())
//   // },[])

//   useEffect(() => {
//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", barererToken);

//     var formdata = new FormData();
//     var requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: formdata,
//       redirect: "follow",
//     };

//     fetch(url + "api/user/blogsby/", requestOptions)
//       .then((response) => response.json())
//       .then((result) => setBlog(result))
//       .catch((error) => console.log("error", error));
//     countvalue();
//   }, []);

//   const countvalue = () => {
//     ads.map((result) => {
//       if (result.fields.is_featured == false) {
//         setFeaturedData(FeaturedData + 1);
//       }
//     });
//   };

//   const checkname = () => {
//     setTimeout(() => {
//       if (name.startsWith("user")) {
//         setnameFlag(true);
//       }
//     }, 2000);
//   };

//   useEffect(() => {
//     dispatch(userProfileDataApi(userId));
//   }, [userId]);




// // console.log(verified,"lo")
//   return (
//     <>
//         <div className="top-background"></div>
//     <div className="top-container-p">
//       <div><h4 className="m-0">Profile</h4>
//       {/* <i>Welcome <b>{name}</b></i></div> */}
//       <i>Welcome back <b>Surya</b></i></div>
      

//         <div className="">
//           <Link to="/dashboard/Profile" onClick={onClick} 
//           className="d-image-link  d-profile-i">
//             {/* <i className="fa fa-user " /> */}
//             <p className="mb-0"> Profile &nbsp; </p>
//             <i className="fas fa-arrow-circle-right  d-arrow-i"></i>
//           </Link>
//         </div>

//     </div>
//       <div className="container ">
//         <div className="row">
//           {/* Middle Content Area */}
//           <div className="col-md-12 col-xs-12 col-sm-12 p-0">
//             <section
//               className="search-result-item "
//               style={{
//                 boxShadow: "2px 2px 8px lightgray",
//               }}
//             >
//               <div className="row" >
//                 <div className="col-xs-4 col-sm-12 d-flex d-profile-c">
//                 <div className="dashp-top">
//                 <a className="d-image-link" href="#">
//                     {/* {default_image} */}
//                     {userProfileDetails.status ? (
//                       <div className="w-100 d-flex justify-content-center h-100 align-items-center text-center h-100">
//                         <div class="loader "></div>
//                       </div>
//                     ) : (
//                       <img
//                         style={isMobile ? mobileStyle : desktopStyle}
//                         className="dprofile"
//                         alt="error"
//                         src={
//                           userProfileDetails?.data.length === 0 ||
//                           userProfileDetails?.data[0]?.fields?.image ==
//                             "undefined"
//                             ? "https://img.icons8.com/external-sbts2018-lineal-color-sbts2018/2x/external-user-customer-support-sbts2018-lineal-color-sbts2018.png"
//                             : userProfileDetails?.data[0]?.fields?.image
//                         }
//                       />
//                     )}
//                   </a>
//                   <div className="dp-content col-xs-12 col-md-14">
//                   <div className="w-100">
//                     <div className="row w-100">
//                       <div className=" w-100">
                 
//                         <p className="m-0"><b>Name : {name}</b></p>             


                    
                      
//                         {/* <h4 className="search-result-item-heading">{name}</h4> */}
//                         <p className="search m-0">Email : {email}</p>

//                         <p className="description">
//                           You last logged in at :
//                           {lastLoginTime}
//                         </p>
//                         {Plan?null:
//                         <div className="">
//                         <span className="label label-warning">
//                           {
//                             dataUser?.activePlan[
//                               dataUser?.activePlan?.length - 1
//                             ]?.fields?.category
//                           }
//                         </span>
//                         &nbsp;
//                         {/* <b className="label label-success">Dealer</b> */}
//                         {dataUser?.activePlan[dataUser?.activePlan - 1]?.fields
//                           ?.category == "Free" ? (
//                           <span className="">
//                             <Button type="danger">
//                               <Link to="/pricing">
//                                 Upgrade your plan to Featured Plan
//                               </Link>
//                             </Button>
//                           </span>
//                         ) : dataUser?.activePlan[dataUser?.activePlan - 1]
//                             ?.fields?.category == "Premium" ? (
//                           <span className="">
//                             <Button type="danger">
//                               <Link to="/pricing">
//                                 Upgrade your plan to Recommended
//                               </Link>
//                             </Button>
//                           </span>
//                         ) : dataUser?.activePlan[dataUser?.activePlan - 1]
//                             ?.fields?.category == "Featured" ? (
//                           <span className="">
//                             <Button type="danger">
//                               <Link to="/pricing">
//                                 Upgrade your plan to Premium
//                               </Link>
//                             </Button>
//                           </span>
//                         ) : (
//                           <span className="mx-1">
//                             <Button
//                               type="button"
//                               style={{
//                                 // boxShadow: "2px 1px red, -2px -1px red",
//                                 background: "linear-gradient(to right, #2e95ff, #0061c6)",
//                                 color: "white",
//                                 borderRadius: "5px",
//                                 border: "0px solid red",
//                                 fontSize: "16px",
                         
//                               }}
//                             >
//                               <Link to="/pricing">Change Plan</Link>
//                             </Button>
//                           </span>
//                         )}
//                        </div>}
//                 </div>

//                     </div>
//                     </div>
//                   </div>
//                   </div>
//                   <div className="dashp-down">
//                   <div className="w-100 ">
//                         {loading ? (
//                           <div className="w-100 d-flex justify-content-center h-100 align-items-center bg-dark text-center ">
//                             <div class="loader "></div>
//                           </div>
//                         ) : (
//                         <UserDashPlanDetails />
//                         )}
//                       </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
          
//             {/* <div className="dashboard-menu-container">
//               <ul>
//                 <li className="active">
//                   <Link to="/dashboard">
//                     <div className="menu-name">Profile </div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/aboutUs/">
//                     <div className="menu-name">Contact Us</div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/activeAds/">
//                     <div className="menu-name">My Ads</div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/dashboard/wishlist/">
//                     <div className="menu-name">Favourites Ads</div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/ads-listing/">
//                     <div className="menu-name">Search Ads nbnbn</div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/add-product/">
//                     <div className="menu-name">Create Ads</div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/logout/">
//                     <div className="menu-name">Logout</div>
//                   </Link>
//                 </li>
//               </ul>
//             </div> */}
//           </div>
//         </div>
//       </div>
//       <div className="col-xl-9 col-lg-12 col-md-12">
//         {active === "Profile" && <Profile />}
//       </div>
//     </>
//   );
// };

// export default ProfileDashboard;


