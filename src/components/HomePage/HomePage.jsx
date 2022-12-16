import React from 'react'
import Navbar from '../HomePage/Navbar'
import FooterB from './FooterB'


function Home() {
  return (
    <>

       <Navbar/>




  <main>
   <div className="relative px-6 lg:px-8" style={{height:500}}>
      <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
        <div>

          <div>
            <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">SheCanCode Attendance System</h1>
            <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center text-2xl">
            Do your attendance request here and <br/>
                other actions can be made as needed
            </p>

          </div>
        </div>
        {/* <button 
      className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full text-xl"
      >Ask attendance</button> */}

      </div>
    </div>


  </main>




           <div className='box3 bg-gray-900' style={{height:100}}>
            <FooterB/>
           </div>
  
    </>
  )
}

export default Home
