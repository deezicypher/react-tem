import React from 'react'
import { quotes } from '../assets/images'



const FeedBack = ({content, name, title, img}) => {
  return (
    <div className='flex justify-between flex-col py-12 px-10 rounded-[20px] max-w-[370px] 
    md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
        <img src={quotes} alt="" className='w-[42px] h-[27px] object-contain' />
        <p className='font-poppins font-normal 
        text-[18px] leading-[32px] text-white
        my-10
        '>{content}</p>
        <div className='flex flex-grow'>
          <div className='flex flex-col ml-4'>
              <h4 className='font-poppins font-normal text-[18px]
               leading-[32px]
               text-white '>
                  {name}
               </h4>
               <p className='font-poppins font-normal 
               text-[14px] leading-[24px]
               text-dimWhite'>{title}</p>
          </div>
        </div>
      </div>
  )
}

export default FeedBack