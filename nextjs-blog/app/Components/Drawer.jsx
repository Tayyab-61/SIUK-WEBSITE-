import React from 'react'
import Image from 'next/image'
import Dropdown from './OfficeDropdown'
import Link from 'next/link'
import ApplicationDropdown from './ApplicationDropdown'
import UKstudydropdown from './UKstudydropdown'
import StudyDropdown from './StudyDropdown'
import StudyEnglishDropdown from './StudyEnglishDropdown'
import NewsEvent from './NewsEventDropdown'
import Menu from '../Assest/menu.png'
import Form from './Form'

function Drawer() {

 
  return (
    <>
   <div className=" drawer drawer-end z-10">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button  btn-primary">
      <Image src={Menu} width={25}/>
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
   
    <ul className="menu bg-slate-800  text-base-content min-h-full w-80 p-4" id='sidebar'>
      {/* Sidebar content here */}
      <button className='text-white absolute right-8   text-2xl' >X</button>
      <div className=' mb-5 flex justify-center'>
        <div>
         <Form/>
        </div>
      </div>
     <div className=' bg-slate-700 rounded-md text-white'>
      <li className=' '>
        <Link className=''  href={'/'}>
          <label className=' text-sm ml-1 font-extrabold'>About SI UK</label>
          </Link> 
      </li>
        <li>
        <Dropdown/>
      </li>
      <li>
      <Link className=''  href={'/'}>
          <label className=' ml-1  text-xm font-extrabold'>Find your UK uinversity course</label>
          </Link>
      </li>  
      <li>
        <ApplicationDropdown/>
      </li>
        <li>
        <UKstudydropdown/>
      </li>
      <li>
        <StudyDropdown/>
      </li>
      <li>
      <Link className=''  href={'/'}>
          <label className=' ml-1  text-xm font-extrabold'>Uk University Profiles</label>
          </Link>
      </li> 
      <li>
      <Link className=''  href={'/'}>
          <label className=' ml-1  text-xm font-extrabold'>Uk University Study Guide</label>
          </Link>
      </li> 
      <li>
        <StudyEnglishDropdown/>
      </li>
      <li>
        <NewsEvent/>
      </li>
      <li>
      <Link className=''  href={'/'}>
          <label className=' ml-1  text-xm font-extrabold'>Work with us</label>
          </Link>
      </li>
      </div>
    </ul>
  </div>
</div>
    </>
  )
}

export default Drawer