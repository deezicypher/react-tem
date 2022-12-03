import React from 'react'
import button from './Button'
import styles from '../style'
import Button from './Button';

const {flexCenter,heading2,paragraph, marginY, padding} = styles;


const CTA = () => {
  return (
   <section className={`${flexCenter} ${marginY} ${padding} 
   sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow`}>
    <div className='flex flex-col flex-1'>
      <h2 className={`${heading2}`}>Let's try our service now</h2>
      <p className={`${paragraph} max-w-[540px] mt-5`}>Everything you need to accept both fiat and crypto for both 
        your business and crypto anywhere in the world</p>  
    </div>
    <div className={`${flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
   </section>
  )
}

export default CTA