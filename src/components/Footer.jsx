import React from 'react';
import {logo, github} from '../assets/images';
import styles from '../style';
import { footerLinks } from '../constants';


const {flexCenter,paragraph,flexStart, paddingY} = styles;



const Footer = () => {
  return (
   <section className={`${flexCenter} ${paddingY} flex-col mb-8 w-full`}>
    <div className={`${flexStart} md:flex-row flex-col mb-8 w-full`}>
    <div className="flex flex-1 flex-col justify-start mr-10">
      <img src={logo} alt=""  className='w-[100px] h-[80px] object-contain'/>
      <p className={`${paragraph} mt-4 max-w-[310px]`} > 
        Conecting you to the future of finance
      </p>
      </div>
      <div className='flex-[1.5]  w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map( footerLink => (
            <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4>
            {footerLink.title}  
            </h4> 
            <ul className='list-none'>
            {footerLink.links.map((link, index) => (
              <li key={link.name} className={`font-poppins text-dimWhite text-[14px] 
              leading-[24px] hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>{link.name}</li>
            ))}  
            </ul> 
            </div>
        ))}
      </div>
      </div>
      <div className='flex border-t-[1px] border-t-[#3f3e45] w-full flex-col md:mt-0 mt-6'>
        <div className='flex flex-col'>
      <img src={github} alt=""  className='h-[30px] mt-5 object-contain'/>
     
        
        <p className='text-center mt-5 text-dimWhite text-[10px]'>DeeziTheViper</p>
        </div>

      <div className='mt-10 font-poppins font-normal text-center text-[14px] leading-[20px] text-dimWhite'>
        &copy; 2022 DeeziFi. All Rights Reserved
      </div>
      </div>
      
   </section>
  )
}

export default Footer