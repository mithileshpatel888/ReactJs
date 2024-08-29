import React from 'react'
import {useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
        const data = useLoaderData()
//     const [data, setdata] = useState([])
//     useEffect(() => { 
//     fetch('https://api.github.com/users/mithileshpatel888')
//    .then(response => response.json())
//    .then(data =>{
//     console.log(data);
//     setdata(data)
//    })
      
//     }, [])
    
  return (
    <div className='bg-gray-300 text-2xl p-4 text-center'>Github Followers:- {data.followers}
      <img className='rounded-full' src={data.avatar_url} alt="Github picture" width={200} />
    </div>
  )
}

export default Github

export const githubLoder = async() =>{
  const response = await fetch('https://api.github.com/users/mithileshpatel888')
  return response.json()
}