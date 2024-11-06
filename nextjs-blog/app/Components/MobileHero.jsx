'use client'
import React, { useState } from 'react'

import Image from 'next/image';
import search from '../Assest/magnifying-glass.png'

function MobileHero() {
    const [btnColor, setBtnColor] = useState('white');
    const [btnColor2, setBtnColor2] = useState('white');
    const [btnColor3, setBtnColor3] = useState('white');
    const [btnColor4, setBtnColor4] = useState('white');
  
  
    const [Color, setColor] = useState('rgb(37 99 235 / var(--tw-text-opacity))');
    const [Color2, setColor2] = useState('rgb(37 99 235 / var(--tw-text-opacity))');
    const [Color3, setColor3] = useState('rgb(37 99 235 / var(--tw-text-opacity))');
    const [Color4, setColor4] = useState('rgb(37 99 235 / var(--tw-text-opacity))');
  
    const [activediv, setactivediv] = useState(1);
    const handleButtonClick = (divnumber) => {
      setactivediv(divnumber);
    }
  return (
    <div className='MainMobileHero absolute'>
    <div className='flex justify-center MobileHerodiv'>
        <div >
        <button className='Consltbtn content-center p-2 w-60 text-white rounded-md bg-blue-950' onClick={() => document.getElementById('my_modal_4').showModal()}>FREE CONSULATION</button>
         </div>
    </div>
    <div className=' MobileHerodiv pt-3 flex justify-center m-5 overflow-auto bg-slate-300   '>
        <div className=' inline-block max-w-md'>
        <div className=''>
            <button className=' text-sm ml-5 w-32 md:w-50 sm:w-48 mb-4 Herobtn p-1 h-10  rounded-md bg-zinc-50 text-blue-600 border-black'
              onClick={() => {
                handleButtonClick(1);
                btnColor === "white" ? setBtnColor("rgb(52, 52, 139)") : setBtnColor("white");
                Color === "rgb(37 99 235 / var(--tw-text-opacity))" ? setColor("white") : setColor("rgb(37 99 235 / var(--tw-text-opacity))");

              }}
              style={{
                backgroundColor: btnColor,
                color: Color,
              }}>Courses
            </button>
            <button className=' text-sm ml-5 Herobtn p-1 h-10 w-32  md:w-50 sm:w-48  mb-4 rounded-md bg-zinc-50 text-blue-600 border-black' onClick={() => {
              handleButtonClick(2);
              btnColor2 === "white" ? setBtnColor2("rgb(52, 52, 139)") : setBtnColor2("white");
              Color2 === "rgb(37 99 235 / var(--tw-text-opacity))" ? setColor2("white") : setColor2("rgb(37 99 235 / var(--tw-text-opacity))");

            }}
              style={{
                backgroundColor: btnColor2,
                color: Color2,
              }}>Scholarship
            </button>
            <button className=' text-sm ml-5 Herobtn w-32 p-1 h-10  md:w-50 sm:w-48  mb-4 rounded-md bg-zinc-50 text-blue-600 border-black' onClick={() => {
              handleButtonClick(3);
              btnColor3 === "white" ? setBtnColor3("rgb(52, 52, 139)") : setBtnColor3("white");
              Color3 === "rgb(37 99 235 / var(--tw-text-opacity))" ? setColor3("white") : setColor3("rgb(37 99 235 / var(--tw-text-opacity))");

            }}
              style={{
                backgroundColor: btnColor3,
                color: Color3,
              }}>Universities
            </button>
            <button className=' text-sm ml-5 Herobtn w-32 p-1 h-10  md:w-50 sm:w-48   mb-4  rounded-md bg-zinc-50 text-blue-600 border-black' onClick={() => {
              handleButtonClick(4);
              btnColor4 === "white" ? setBtnColor4("rgb(52, 52, 139)") : setBtnColor4("white");
              Color4 === "rgb(37 99 235 / var(--tw-text-opacity))" ? setColor4("white") : setColor4("rgb(37 99 235 / var(--tw-text-opacity))");

            }}
              style={{
                backgroundColor: btnColor4,
                color: Color4,
              }}>Website Search
            </button>
           
          </div>
          <div className='flex justify-center'>

          
          <div className='  p-2 w-full' style={{ display: activediv === 1 ? 'block' : 'none' }}>
            <select class=" ml-5 selection mb-3 p-3 select-bordered  md:w-72  w-56">
              <option disabled selected>Normal</option>
              <option>Normal Apple</option>
              <option>Normal Orange</option>
              <option>Normal Tomato</option>
            </select>
            <select class=" selection p-3 mb-3 ml-5 select-bordered   md:w-72  w-56">
              <option disabled selected>Normal</option>
              <option>Normal Apple</option>
              <option>Normal Orange</option>
              <option>Normal Tomato</option>
            </select>
          <div className='p-4 '>
            <button className=' w-full text-white  bg-blue-950  text-xl p-2'>Search Courses</button>
          </div>


          </div>
          <div className='w-full  p-2' style={{ display: activediv === 2 ? 'block' : 'none' }}>
            <select class=" ml-5 selection p-3 select-bordered md:w-72  w-56">
              <option disabled selected>Normal</option>
              <option>Normal Apple</option>
              <option>Normal Orange</option>
              <option>Normal Tomato</option>
            </select>
            <div className='p-4 '>
            <button className=' w-full text-white  bg-blue-950  text-xl p-2'>Search Scholarship</button>
          </div>

           

          </div>
          <div className='w-full  p-2 ' style={{ display: activediv === 3 ? 'block' : 'none' }}>
            <input
              type="text"
              placeholder="Search by University name or Location"
              class="input input-bordered input-primary  md:w-72  w-56 ml-5 p-3" />
               <div className='p-4 '>
            <button className=' w-full text-white  bg-blue-950  text-xl p-2'>Search University</button>
          </div>

           

          </div> 
           <div className='w-full  p-2 ' style={{ display: activediv === 4 ? 'block' : 'none' }}>
          <input
              type="text"
              placeholder="Search our Website..."
              class="input input-bordered input-primary  md:w-72  w-56 ml-5 p-3" />
               <div className='p-4 '>
            <button className=' w-full text-white  bg-blue-950  text-xl p-2'>Search Website</button>
          </div>

           

          </div>
          </div>

        </div>
      
        

    </div>
    <div className=' ml-5 mr-20 MobileHerodiv'>
    <button className=' Downloadbtn ml-5   p-1 h-10 w-full rounded-md bg-red-700 text-white border-black' >Download Guide
            </button>

    </div>
    
    </div>
  )
}

export default MobileHero