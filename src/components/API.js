// import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';

// const API = () => {

//     const [data, usedata] = useState([])

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts').then(

//         Response => Response.json()

//         // ).then(json => console.log(json))
//         ).then(json => usedata(json))

//     },[])

//     return (
//         <>
//           {/* Hello wrold   */}

//           {data.map(item => 
//             <li key={item.id}>{item.id} {item.title}</li>)}
//         </>
//     );
// };

// export default API;

// --------------------------------------------------------Calling API's------------------------------------------------------------------- //

// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';

// const API = () => {

//     const [results, setResults] = useState([]);
//     const controller = new AbortController();

//     useEffect(() => {

//         async function getData() {
//             const responce = await fetch('https://jsonplaceholder.typicode.com/posts', {signal : controller})
//             const data = await responce.json();
//             setResults(data);
//         }

//         getData();
//         console.log(results);

//         return () => {controller.abort()}
//     },[])
//     return (
//         <>
//            Hello 
//         </>
//     );
// };

// export default API;


// ------------------------------------------------------Calling Multipe API's-------------------------------------------------------------- //

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const API = () => {

    const [results, setResults] = useState([]);
    const controller = new AbortController();

    useEffect(() => {

        async function getData() {
            const category = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json());

            const post = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json());

            const data = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json());

            return Promise.all([category, post, data])
        }

        getData().then((res) => console.log(res))

    },[])
    return (
        <>
           s
        </>
    );
};

export default API;