import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Mentors = () => {
//   const [mentorsDatas,setMentorsDatas]=useState([]);
//     const getMentorsData=async(data)=>{
// const response = await axios.get("http://localhost:1000/v1/attendance/user/Mentors",data)
// console.log(response.data.data)
// setMentorsDatas (response.data.data);
//     }
//     useEffect(()=>{
//       getMentorsData();
//     },[])
  return (
    <>
 
<div class="md:px-32 py-8 w-full">
  <div class="shadow overflow-hidden rounded border-b border-gray-200">
  <Link to="/dashboard/UpdateProfile"><button className='bg-gray-800 py-3 px-4 text-white float-left ... '>Update</button></Link>
   <Link to="/dashboard/Addmentor"><button class="bg-gray-800 py-3 px-4 text-white  float-right ... ">Add Mentor</button></Link>  
    <table class="min-w-full bg-white mt-20">
      <thead class="bg-gray-800 text-white">
        <tr>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm flex space-x-4 ...">First name</th>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
        </tr>
      </thead>

    <tbody class="text-gray-700">
      {/* {
        mentorsDatas.map((mentorsData)=>(
          <tr>
        <td class="w-1/3 text-left py-3 px-4">{mentorsData?.firstName}</td>
        <td class="w-1/3 text-left py-3 px-4">{mentorsData?.lastName}</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500 no-underline" href="tel:622322662">{mentorsData?.phone}</a></td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500 no-underline" href="mailto:jonsmith@mail.com">{mentorsData?.email}</a></td>
      </tr>
        ))
      } */}
      
      <tr class="bg-gray-100">
        <td class="w-1/3 text-left py-3 px-4">Emma</td>
        <td class="w-1/3 text-left py-3 px-4">Johnson</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500 no-underline" href="tel:622322662">622322662</a></td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500 no-underline" href="mailto:jonsmith@mail.com">jonsmith@gmail.com</a></td>
      </tr>
      <tr>
        <td class="w-1/3 text-left py-3 px-4">Oliver</td>
        <td class="w-1/3 text-left py-3 px-4">Williams</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500 no-underline" href="tel:622322662">622322662</a></td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500 no-underline" href="mailto:jonsmith@mail.com">jonsmith@gmail.com</a></td>
      </tr>
      <tr class="bg-gray-100">
        <td class="w-1/3 text-left py-3 px-4">Isabella</td>
        <td class="w-1/3 text-left py-3 px-4">Brown</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500 no-underline" href="tel:622322662">622322662</a></td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500 no-underline" href="mailto:jonsmith@mail.com">jonsmith@gmail.com</a></td>
      </tr>
    </tbody>
    </table>
  </div>
</div>

    
    </>
  )
}

export default Mentors