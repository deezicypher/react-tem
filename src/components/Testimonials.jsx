import React from 'react';
import {feedback} from '../constants';
import styles from '../style';
import FeedBack from './FeedBack';

const {paddingY, flexCenter, paragraph, heading2} = styles;


const Testimonials = () => {
  return (
    <section id="testimonials" className={`${paddingY} ${flexCenter} flex-col relative`} >
      <div />
      <div className='w-full flex justify-between items-center  flex-col
       sm:mb-16 mb-6 relative z-[1]'>
          <h1 className={`${heading2}`}>What our Clients <br className='sm:block hidden'/>
          are Saying about us</h1>
          <div className='w-full md:mt-0 mt-6'>
          <p className={`${paragraph} text-left max-w-[450px]`}>
            Everything you need to accept both Fiat and Crypto Payment Anywhere 
            in the world and grow your business.
          </p>
          </div>
      </div>
      <div className='flex sm:flex-nowrap flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((card) => (
          <FeedBack key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials