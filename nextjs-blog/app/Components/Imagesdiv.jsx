import React from 'react'
import Image from 'next/image'
import banner from '../Assest/uk-top-banner-desktop-upd-26032024 - Copy.webp'
import bannerUk from '../Assest/UK-University-Fair-Banner_Desktop.jpg'
import { optimizeImage } from 'next/dist/server/image-optimizer'
function Imagesdiv() {
  return (
   <>
   <div className='w-full sm:mt-4 p-4 mt-1  justify-center  bg-slate-300'> 
     <div className=' md:ml-24 md:mr-24'>
     <Image className='  mb-4' src={bannerUk} width={1000}  />
     </div>
     <div className='md:ml-24 md:mr-24'>
     <Image src={banner} width={1000} />
     </div>
     


   </div>
   </>
  )
}

export default Imagesdiv