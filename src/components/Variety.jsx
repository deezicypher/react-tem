import React from 'react'
import styles, {layout} from '../style';
import Button from './Button';
import {cardsH} from '../assets/images';

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
    <img src={cardsH} alt="" className='w-[90%] h-[90%]'/>

    <div className='absolute z-[0] w-[40%] h-[35%] top-20 blue__gradient' />
          <div className='absolute z-[1] w-[20%] h-[30%] rounded-full bottom-40  green__gradient' />
          <div className='absolute z-[2] w-[10%] h-[10%] bottom-0 right-0 green__gradient' />
  </div>
</section>
  )
}

export default Variety