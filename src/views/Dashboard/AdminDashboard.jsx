
import React from 'react-dom'
import '../Dashboard/admin.css'
import {Link,Outlet } from 'react-router-dom'


const AdminDashboard = () => {
  
  return(
    
<div >
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
      <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
        <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-gray-800 dark:bg-gray-800 border-none">
          <img className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden" src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" alt='' />
          <span className="hidden md:block">ADMIN</span>
        </div>
        <div className="flex justify-between items-center h-14 bg-gray-800 dark:bg-gray-800 header-right">
          

        </div>
      </div>
      <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-gray-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
          <ul className="flex flex-col py-5 space-y-1 ml-0 pl-0">
            
            <li>
              <Link to="/dashboard" className="relative no-underline text-white flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                </span>
                <span className="ml-2 text-1xl tracking-wide truncate">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/students" className="relative no-underline text-white flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                <svg height="48" stroke="currentColor" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><title/><g id="Education"><path class="cls-1" d="M24.5,34h0C15.94,34,9,30.154,9,24V14H40V24C40,29.171,33.06,34,24.5,34Z"/><path class="cls-2" d="M46.171,9.991,27.3.764a7.518,7.518,0,0,0-6.6,0L1.829,9.991a3.26,3.26,0,0,0,.15,5.927L4.5,17l16.543,7.079a7.517,7.517,0,0,0,5.914,0L43.5,17l2.521-1.078A3.26,3.26,0,0,0,46.171,9.991Z"/><path class="cls-3" d="M40,38a1,1,0,0,1-1-1V19.361L24.918,12.14a1,1,0,1,1,.914-1.78L41,18.139V37A1,1,0,0,1,40,38Z"/><ellipse class="cls-1" cx="24.5" cy="11" rx="4.5" ry="3"/><circle class="cls-4" cx="40" cy="39" r="4"/></g></svg>
                </span>
                <span className="ml-2 text-1xl tracking-wide truncate">Students</span>
              </Link>
            </li>
            <li className='pt-6'>
              <Link to="/dashboard/counter" className=" relative no-underline text-white flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                </span>
                <span className="ml-2 text-1xl tracking-wide truncate">Counter</span>
              </Link>

            </li>
            
              
           
            <li className='pt-6'>
              <Link to="/dashboard/Mentors" className=" relative no-underline text-white flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
               <svg className='w-10 ' fill='currentColor' viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"/></svg>
                </span>
                <span className="ml-2 text-1xl tracking-wide truncate">Mentors</span>
              </Link>
              
              
            </li>
            {/* <li className='pt-6'>
              <Link to="/dashboard/UpdateProfile" className=" relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
               <svg className='w-10 ' fill='currentColor' viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"/></svg>
                </span>
                <span className="ml-2 text-2xl tracking-wide truncate">Update Profile</span>
              </Link>
              
              
            </li> */}
            
           
            <li className='pt-6'>
              <Link to="/dashboard/view" className=" relative flex flex-row no-underline text-white items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                <svg className='w-10 ' fill='currentColor' viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"/></svg>
                </span>
                <span className="ml-2 text-1xl tracking-wide truncate">Student Records</span>
              </Link>
              
            </li>
            <li className='pt-6'>
              <Link to="/dashboard/Permission" className=" relative flex flex-row no-underline text-white items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                </span>
                <span className="ml-2 text-1xl tracking-wide truncate">Permissions</span>
              </Link>
              
            </li>
            <li className='pt-6'>
              <Link to="/" className=" relative  no-underline text-white flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style></style></defs><title/><g id="logout"><line class="cls-1" x1="15.92" x2="28.92" y1="16" y2="16"/><path d="M23.93,25v3h-16V4h16V7h2V3a1,1,0,0,0-1-1h-18a1,1,0,0,0-1,1V29a1,1,0,0,0,1,1h18a1,1,0,0,0,1-1V25Z"/><line class="cls-1" x1="28.92" x2="24.92" y1="16" y2="20"/><line class="cls-1" x1="28.92" x2="24.92" y1="16" y2="12"/><line class="cls-1" x1="24.92" x2="24.92" y1="8.09" y2="6.09"/><line class="cls-1" x1="24.92" x2="24.92" y1="26" y2="24"/></g></svg>
                </span>
                <span className="ml-2 text-1xl tracking-wide truncate">Logout</span>
              </Link>
              
            </li>
            
            
          </ul>
          <p className="mb-14 px-5 py-3 hidden md:block text-center text-xl">Copyright @2022</p>
        </div>
      </div>
    
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">


        <Outlet />

    



      </div>
    </div>
  </div>)
}

export default AdminDashboard
