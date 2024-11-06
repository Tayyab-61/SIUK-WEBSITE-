'use client'
import React from 'react'
import FreeService from '../Assest/worldimage_files/qa-service-img-3-1.png';
import PremimumService from '../Assest/worldimage_files/qa-service-img-3-2.png';
import OxBridege from '../Assest/worldimage_files/qa-service-img-3-3.png';
import ViewServices from '../Assest/worldimage_files/qa-service-img-3-5.png';
import Image from 'next/image';

function Ukstudy() {
  return (
    <>
    
 
    <div className='p-2 mt-2'>
    <h1 className=" text-center text-blue-950 text-3xl">
    UK Study Application Services
        </h1>
        <p className="p-5 text-center">
        Our UK study application services can help you receive a university offer. Benefit from free application support with the Free Service, guarantee a UK university offer with Premium Service or use one of our tailored packages for Oxbridge, medicine and art
        </p>
    </div>
    <div className='md:ml-24 md:mr-24 flex flex-wrap justify-center gap-8 '>
        <div> <Image src={FreeService}/> </div>
        <div> <Image src={PremimumService}/> </div>
        <div> <Image src={OxBridege}/> </div>
        <div> <Image src={ViewServices}/> </div>
        <div> <Image src={ViewServices}/> </div>

    </div>
    <div className='flex justify-center mt-4'>
        <div >
        <button className='Consltbtn content-center p-4 w-fit text-white rounded-md bg-blue-950'onClick={() => document.getElementById('my_modal_4').showModal()} >BOOK A FREE CONSULATION</button>
         </div>
    </div>
    </>
  )
}

export default Ukstudy