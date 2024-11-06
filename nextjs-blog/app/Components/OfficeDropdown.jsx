import Link from 'next/link'
import React from 'react'

function Dropdown() {
    return (
        <>
            <details className="dropdown">
                <summary className=" font-bold m-1  ">Visit our office</summary>
                <ul className="menu bg-cyan-600 dropdown-content  rounded-box z-[1] w-64 p-2 shadow">
                    <li><Link href={'/'}>London</Link></li>
                    <li><Link href={'/'}> Jersy</Link></li>
                    <li><Link href={'/'}>All global offices</Link></li>
                </ul>
            </details>
        </>
    )
}

export default Dropdown