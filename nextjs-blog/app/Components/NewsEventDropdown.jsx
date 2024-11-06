import React from 'react'
import Link from 'next/link'
function NewsEvent() {
  return (
    <>
      <details className="dropdown">
                <summary className=" font-bold m-1  ">News and Events</summary>
                <ul className="menu bg-cyan-600 dropdown-content  rounded-box z-[1] w-64 p-2 shadow">
                    <li><Link href={'/'}>University News</Link></li>
                    <li><Link href={'/'}>Open Days and Events</Link></li>
    
                </ul>
            </details>
    </>
  )
}

export default NewsEvent