'use client'
import React from 'react'
import LawImage from '../Assest/worldimage_files/qa-pop-img-3-1.png';
import BussinesImage from '../Assest/worldimage_files/qa-pop-img-3-2.png';
import EngineeringImage from '../Assest/worldimage_files/qa-pop-img-3-3.png';
import MBA from '../Assest/worldimage_files/qa-pop-img-3-4.png';
import ViewServices from '../Assest/worldimage_files/qa-pop-img-3-2-5.png';
import Image from 'next/image';

function Ukinsitute() {
  return (
    <>
    <div className=' bg-slate-300'>

 
 
    <div className='p-2 mt-6 '>
    <h1 className=" text-center text-blue-950 text-3xl">
    Popular UK University Courses
        </h1>
        <p className="p-5 text-center">
        Learn more about the most popular courses to study in the UK with our in-depth subject guides. You can then search our database of over 80,000 courses at UK universities and find your dream programme
        </p>
    </div>
    <div className='md:ml-24 md:mr-24 flex flex-wrap justify-center gap-8 '>
        <div> <Image src={LawImage}/> </div>
        <div> <Image src={BussinesImage}/> </div>
        <div> <Image src={EngineeringImage}/> </div>
        <div> <Image src={MBA}/> </div>
        <div> <Image src={ViewServices}/> </div>

    </div>
    <div className='flex justify-center mt-4 '>
        <div >
        <button className='mb-3 Consltbtn content-center p-4 w-fit text-white rounded-md bg-blue-950' onClick={() => document.getElementById('my_modal_4').showModal()}>BOOK A FREE CONSULATION</button>
         </div>
    </div>
    </div>
    </>
  )
}

export default Ukinsitute