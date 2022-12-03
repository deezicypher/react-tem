import { features } from '../constants';
import React from 'react';
import styles, {layout} from '../style';
import Button from './Button';

const {heading2, paragraph, flexCenter,flexStart}  = styles;
const {section, sectionInfo, sectionImg} = layout;


const FeatureCard = ({icon,title,content,index}) => (
  <div className={`flex  flex-row sm:p-6 rounded-[20px] ${index !== features.length - 1? 'mb-6': 'mb-0' }
  feature-card `} >
    <div className={`w-[64px] h-[64px] rounded-full ${flexCenter} bg-dimBlue`}>
        <img src={icon} alt="" className='w-[50%] h-[50%] object-contain' /> 
    </div>
    <div className='flex-1  flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[14px] leading-[23px]' >
        {content}
      </p>
    </div>
  </div>
) 



 
const About = () => {
  return (
    <div id="features" className={`${section}`}>
      <div className={sectionInfo}>
        <h2 className={heading2}>
          It's Frictionless <br className='sm:block hidden' />
           and Streamlined
        </h2>
        <p className={`${paragraph} max-w-[470px] mt-5`} >Unlock, your biggest assets, with the right oppurtunity.
       We are bridging the gap between crypto and Fiat. Spend and Withdraw your crypto anywhere 
       in the world.
        </p>
        <Button styles="mt-10" />
        </div>
    
    <div className={`${sectionImg} flex-col ${flexStart}`}>
      {features.map((feature,index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>

    </div>
  )
}

export default About