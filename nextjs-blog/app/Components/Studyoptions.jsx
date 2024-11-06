'use client'
import React from 'react'
import Image from 'next/image'
import FoundationImage from '../Assest/worldimage_files/qa-study-img-4-1-1.png';
import UnderGraduate from '../Assest/worldimage_files/qa-study-img-3-1-2.png'
import postGraduate from '../Assest/worldimage_files/qa-study-img-3-1-3.png'
import Phd from '../Assest/worldimage_files/qa-study-img-3-1-4.png'
import ViewLevels from '../Assest/worldimage_files/qa-study-img-3-3-5.png'
function Studyoptions() {
  return (
    <>
    <div className=' bg-slate-300'>

 
 
    <div className='p-2 mt-6 '>
    <h1 className=" text-center text-blue-950 text-3xl">
    Options To Study In England, Ireland, Scotland & Wales
        </h1>
        <p className="p-5 text-center">
        SI-UK is a trusted UK university partner, and our study abroad consultants will ensure you find a place on the right course to study in the UK. Experienced education consultants can assist with your application for foundation, undergraduate or postgraduate courses
        </p>
    </div>
    <div className='md:ml-24 md:mr-24 flex flex-wrap justify-center gap-8 '>
        <div> <Image src={FoundationImage}/> </div>
        <div> <Image src={UnderGraduate}/> </div>
        <div> <Image src={postGraduate}/> </div>
        <div> <Image src={Phd}/> </div>
        <div> <Image src={ViewLevels}/> </div>

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

export default Studyoptions