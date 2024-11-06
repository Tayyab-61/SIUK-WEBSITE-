import Link from 'next/link'
import React from 'react'

function ApplicationDropdown() {
  return (
    <>
    <details className="dropdown">
                <summary className=" font-bold m-1 ">Application Services</summary>
                <ul className="menu dropdown-content  bg-cyan-600 rounded-box z-[1] w-64 p-2 shadow">
                    <li className=''><Link href={'/'}>Free Service</Link></li>
                    <li><Link href={'/'}> Premium Service</Link></li>
                    <li><Link href={'/'}>Visa Service</Link></li>
                    <li><Link href={'/'}>Oxbridge Serive</Link></li>
                    <li><Link href={'/'}>Medicine Service</Link></li>
                    <li><Link href={'/'}>Art and Design Servie</Link></li>
                    <li><Link href={'/'}>View all Services</Link></li>
                </ul>
            </details>
    </>
  )
}

export default ApplicationDropdown