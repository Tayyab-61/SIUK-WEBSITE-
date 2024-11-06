import React from 'react'
import Link from 'next/link'

function footer() {
    return (
        <>
            <div className=' bg-blue-900 text-white w-full h-fit p-5 mt-2 flex-wrap flex '>
                <div className=' w-9/12'>


                    <div className='flex    flex-wrap   gap-x-4 gap-y-2'>
                        <div className=' inline-block h-fit w-72'>
                            <h3 className=' w-fit footerHeading font-bold text-xl'><Link href={'/'}>SI-UK LONDON</Link></h3>
                            <ul class="top-list text-sm">
                                <li>3rd Floor 211-213  Regent Street London, W1B 4NF United Kingdom</li>
                                <li><Link href={'/'}>T:  020-7287-7040</Link></li>
                                <li><Link class="email" href={'/'}>E: info@studyin-uk.com</Link></li>
                            </ul>
                        </div>
                        <div className='w-72 inline h-fit '>
                            <h3 className=' w-fit footerHeading font-bold text-xl'><Link href={'/'}>AMERICA</Link></h3>
                            <ul class="top-list text-sm">
                                <li><Link href={'/'}>Tornoto</Link> </li>
                                <li><Link href={'/'}>Bogota</Link> </li>
                                <li><Link href={'/'}>Maxico City</Link> </li>
                            </ul>
                        </div>

                        <div className='w-72 inline h-fit '>
                            <h3 className=' w-fit footerHeading font-bold text-xl'><Link href={'/'}>SI UK JERSEY</Link></h3>
                            <ul class="top-list text-sm">
                                <li>Study International UK Limited, Office 147, 1/F, Liberation Station,
                                    Esplanade, JE2 3AS, Jersey</li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/jersey/">T:  +44-01534-710918</Link></li>
                                <li><Link class="email" href="mailto:jersey@studyin-uk.com">E: jersey@studyin-uk.com</Link></li>
                            </ul>
                        </div>
                        <div className='w-72 inline h-fit '>
                            <h3 className=' w-fit footerHeading font-bold text-xl'><Link href={'/'}>SI UK JERSEY</Link></h3>
                            <ul className='text-sm'>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/london/">London</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/jersey/">Jersey</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/lefkosa/">Lefkosa</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/nicosia/">Nicosia</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/warszawa/">Warszawa</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/tirana/">Tirana</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/pristina/">Pristina</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/kyiv/">Kyiv</Link></li>
                                <li><Link href="/contact/global-offices/athens/">Athens</Link></li>
                            </ul>
                        </div>
                        <div className='w-72 inline h-fit '>
                            <h3 className=' w-fit footerHeading font-bold text-xl'><Link href={'/'}>EUROPE</Link></h3>
                            <ul className=' text-sm'>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/london/">London</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/jersey/">Jersey</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/lefkosa/">Lefkosa</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/nicosia/">Nicosia</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/warszawa/">Warszawa</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/tirana/">Tirana</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/pristina/">Pristina</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/kyiv/">Kyiv</Link></li>
                                <li><Link href="/contact/global-offices/athens/">Athens</Link></li>
                            </ul>
                        </div>
                        <div className='w-72 inline h-fit '>
                            <h3 className=' w-fit footerHeading font-bold text-xl'><Link href={'/'}>SERVICES</Link></h3>
                            <ul class=" text-sm">
                                <li><Link href="https://www.studyin-uk.com/services/free-services/">Free Service</Link></li>
                                <li><Link href="https://www.studyin-uk.com/services/premium-service/">Premium service</Link></li>
                                <li><Link href="https://www.studyin-uk.com/services/oxbridge/">Oxbridge service</Link></li>
                                <li><Link href="https://www.studyin-uk.com/services/medicine/">Medicine service</Link></li>
                                <li><Link href="https://www.studyin-uk.com/services/phd/">Phd Service</Link></li>
                            </ul>
                        </div>
                        <div className='w-72 inline h-fit '>
                            <h3 className=' w-fit footerHeading font-bold text-xl'><Link href={'/'}>STUDY OPTIONS</Link></h3>
                            <ul className='text-sm'>
                                <li><Link href="https://www.studyin-uk.com/study-options/language-study/">Learn English</Link></li>
                                <li><Link href="https://www.studyin-uk.com/study-options/foundation/">Foundation</Link></li>
                                <li><Link href="https://www.studyin-uk.com/study-options/undergraduate/">Undergraduate</Link></li>
                                <li><Link href="https://www.studyin-uk.com/study-options/pre-masters/">Pre-Masters</Link></li>
                                <li><Link href="https://www.studyin-uk.com/study-options/postgraduate-and-masters-degree/">Postgraduate</Link></li>
                                <li><Link href="https://www.studyin-uk.com/study-options/research/">PhD/Research</Link></li>
                            </ul>
                        </div>
                        <div className='w-72 inline h-fit '>
                            <h3 className=' w-fit footerHeading font-bold text-xl'><Link href={'/'}>AFRICA</Link></h3>
                            <ul className='text-sm'>
                                <li>Cairo</li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/lagos/">Lagos</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/abuja/">Abuja</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/onitsha/">Onitsha</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/port-harcourt/">Port Harcourt</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/nairobi/">Nairobi</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/mombasa/">Mombasa</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/kampala/">Kampala</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/casablanca/">Casablanca</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/dar-es-salaam/">Dar es Salaam</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/accra/">Accra</Link></li>

                            </ul>
                        </div>
                        <div className='w-72 inline h-fit '>
                            <h3 className=' w-fit footerHeading font-bold text-xl'><Link href={'/'}>UK STUDY INFORMATION</Link></h3>
                            <ul className='text-sm'>
                                <li><Link href="https://www.studyin-uk.com/uk-study-info/uk-university-application/">Applying to a UK University</Link></li>
                                <li><Link href="https://www.studyin-uk.com/uk-study-info/university-rankings/">UK University Rankings</Link></li>
                                <li><Link href="https://www.studyin-uk.com/popular-courses/">UK University Subjects</Link></li>

                                <li><Link href="https://www.studyin-uk.com/uk-study-info/scholarships/">UK University Scholarships</Link></li>
                                <li><Link href="https://www.studyin-uk.com/uk-study-info/uk-university-application-deadlines/">Application Deadlines</Link></li>


                            </ul>
                        </div>
                        <div className='w-72 inline h-fit '>
                            <h3 className=' w-fit footerHeading font-bold text-xl'><Link href={'/'}>MIDDLE EAST &<br />CENTRAL ASIA</Link></h3>
                            <ul className='text-sm'>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/riyadh/">Riyadh</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/istanbul/">Istanbul</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/ankara/">Ankara</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/izmir/">Izmir</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/atasehir/">Atasehir</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/denizli/">Denizli</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/tashkent/">Tashkent</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/nur-sultan/">nur-sultan</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/doha/">Doha</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/baku/">Baku</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/dubai/">Dubai</Link></li>


                            </ul>
                        </div>
                        <div className='w-72 inline h-fit '>
                            <h3 className=' w-fit footerHeading font-bold text-xl'><Link href={'/'}>ASIA PACIFIC</Link></h3>
                            <ul className='text-sm'>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/tokyo/">Tokyo</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/osaka/">Osaka</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/bangkok/">Bangkok</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/chiang-mai/">Chiang Mai</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/shanghai/">Shanghai</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/beijing/">Beijing</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/guangzhou/">Guangzhou</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/changsha/">Changsha</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/hong-kong/">Hong Kong</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/ha-noi/">Hanoi</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/ho-chi-minh/">Ho Chi Minh</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/malaysia/">Kuala Lumpur</Link></li>
                                <li><Link href="/contact/global-offices/manila/">Manila</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/taipei/">Taipei</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/jakarta/">Jakarta</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/alam-sutera/">Alam Sutera</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/surabaya/">Surabaya</Link></li>
                                <li><Link href="https://www.studyin-uk.com/contact/global-offices/vientiane/">Vientiane</Link></li>

                            </ul>
                        </div>




                    </div>
                </div>


                <div>
                    <div className=' h-fit inline'>
                        <h3 className=' w-fit footerHeading font-bold text-xl'><Link href={'/'}>South Asia</Link></h3>
                        <ul className='top-list text-sm'>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/new-delhi-cp/">New Delhi - Connaught Place</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/nehru-place/">New Delhi - Nehru Place</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/rajouri-garden/">New Delhi - Rajouri Garden</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/bandra/">Mumbai - Bandra</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/andheri/">Mumbai - Andheri</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/church-street/">Bengaluru - Church Street</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/jp-nagar/">Bengaluru - J.P. Nagar</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/chennai/">Chennai</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/coimbatore/">Coimbatore</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/calicut/">Calicut (Kozhikode)</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/pune/">Pune</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/jaipur/">Jaipur</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/ahmedabad/">Ahmedabad</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/vadodara/">Vadodara</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/lucknow/">Lucknow</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/noida/">Noida</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/hyderabad/">Hyderabad</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/bhubaneswar/">Bhubaneswar</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/kochi/">Kochi</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/mysuru/">Mysuru</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/kolkata/">Kolkata</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/chandigarh/">Chandigarh</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/ludhiana/">Ludhiana</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/amritsar/">Amritsar</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/gurugram/">Gurugram</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/thane/">Thane</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/nagpur/">Nagpur</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/indore/">Indore</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/vijayawada/">Vijayawada</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/rawalpindi/">Rawalpindi</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/karachi/">Karachi</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/lahore/">Lahore</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/peshawar/">Peshawar</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/faisalabad/">Faisalabad</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/islamabad/">Islamabad</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/multan/">Multan</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/sahiwal/">Sahiwal</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/jhelum/">Jhelum</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/dhaka/">Dhaka</Link></li>
                            <li><Link href="/contact/global-offices/chattogram/">Chattogram</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/kathmandu/">Kathmandu</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/pokhara/">Pokhara</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/butwal/">butwal</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/chitwan/">chitwan</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/colombo/">Colombo</Link></li>
                            <li><Link href="https://www.studyin-uk.com/contact/global-offices/jaffna/">Jaffna</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default footer