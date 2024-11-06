import Link from 'next/link'
import React from 'react'

function StudyEnglishDropdown() {
  return (
    <>
      <details className="dropdown">
                <summary className=" font-bold m-1  ">Study English</summary>
                <ul className="menu bg-cyan-600 dropdown-content  rounded-box z-[1] w-64 p-2 shadow">
                    <li><Link href={'/'}>Language Center Home</Link></li>
                    <li><Link href={'/'}>Personal Academic Englisg Test</Link></li>
                    <li><Link href={'/'}>IELST</Link></li>
                </ul>
            </details>
    </>
  )
}

export default StudyEnglishDropdown