import React from 'react'
import { navLinks } from '../constants'
import { logo } from '../assets'

const Navbar = () => {
  return (
    <nav>
      <div  className={`flex justify-start items-center text-white navbar`}>
        <img src={ logo } alt="yusr logo" className='w-16 my-4' />     
        <h1 className='font-poppins font-bold '>YUSR BUSINESS <br/> COMPANY</h1>
        <ul className='list-none sm:flex hidden justify-center items-center flex-1'>
          
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins uppercase font-semibold cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-5'}   `}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>

            </li>
          ))}
          
        </ul>

        <button className='font-poppins uppercase font-semibold cursor-pointer text-[16px]'>Login / Register</button>
      </div>
      <div className='w-full h-[1px] bg-darkBlue '/>
     
    </nav>
  )
}

export default Navbar