import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className='bg-slate-100'>

       <div className='flex justify-between items-center bg-slate-100 mx-auto p-3 max-w-6xl'>
       <h1 className='font-mono font-extrabold text-2xl'>
            <span className='text-red-500'>Used</span>
            <span className='text-green-500'>Cars</span>
        </h1>

        <div className='flex justify-center rounded-lg items-center bg-white p-1'>
            <input type="text" placeholder='search...' 
            className='  items-center flex p-3 focus:outline-none' />
            <FaSearch className='text-md'/>
            


        </div>

        <div className='sm:flex justify-between items-center gap-2 text-xs hidden '>

            <Link to={'/'}>
          <h6>Home</h6>
          </Link>


          <Link to={'/about'}>
          <h6>About</h6>
          </Link>


          <Link to={'/signin'}>
          <h6>Signin</h6>
          </Link>
        </div>
       </div>



    </header>
  )
}

export default Header