"use client"
import axios from 'axios';
// import React, { useEffect } from 'react'
import { useState } from 'react';
const page = () => {
  const [Imagess, setImagess] = useState([]);
  // useEffect(() => {
  //   getImages()
  // }, [])
  
  const getImages = async() =>{
 try {
  const response = await axios.get("https://picsum.photos/v2/list")
  const data = response.data;
  setImagess(data)
  console.log(Imagess)
  
 } catch (error) {
   console.log("Error fetching images");
 }
}
  return (
     <>
     <h1 className=' flex text-center font-bold 	text-4xl justify-center'>Get Images In One Click</h1>
      <div>
      
        <button onClick={getImages} className=' bg-red-500 px-5 py-6 text-white font-bold'> Get Images</button>
        <div className=' p-10'>
              {Imagess.map((elem ,i)=>
              {
                return <img key={i} 
                src={elem.download_url
                }
                width={400}
                height={400}
                className=' m-8 rounded inline-block'/>
              })}
        </div>
      </div>
    </>
  );
};

export default page;
