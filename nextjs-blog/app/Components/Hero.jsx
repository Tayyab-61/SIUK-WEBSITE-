'use client'
import React, { useState } from 'react'
import image from '../Assest/worldimage_files/17th-anniversary-logo.png';
import Image from 'next/image';
import search from '../Assest/magnifying-glass.png'

function Hero() {
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
    <>

      <div className='Herodiv  w-full h-72 p-4 bg-white'>
        <div className='HeroContent mt-10 w-fit'>
          <div className='flex justify-end'>
            <div>
              <Image src={image} width={200} />
            </div>

          </div>
          <div className='p-2 ml-2 '>
            <button className=' text-sm ml-5  Herobtn p-1 h-10 w-28 rounded-md bg-zinc-50 text-blue-600 border-black'
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
            <button className=' text-sm ml-5 Herobtn p-1 h-10 w-28 rounded-md bg-zinc-50 text-blue-600 border-black' onClick={() => {
              handleButtonClick(2);
              btnColor2 === "white" ? setBtnColor2("rgb(52, 52, 139)") : setBtnColor2("white");
              Color2 === "rgb(37 99 235 / var(--tw-text-opacity))" ? setColor2("white") : setColor2("rgb(37 99 235 / var(--tw-text-opacity))");

            }}
              style={{
                backgroundColor: btnColor2,
                color: Color2,
              }}>Scholarship
            </button>
            <button className=' text-sm ml-5 Herobtn p-1 h-10 w-28 rounded-md bg-zinc-50 text-blue-600 border-black' onClick={() => {
              handleButtonClick(3);
              btnColor3 === "white" ? setBtnColor3("rgb(52, 52, 139)") : setBtnColor3("white");
              Color3 === "rgb(37 99 235 / var(--tw-text-opacity))" ? setColor3("white") : setColor3("rgb(37 99 235 / var(--tw-text-opacity))");

            }}
              style={{
                backgroundColor: btnColor3,
                color: Color3,
              }}>Universities
            </button>
            <button className=' text-sm ml-5 Herobtn p-1 h-10 w-32 rounded-md bg-zinc-50 text-blue-600 border-black' onClick={() => {
              handleButtonClick(4);
              btnColor4 === "white" ? setBtnColor4("rgb(52, 52, 139)") : setBtnColor4("white");
              Color4 === "rgb(37 99 235 / var(--tw-text-opacity))" ? setColor4("white") : setColor4("rgb(37 99 235 / var(--tw-text-opacity))");

            }}
              style={{
                backgroundColor: btnColor4,
                color: Color4,
              }}>Website Search
            </button>
            <button className=' Downloadbtn ml-5   p-1 h-10 w-52 rounded-md bg-red-700 text-white border-black' >Download Guide
            </button>
          </div>

          <div className=' ml-2 p-2 w-full' style={{ display: activediv === 1 ? 'block' : 'none' }}>
            <select class=" ml-5 selection p-3 select-bordered w-full max-w-xs">
              <option disabled selected>Normal</option>
              <option>Normal Apple</option>
              <option>Normal Orange</option>
              <option>Normal Tomato</option>
            </select>
            <select class=" selection p-3 select-bordered  w-full max-w-xs">
              <option disabled selected>Normal</option>
              <option>Normal Apple</option>
              <option>Normal Orange</option>
              <option>Normal Tomato</option>
            </select>
            <div className=' inline-block absolute  max-w-fit bg-blue-900'>
              <Image src={search} width={35} className='p-1 mt-2 mb-1 ' />
            </div>


          </div>
          <div className='w-full ml-2 p-2' style={{ display: activediv === 2 ? 'block' : 'none' }}>
            <select class=" ml-5 selection p-3 select-bordered w-full max-w-md">
              <option disabled selected>Normal</option>
              <option>Normal Apple</option>
              <option>Normal Orange</option>
              <option>Normal Tomato</option>
            </select>
            <div className=' inline-block absolute  max-w-fit bg-blue-900'>
              <Image src={search} width={35} className='p-1 mt-2 mb-1 ' />
            </div>

          </div>
          <div className='w-full ml-2 p-2 ' style={{ display: activediv === 3 ? 'block' : 'none' }}>
            <input
              type="text"
              placeholder="Search by University name or Location"
              class="input input-bordered input-primary w-full max-w-md ml-5 p-3" />
           

          </div>  <div className='w-full ml-2 p-2 ' style={{ display: activediv === 4 ? 'block' : 'none' }}>
          <input
              type="text"
              placeholder="Search our Website..."
              class="input input-bordered input-primary w-full max-w-md ml-5 p-3" />
           

          </div>

        </div>

      </div>
    </>
  )
}

export default Hero