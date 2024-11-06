'use client'
import React from 'react'
import Image from 'next/image'
import SeeUkImage from '../Assest/worldimage_files/qa-uni-img-4-5.png'
import pathway from '../Assest/worldimage_files/qa-uni-img-4-3.png'
import LanguageImage from '../Assest/worldimage_files/qa-uni-img-4-1.png'
import BoardingImage from '../Assest/worldimage_files/qa-uni-img-5-2-1.png'
import Collages from '../Assest/worldimage_files/qa-uni-img-5-4-1.png'
function Ukinsitute() {
  return (
    <>
    
 
    <div className='p-2 mt-2'>
    <h1 className=" text-center text-blue-950 text-3xl">
    UK Institution Profiles
        </h1>
        <p className="p-5 text-center">
        Learn more about rankings, scholarships and courses at UK universities, business schools, colleges and language schools. Our UK education consultants can then help you decide where to study in the UK.
        </p>
    </div>
    <div className='md:ml-24 md:mr-24 flex flex-wrap justify-center gap-8 '>
        <div> <Image src={SeeUkImage}/> </div>
        <div> <Image src={pathway}/> </div>
        <div> <Image src={LanguageImage}/> </div>
        <div> <Image src={BoardingImage}/> </div>
        <div> <Image src={Collages}/> </div>

    </div>
    <div className='flex justify-center mt-4'>
        <div >
        <button className='Consltbtn content-center p-4 w-fit text-white rounded-md bg-blue-950' onClick={() => document.getElementById('my_modal_4').showModal()}>BOOK A FREE CONSULATION</button>
         </div>
    </div>
    </>
  )
}

export default Ukinsitute