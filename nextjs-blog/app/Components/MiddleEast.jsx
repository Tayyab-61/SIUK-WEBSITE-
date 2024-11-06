import Link from 'next/link'
import React from 'react'

function MiddleEast() {
  return (
  <>
  <div>
  <details className="dropdown">
                <summary className=" font-bold m-1  ">The Americas</summary>
                <ul className="menu bg-cyan-600 dropdown-content  rounded-box z-[1] w-64 p-2 shadow">
                    <li><Link href={'/'}>Canada</Link></li>
                    <li><Link href={'/'}>United States</Link></li>
                    <li><Link href={'/'}>Colombia</Link></li>
                    <li><Link href={'/'}>Mexico</Link></li>
                </ul>
            </details>
  </div>
  <div>
  <details className="dropdown">
                <summary className=" font-bold m-1  ">Europe</summary>
                <ul className="menu bg-cyan-600 dropdown-content  rounded-box z-[1] w-64 p-2 shadow">
                    <li><Link href={'/'}>United Kingdom</Link></li>
                    <li><Link href={'/'}>Cyprus</Link></li>
                    
                    <li><Link href={'/'}>Cyprus EU</Link></li>
                    <li><Link href={'/'}>Spain</Link></li>
                    <li><Link href={'/'}>Greece</Link></li>
                    <li><Link href={'/'}>Poland</Link></li>
                    <li><Link href={'/'}>Albania</Link></li>
                    <li><Link href={'/'}>Kosovo</Link></li>
                    <li><Link href={'/'}>France</Link></li>
                    <li><Link href={'/'}>Italy</Link></li>
                    <li><Link href={'/'}>Ukraine</Link></li>
                    <li><Link href={'/'}>Russia</Link></li>
                    

                </ul>
            </details>
  </div>
  <div>
  <details className="dropdown">
    <summary className=" font-bold m-1  ">Africa</summary>
    <ul className="menu bg-cyan-600 dropdown-content  rounded-box z-[1] w-64 p-2 shadow">
        <li><Link href={'/'}>Nigeria</Link></li>
        <li><Link href={'/'}>Kenya</Link></li>
        <li><Link href={'/'}>Uganda</Link></li>
        <li><Link href={'/'}>Morocoo</Link></li>
        <li><Link href={'/'}>Tanzania</Link></li>
        <li><Link href={'/'}>Ghana</Link></li>
        <li><Link href={'/'}>Egypt</Link></li>
    </ul>
</details>
  </div>
  <div>
   <details className="dropdown">
    <summary className=" font-bold m-1  ">MiddleEast and Central Asia</summary>
    <ul className="menu bg-cyan-600 dropdown-content  rounded-box z-[1] w-64 p-2 shadow">
        <li><Link href={'/'}>Turkey</Link></li>
        <li><Link href={'/'}>Qatar</Link></li>
        <li><Link href={'/'}>Saudi Arabia</Link></li>
        <li><Link href={'/'}>Uzbekistan</Link></li>
        <li><Link href={'/'}>Kazakhstan</Link></li>
        <li><Link href={'/'}>UAE</Link></li>
        <li><Link href={'/'}>Azerbaijan</Link></li>
    </ul>
</details>
</div>
<div>
<details className="dropdown">
    <summary className=" font-bold m-1  ">South Asia</summary>
    <ul className="menu bg-cyan-600 dropdown-content  rounded-box z-[1] w-64 p-2 shadow">
        <li><Link href={'/'}>India</Link></li>
        <li><Link href={'/'}>Pakistan</Link></li>
        <li><Link href={'/'}>Nepal</Link></li>
        <li><Link href={'/'}>Bangladesh</Link></li>
        <li><Link href={'/'}>Sri Lanka</Link></li>
  
    </ul>
</details>
</div>
<div>
<details className="dropdown">
    <summary className=" font-bold m-1  ">Asia Pacific</summary>
    <ul className="menu bg-cyan-600 dropdown-content  rounded-box z-[1] w-64 p-2 shadow">
        <li><Link href={'/'}>Japan</Link></li>
        <li><Link href={'/'}>Thailand</Link></li>
        <li><Link href={'/'}>China</Link></li>
        <li><Link href={'/'}>Vietnam</Link></li>
        <li><Link href={'/'}>Taiwan</Link></li>
        <li><Link href={'/'}>Hong Kong</Link></li>
        <li><Link href={'/'}>Malasiya</Link></li>
        <li><Link href={'/'}>Indonesia</Link></li>
        <li><Link href={'/'}>Philippines</Link></li>
        <li><Link href={'/'}>Korea</Link></li>
        <li><Link href={'/'}>Laos</Link></li>
    </ul>
</details>
</div>

  </>
  )
}

export default MiddleEast