import React from 'react'
import styles, { layout } from '../style'
import { landscaping } from '../assets'

const Hero = () => (

  <section id='home' className={`flex flex-col `}>
    <div className={`${layout.section} justify-start items-center `}>
      <img src={ landscaping } alt="landscaping" className='object-fit w-[400px] h-[200px] '/>
      <div className='w-1 h-80 bg-white mr-4'/>
      <div className='w-3/4'>
        <h1 className={`${styles.heading2} uppercase max-w-full`}>We're here to <br />make your landscape dreams come true </h1>
        <p className={`${styles.paragraph} w-4/5`}>Explore our services and let's create a stunning outdoor oasis together!</p>
        <button type='button' className='bg-darkBlue w-fit text-white font-bold px-4 py-2 mt-2 text-[14px] rounded-[10px]  '>Get Started</button>
      </div>
      
    </div>
    
    
    

  </section>

)


export default Hero