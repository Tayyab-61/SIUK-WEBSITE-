import React from 'react'
import ukimage1 from '../Assest/worldimage_files/university-of-sheffield-logo.jpg'
import ukimage2 from '../Assest/worldimage_files/university-of-warwick-logo-230x90.jpg'
import ukimage3 from '../Assest/worldimage_files/university-york.jpg'
import ukimage4 from '../Assest/worldimage_files/aberdeen-logo.jpg'
import ukimage5 from '../Assest/worldimage_files/bristol-logo.jpg'
import ukimage6 from '../Assest/worldimage_files/durham-logo.jpg'
import ukimage7 from '../Assest/worldimage_files/edinburgh-logo.jpg'
import ukimage8 from '../Assest/worldimage_files/exeter-logo-230x90.jpg'
import ukimage9 from '../Assest/worldimage_files/lancaster-logo.jpg'
import ukimage12 from '../Assest/worldimage_files/loughborough-logo.jpg'
import ukimage10 from '../Assest/worldimage_files/manchester-logo.jpg'
import ukimage11 from '../Assest/worldimage_files/nottingham-logo-230.jpg'
import Image from 'next/image'

function Ukpartners() {
  return (
    <>
    <div className='p-20 pt-5 pb-5 justify-center'>
        <div>
            <h2 className=' text-center text-3xl font-extrabold text-blue-800'> Leading Universities and SI-UK Partners </h2>
             <div className='vedioContainer w-full h-35 m-t p-2'>
                <div className='flex justify-center '>

               
                <div className='images  flex gap-12 justify-center'>
                  <Image width={300} src={ukimage1}/>
                  <Image src={ukimage2} width={300}/>
                  <Image src={ukimage3} width={300} />
                  <Image src={ukimage4} width={300} />
                  <Image src={ukimage5} width={300} />
                  <Image src={ukimage6} width={300} />
                  
                </div>
                </div>
             </div>
        </div>

    </div>
    </>
  )
}

export default Ukpartners