'use client'
import React from 'react'
import Image from 'next/image'
import ratingImage from '../Assest/star-rating-image.webp'
import expostar from '../Assest/exp-star.webp';
import student from '../Assest/student.webp'
import award from '../Assest/award.webp'
import worldimage from '../Assest/worldimage_files/GM-960X540-nw.webp'
function AbroadConsultancy() {
    return (
        <>
            <div className='p-2 m-2'>
                <h1 className=" text-center text-blue-950 text-2xl">
                    Why Students Choose SI-UK for Study Abroad Consultancy
                </h1>
                <div className='mt-1 ml-32 mr-32 p-1 h-fit gap-0 flex justify-center flex-wrap '>
                    <div className='p-4  Aboarddiv'>
                        <p className='  text-center text-sm'>52,400 Reviews</p>
                        <div className=' flex justify-center'>
                            <div>
                                <Image className='mt-2' src={ratingImage} alt="review star" height={0} width={180} />
                            </div>
                        </div>

                        <h5 className=' mt-2 text-center text-4xl text-blue-800 font-extrabold'>4.9/5</h5>
                        <div className='mt-2 flex justify-center'>

                            <div >
                                <button className='Consltbtn content-center p-2 w-52 text-white rounded-md bg-blue-950' onClick={() => document.getElementById('my_modal_4').showModal()}>CONTACT US TODAY</button>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 Aboarddiv  '>
                        <div className='mb-2 flex justify-center'>
                            <div>
                                <Image className='' src={expostar} alt="review star"  />
                            </div>
                        </div>
                        <div className=' w-52'>
                        <h5 className='text-center mb-2  text-3xl'>17</h5>
                        <p className='text-center mb-2 font-bold text-sm  '>Years Experience</p>
                        <p className='text-center  text-sm'> Helping international students successfully study in the UK</p>

                        </div>

                    </div>
                    <div className='p-4 Aboarddiv '>
                    <div className='mb-2 flex justify-center'>
                            <div>
                                <Image className='' src={student} alt="review star"  />
                            </div>
                        </div>
                        <div className=' w-52'>
                        <h5 className='text-center mb-2  text-3xl'>250,000+</h5>
                        <p className='text-center mb-2 font-bold text-sm  '>Applications Submitted</p>
                        <p className='text-center  text-sm'>We submit over 250,000 applications each year to UK universities.</p>

                        </div>
                    </div>
                    <div className='p-4 Aboarddiv' >
                    <div className='mb-2 flex justify-center '>
                            <div>
                                <Image className='' src={award} alt="review star"  />
                            </div>
                        </div>
                        <div className=' w-52'>
                        <h5 className='text-center mb-2  text-3xl'>2021</h5>
                        <p className='text-center mb-2 font-bold text-sm  '>PIEoneer Awards</p>
                        <p className='text-center  text-sm'>SI-UK were ‘highly commended’ for Student Counselling</p>

                        </div>
                    </div>

                </div>
                <div className=' flex justify-center'>
                    <div>
                    <Image src={worldimage}/>
                    </div>
                </div>
                

            </div>
        </>
    )
}

export default AbroadConsultancy