import Link from 'next/link'
import React from 'react'

function UKstudydropdown() {
  return (
    <>
     <details className="dropdown">
                <summary className=" font-bold m-1 ">UK Study Information</summary>
                <ul className="menu dropdown-content  bg-cyan-600 rounded-box z-[1] w-64 p-2 shadow">
                    <li className=''><Link href={'/'}>UCAS and Applynig </Link></li>
                    <li><Link href={'/'}>UK University Rankings 2024</Link></li>
                    <li><Link href={'/'}>University Subject Guide</Link></li>
                    <li><Link href={'/'}>Scholarship and Funding</Link></li>
                    <li><Link href={'/'}>All UK Study Information</Link></li>
                  
                </ul>
            </details>
    </>
  )
}

export default UKstudydropdown