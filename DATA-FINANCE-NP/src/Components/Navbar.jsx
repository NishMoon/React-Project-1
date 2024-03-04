import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar() {

  const [nav, SetNav] = useState(false)

  const handleNav = () => {
    SetNav(!nav)
  }  

  return (
    <div className="flex justfiy-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className='w-full text-3xl font-bold text-green-400'>Literature Data</h1>
      <ul className='md:flex hidden'>
        <li className='p-4 hover:text-green-300 cursor-pointer'>Home</li>
        <li className='p-4 hover:text-green-300 cursor-pointer'>Company</li>
        <li className='p-4 hover:text-green-300 cursor-pointer'>Resources</li>
        <li className='p-4 hover:text-green-300 cursor-pointer'>About</li>
        <li className='p-4 hover:text-green-300 cursor-pointer'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={!nav ? 'fixed top-0 left-0 w-[60%] border-r border-gray-900 h-full bg-gray-900 ease-in-out duration-500' : 'fixed  left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold text-green-400 m-4'>Literature Data</h1>
        <ul className=' p-4 uppercase'>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4 border-b border-gray-600'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar