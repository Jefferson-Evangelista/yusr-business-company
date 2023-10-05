import React from 'react'
import styles, { layout } from '../style'
import { delivery } from '../assets'

const About = () => (
    <section id="about" className={`${styles.flexCenter} ${styles.marginY} `}>
      <div className={`${layout.sectionInfo}flex flex-col w-1/2 text-justify p-6 `} >
        <h1 className={`${styles.heading3} text-end`}>About Us</h1>
        <p className='indent-20'>Having an attractive, impeccable landscape is a must.
          It's good for the community and it's good for business.
          So, we create beautiful outdoor spaces, hands down.
          But that's only part of what you need, isn't it? A nice view isn't so nice if there were delays, cost overruns or cut corners to get there. So we also deliver project management excellence, courteous and capable staff and consistent results. With Landscape EL-Yusr you'll always have outstanding spaces and an outstanding experience.</p>
      </div>
      <div className={`${layout.sectionImg} pr-6`} >
        <img src={ delivery } alt="delivery" className='rounded-[10px]'/>
      </div>
    </section>
)

export default About