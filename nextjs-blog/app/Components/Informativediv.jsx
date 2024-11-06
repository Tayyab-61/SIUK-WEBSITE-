import React from 'react'
import Image from 'next/image'
import Uk from '../Assest/UK.webp'
function Informativediv() {
  return (
    <>
    <div className=' w-full p-10  md:p-32 pt-5 pb-5 bg-zinc-300 flex'>
        <div>

        
        <p className=' text-xl font-sans max-w-5xl '>Breckett Front  My consultant was very helpful and motivating. She helped me every step of the way, even when the deadline was so close. I feel I could not have done it without her. I'd highly recommend this service to any and all of my many friends interested.  Breckett Front</p>
        <h4 className=' text-2xl font-bold text-zinc-500 mt-12'>Brishti Basu</h4>
        <p className=' tex-sm'>Biosciences at Coventry University </p>
        </div>
        <div className='Imagediv md:visible invisible'>
            <Image  src={Uk} width={250} height={300}/>

        </div>
    </div>
    </>
  
  )
}

export default Informativediv