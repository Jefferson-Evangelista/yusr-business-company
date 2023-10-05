import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsFillTelephoneFill} from 'react-icons/bs';
import { BiLogoGmail, BiWorld } from 'react-icons/bi'
import styles from '../style'


const Contacts = () => (
    <section id='contacts' className={`${styles.flexCenter} ${styles.marginX} border-none shadow-2xl`}>
      <div className='flex-col'>
        <h1 className={`${styles.heading3} text-darkBlue text-end`}>CONTACT US</h1>
        <div className='w-full h-[0.5px] bg-green-gradient mb-5 '/>
        <div className='flex w-full justify-between items-center '>
          <BsFacebook size={40} className='fill-darkBlue cursor-pointer' />
          <BsTwitter size={40} className='fill-darkBlue cursor-pointer' />
          <BsInstagram size={40} className='fill-darkBlue cursor-pointer' />
          <BiLogoGmail size={40} className='fill-darkBlue cursor-pointer'/>
        </div>
      </div>
      <div className='w-1 h-80 bg-darkBlue ml-4 my-6'/>
      <div className='bg-green-gradient justify-start items-start bg-green flex-col pl-5 pr-8 py-12 '>
        <div className='flex flex-row justify-center items-center mb-4'>
          <BsFillTelephoneFill size={30} className='fill-white cursor-pointer'/>
          <p className={`font-bold text-white text-2xl ml-4`}>+966533416292</p>
        </div>
        <div className='flex flex-row justify-start items-start mr-5'>
          <BiWorld size={38} className='fill-white cursor-pointer'/>
          <p className={`font-bold text-white text-2xl ml-4`}>alyusr.website</p>
        </div>
        
         
          

          

      </div>

    </section>
)


export default Contacts