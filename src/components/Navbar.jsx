import React from 'react'

export default function Navbar() {
  return (
    <div className=' bg-bl-300 h-16 shadow-sm'>
      <div className=' flex justify-between items-center px-20 h-full'>
        <div className=' w-96 rounded-full border-[1px] border-black overflow-hidden flex items-center px-2'>
          <input className=' outline-none text-lg px-2 py-1 w-full' type="search" />
          <span className=' text-xl'><ion-icon name="search-outline"></ion-icon></span>
        </div>
        <div className=' flex items-center'>
          <span className=' text-xl pt-1 mx-2'><ion-icon name="person-outline"></ion-icon></span>
          <span className=' text-lg'>Edwar</span>
        </div>
      </div>
    </div>
  )
}
