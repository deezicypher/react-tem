import React from 'react'
import styles, {layout} from '../style';
import Button from './Button';
import {card} from '../.././src/assets/images';

const {heading2, paragraph}  = styles;
const {section, sectionInfo, sectionImg} = layout;

const CardDeal = () => {
  return (
<section className={section}>
  <div className={sectionInfo}>
    <h2 className={heading2}>Choose from variaties<br className='sm:block hidden'/>
     of Cards in two easy steps</h2>
     <p className={`${paragraph} max-w-[470px] mt-5`}>
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
     </p>

     <Button styles="mt-10" />
  </div>
  <div className={sectionImg} >
    <img src={card} alt="" className='w-[100%] h-[100%]'/>
  </div>
</section>
  )
}

export default CardDeal