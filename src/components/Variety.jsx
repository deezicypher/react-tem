import React from 'react'
import styles, {layout} from '../style';
import Button from './Button';
import {card} from '../assets/images';

const {heading2, paragraph}  = styles;
const {section, sectionInfo, sectionImg} = layout;

const Variety = () => {
  return (
<section className={section}>
  <div className={sectionInfo}>
    <h2 className={heading2}>Choose from varieties<br className='sm:block hidden'/>
     of Cards in two easy steps</h2>
     <p className={`${paragraph} max-w-[470px] mt-5`}>
     Choose from a variety of cards in just two easy steps with our selection tool. With options ranging from classic designs to more modern and contemporary styles, you're sure to find a card that fits your preferences and needs. Simply select your desired card type and customize it with your own personal touch.
     </p>

     <Button styles="mt-10" />
  </div>
  <div className={sectionImg} >
    <img src={card} alt="" className='w-[100%] h-[100%]'/>
  </div>
</section>
  )
}

export default Variety