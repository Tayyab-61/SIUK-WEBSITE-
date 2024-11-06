'use client'
import React from 'react'

import MiddleEast from './MiddleEast'

function SelectCountry() {
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="rounded-xl bg-cyan-50 w-6 h-6 " onClick={() => document.getElementById('my_modal_3').showModal()}>F</button>
            <dialog id="my_modal_3" className="modal">
                <div className="countrydiv modal-box w-full h-full bg-blue-900 text-white">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Please Select a Country</h3>
                    
                    <div className='mt-4 p-4 '>
                        <MiddleEast/>
                    </div>
                  
                </div>
            </dialog>
        </>
    )
}

export default SelectCountry