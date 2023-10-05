import React from 'react'
import styles from '../style'
import { mowing, lawn, garden, irrigation, snow } from '../assets'

const Services = () => (
  <section id='services' className={`${styles.flexCenter} pt-5 pb-20  flex-col text-center shadow-2xl border-darkBlue `}>
    <h1 className={`${styles.heading2} pt-5 `}>Services</h1>
    
    <div className='w-full h-[1px] bg-darkBlue '/>
    <div className={` flex flex-row flex-wrap gap-10 justify-center w-full mt-16`}>
      <div className='container w-60 border-2  rounded-[15px] bg-white shadow-lg'>
        <img src={ mowing } alt="mowing" className='rounded-t-[15px] object-fit' />
        <div className='p-6'>
          <h1 className={`${styles.heading4} mb-2`}>Mowing</h1>
          <p className={`${styles.paragraph2}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eaque.</p>
        </div>
        
      </div>
      <div className='container w-60 border-2  rounded-[15px] bg-white shadow-lg'>
        <img src={ lawn } alt="mowing" className='rounded-t-[15px] object-fit' />
        <div className='p-6'>
          <h1 className={`${styles.heading4} mb-2`}>Lawn Care</h1>
          <p className={`${styles.paragraph2}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eaque.</p>
        </div>
      </div>
      <div className='container w-60 border-2  rounded-[15px] bg-white shadow-lg'>
        <img src={ garden } alt="mowing" className='rounded-t-[15px] object-fit' />
        <div className='p-6'>
          <h1 className={`${styles.heading4} mb-2`}>Garden Care</h1>
          <p className={`${styles.paragraph2}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eaque.</p>
        </div>
      </div>
      <div className='container w-60 border-2  rounded-[15px] bg-white shadow-lg'>
        <img src={ irrigation } alt="mowing" className='rounded-t-[15px] object-fit' />
        <div className='p-6'>
          <h1 className={`${styles.heading4} mb-2`}>Irrigation System Repairs & Maintenance</h1>
          <p className={`${styles.paragraph2}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eaque.</p>
        </div>
      </div>
      <div className='container w-60 border-2  rounded-[15px] bg-white shadow-lg'>
        <img src={ snow } alt="mowing" className='rounded-t-[15px] object-fit' />
        <div className='p-6'>
          <h1 className={`${styles.heading4} mb-2`}>Snow & Ice Maintenance</h1>
          <p className={`${styles.paragraph2}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eaque.</p>
        </div>
      </div>
      
      
    </div>

  </section>
)


export default Services