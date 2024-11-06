import React from 'react'
import Image from 'next/image'

function VideoComponent() {
    return (
        <>
            <div className=' p-24 pt-5 pb-5'>
                <h3 className=' text-2xl font-extrabold mb-4 '>Why SI-UK?</h3>
                <p>Our education consultants offer independent guidance, advice, and full application support to international students applying to study in the UK.</p>
                <div className='vedioContainer w-full h-80 m-t p-2'>
                    <div className='vedio flex gap-8 justify-center'>

                        <div>
                            <iframe className=' rounded-xl ' width="250" height="300" src="https://www.youtube.com/embed/t2cdgLBJMwQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div>
                            <iframe className=' rounded-xl ' width="250" height="300" src="https://www.youtube.com/embed/t2cdgLBJMwQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div>
                            <iframe className=' rounded-xl ' width="250" height="300" src="https://www.youtube.com/embed/t2cdgLBJMwQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>  <div>
                            <iframe className=' rounded-xl ' width="250" height="300" src="https://www.youtube.com/embed/t2cdgLBJMwQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>  <div>
                            <iframe className=' rounded-xl ' width="250" height="300" src="https://www.youtube.com/embed/t2cdgLBJMwQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>  <div>
                            <iframe className=' rounded-xl ' width="250" height="300" src="https://www.youtube.com/embed/t2cdgLBJMwQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                   

                </div>
                <div className='flex justify-center mt-6'>
                        <div >
                            <button className='Consltbtn content-center p-2 w-60 text-white rounded-md bg-blue-950'>View All</button>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default VideoComponent