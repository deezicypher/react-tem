import React from 'react'
import {cardH,cardsH } from '../assets/images';
import styles from '../style';
const {paddingY,paddingX, flexStart,paragraph} = styles;

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${paddingY}`}>
      <div className={`flex-5 ${flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
         <div className='flex flex-col justify-between  w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] 
          text-[48px] text-white ss:leading-[100px] leading-[75px]'>
            Unlock the <br className='sm:block hidden'/> {" "}
            <span className='text-gradient'>Potential</span>{" "}
            of crypto assets
          </h1>
          <p className={`${paragraph} max-w-[470px] mt-5`} >
            Connecting you to the future of finance.Everything you need to accept both Fiat and Crypto Payment Anywhere 
            in the world
          </p>
         </div>
       
      </div>
      <div className={`${paddingX} flex-2 `}>
          <img src={cardsH} alt="" className='w-[100%] h-[100%] relative z-[5]'/>
          <div className='absolute z-[0] w-[40%] h-[35%] top-20 blue__gradient' />
          <div className='absolute z-[1] w-[20%] h-[30%] rounded-full bottom-40  green__gradient' />
          <div className='absolute z-[2] w-[10%] h-[10%] bottom-0 right-0 green__gradient' />
         </div>
    </section>
  )
}

export default Hero