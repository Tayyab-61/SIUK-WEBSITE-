import React from 'react'
import Link from 'next/link'
function NewsEvents() {
    return (
        <>
            <div className='p-5  flex justify-center flex-wrap gap-10'>
                <div className=''>
                    <h1 className=' text-2xl font-extrabold'>News</h1>
                    <div className='p-6 bg-blue-400 max-w-md'>


                        <div className='mt-4 pb-2 mb-2 NewsContent'>
                            <p className=' text-black text-sm mb-1'>5 Aug</p>
                            <Link className=' text-white LinkNews  ' href={'/'}>Russul Group university enhnacing coummunity accros the UK</Link>


                        </div>
                        <div className='mt-2 pb-2 mb-2 NewsContent'>
                            <p className=' text-black text-sm mb-1'>5 Aug</p>
                            <Link className=' text-white LinkNews  ' href={'/'}>Russul Group university enhnacing coummunity accros the UK</Link>
                        </div>
                        <div className='mt-2 pb-2 mb-2 NewsContent'>
                            <p className=' text-black text-sm mb-1'>5 Aug</p>
                            <Link className=' text-white LinkNews  ' href={'/'}>Russul Group university enhnacing coummunity accros the UK</Link>
                        </div>
                   
                    <div className='flex justify-center mt-6'>
                        <div >
                            <button className='Consltbtn content-center p-2 w-60 text-white rounded-md bg-blue-950'>View All</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                    <h1 className=' text-2xl font-extrabold'>Events</h1>
                    <div className='p-6 bg-blue-400 max-w-md'>


                        <div className='mt-4 pb-2 mb-2 NewsContent'>
                            <p className=' text-black text-sm mb-1'>5 Aug</p>
                            <Link className='text-white LinkNews  ' href={'/'}>Russul Group university enhnacing coummunity accros the UK</Link>
                        </div> <div className='mt-2 pb-2 mb-2 NewsContent'>
                            <p className=' text-black text-sm mb-1'>5 Aug</p>
                            <Link className='text-white LinkNews  ' href={'/'}>Russul Group university enhnacing coummunity accros the UK</Link>
                        </div> <div className='mt-2 pb-2 mb-2 NewsContent'>
                            <p className=' text-black text-sm mb-1'>5 Aug</p>
                            <Link className='text-white LinkNews  ' href={'/'}>Russul Group university enhnacing coummunity accros the UK</Link>
                        </div>
                        <div className='flex justify-center mt-6'>
                        <div >
                            <button className='Consltbtn content-center p-2 w-60 text-white rounded-md bg-blue-950'>View All</button>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NewsEvents