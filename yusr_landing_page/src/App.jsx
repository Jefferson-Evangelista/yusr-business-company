import React from 'react'
import { Navbar, Hero, About, Services, Contacts, Footer } from './components'
import styles from './style'

const App = () =>  (
  <div className='bg-white w-full overflow-hidden'>
    <div className='bg-blue-gradient-2'>
      <div className= {`${styles.marginX}  ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className= {`${styles.marginX}  ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </div>
    <div className= {`${styles.marginX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <About/>
        </div>
    </div>
    <div className= {`${styles.flexCenter} bg-blue-gradient-2`}>
        <div className={`${styles.boxWidth} ${styles.paddingX} ${styles.marginY} `}>
          <Services />
        </div>
    </div>
    <div className= {`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} ${styles.marginX} ${styles.marginY}`}>
          <Contacts />
        </div>
    </div>
    <div className= {`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} ${styles.marginX} ${styles.marginY}`}>
          <Footer />
        </div>
    </div>
    
    
  </div>
)


export default App