import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around'>
        <h1 className='text-lg font-semibold'>Todo app</h1>
            <ul className='flex gap-[40px]'>
                <li  >Home</li>
                <li className=''>Product</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
    </div>
  )
}

export default Navbar