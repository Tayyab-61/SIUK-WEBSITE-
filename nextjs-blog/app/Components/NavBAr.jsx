import React from 'react'
import Drawer from './Drawer'
import SelectCountry from './SelectCountry'
import searchIcon from '../Assest/magnifying-glass.png';
import Image from 'next/image';
import Link from 'next/link';
import Form from './Form';

function NavBAr() {
  return (
    <>
      <div className='bluediv bg-blue-900  w-full'>
        <span className='eq absolute xl:right-96 md:right-60 sm:right-20  right-0 top-4 flex justify-center'>
        <span className=' text-white invisible md:visible xl:visible sm:visible  text-sm mt-2 xl:text-xl  ml-4'>
           <Link href={'/'} className='calno'>Call us: 027-7287-7040</Link>
          </span>
          <span className=' ml-8 invisible sm:invisible md:visible lg:visible'>
           <Form/>
          </span>
         
        </span>
        <div className=' absolute  flex justify-between right-5 top-5'>

          <div className=' mr-4'>
            <Image src={searchIcon} width={25} height={30} />

          </div>
          <div className=' mr-4'>
            <SelectCountry />
          </div>
          <div className='  mr-4'>
            <Drawer />
          </div>


        </div>

        <div className=' w-full absolute top-16 h-2  bg-red-700'>   </div>

        <div className='whitediv  h-full p-4 bg-white'>
          <h1 className='h1 text-ellipsis text-4xl'>
            <b className='  text-blue-900'>SI</b>
            <b className=' text-red-700'>▶UK</b>
          </h1>
        </div>

      </div>

    </>
  )
}

export default NavBAr