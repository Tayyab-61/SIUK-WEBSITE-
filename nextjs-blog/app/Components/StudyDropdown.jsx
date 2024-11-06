import Link from 'next/link'
import React from 'react'

function StudyDropdown() {
  return (
    <>
     <details className="dropdown">
                <summary className=" font-bold m-1 ">Study Options</summary>
                <ul className="menu dropdown-content  bg-cyan-600 rounded-box z-[1] w-64 p-2 shadow">
                    <li className=''><Link href={'/'}>Foundation</Link></li>
                    <li><Link href={'/'}>Unergraduate</Link></li>
                    <li><Link href={'/'}>Postgraduate and Masters</Link></li>
                    <li><Link href={'/'}>All Study Options</Link></li>
                    
                </ul>
            </details>
    </>
  )
}

export default StudyDropdown