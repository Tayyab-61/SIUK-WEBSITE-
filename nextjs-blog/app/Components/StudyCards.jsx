import Image from 'next/image'
import React from 'react'
import compus from '../Assest/ucl-campus_lZpYlHp.webp'
import mba from '../Assest/sg-mba-new.webp'
import study from '../Assest/online-fair-study-guide.jpeg'
import Link from 'next/link'

function StudyCards() {
  return (
   <>
   <div className='mt-2 Link-2 ml-24 '>
    <h1 className=' text-3xl '> Studying in the UK</h1>
    </div>
    <div className='flex flex-wrap gap-4 mt-8 justify-center'>
        <div className='Link-2 max-w-sm'>
           <div  className=''>
           <Image src={compus} height={220}/>
           <div className=' max-w-72 text-sm'>
           <Link href={'/'} className='mt-2 mb-2'>Studying at the UCL Bartlett School of Architecture</Link>
           <br/>
           <hr/>
           
           <Link href={'/'}   className='mt-2 mb-2'>Five Reasons to Study at University College London</Link>
           <hr/>
           <Link href={'/'}  className='mt-2 mb-2'>Four Reasons to Study at the UCL School of Linkharmacy</Link>
           <hr/>
           <Link href={'/'}  className='mt-2 mb-2'>UCL Graduate Linkrogramme Guide for International Students</Link>
           <hr/>
           </div>

            </div>
            
        </div>
        <div className='Link-2  max-w-sm'>
           <div >
           <Image src={mba} height={220}/>
           <div className=' max-w-72 text-sm'>
           <Link  href={'/'} className='mt-2 mb-2'>Choosing the Right Business School and Course in the UK</Link>
           <hr/>
           <Link  href={'/'} className='mt-2 mb-2'>Top 10 Universities in the UK to Study Business and Management</Link>
           <hr/>
           <Link  href={'/'} className='mt-2 mb-2'>Top 10 Business Schools in London for 2024 Entry</Link>
           <hr/>
           <Link  href={'/'} className='mt-2 mb-2'>Top 10 MBA Programmes in the UK</Link>
           </div>


            </div>
            
        </div>  <div className='Link-2  max-w-sm'>
           <div >
           <Image src={study} height={220}/>
           <div className=' max-w-72 text-sm'>
           <Link  href={'/'} className='mt-2 mb-2 '>Top 10 UK Universities for Computer Science</Link>
           <hr/>
           <Link  href={'/'} className='mt-2 mb-2'>The Top 10 Universities in London 2025</Link>
           <hr/>
           <Link  href={'/'} className='mt-2 mb-2'>The Best 10 Universities in the UK 2024</Link>
           <hr/>
           <Link  href={'/'} className='mt-2 mb-2'>Top 10 Young Universities in the UK 2024</Link>
           <hr/>
           </div>
            </div>
            
        </div>
        

    </div>


   </>
  )
}

export default StudyCards